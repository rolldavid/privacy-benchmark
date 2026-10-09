/** Offline dossier check. Reuses the original rubric, quote verifier, absence policy and coverage checks. No import or publication. */
import { createHash } from "node:crypto";
import { existsSync, readFileSync, realpathSync } from "node:fs";
import { dirname, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { gunzipSync } from "node:zlib";
import { ABSENCE_POLICY, absenceRefusal, patternMatcher } from "../../apps/server/src/eval/absence.ts";
import { coverageFrom } from "../../apps/server/src/services/coverage.ts";
import { verifyQuote } from "../../apps/server/src/services/quotes.ts";
import { httpUrlSchema, projectInputSchema } from "../../packages/core/src/index.ts";
import {
  type AdversaryMatrix,
  type AnswerMap,
  BADGE_DRIVING,
  consistencyConflicts,
  criteria,
  findCriterion,
  lowestOption,
  matrixConflicts,
  rubric,
  type SourceClass,
  scoreProject,
} from "../../packages/rubric/src/index.ts";

type Source = {
  id: string;
  url: string;
  file: string;
  kind: string;
  sourceClass: SourceClass;
  scope: "evaluated" | "context";
  date: string | null;
  contentHash: string;
  originalTextFile?: string;
  originalTextHash?: string;
};
type Evidence = { sourceId: string; quote: string; claim: string; stance: "supports" | "contradicts" | "context" };
type Answer = {
  criterionId: string;
  status: "answered" | "unknown" | "not_applicable";
  optionId: string | null;
  rationale: string;
  confidence: string;
  evidence: Evidence[];
  searchLog?: { searched: string[]; note: string; codeChecked?: boolean };
  absence?: { scope: "code" | "docs"; patterns: string[] };
};
const root = realpathSync(dirname(fileURLToPath(import.meta.url)));
function assert(ok: unknown, message: string): asserts ok {
  if (!ok) throw new Error(message);
}
function inside(file: string) {
  const p = resolve(root, file);
  const rel = relative(root, p);
  assert(rel && rel !== ".." && !rel.startsWith(`..${sep}`), `Path leaves dossier: ${file}`);
  return p;
}
function read(file: string) {
  const p = realpathSync(inside(file));
  const rel = relative(root, p);
  assert(rel && rel !== ".." && !rel.startsWith(`..${sep}`), `Symlink leaves dossier: ${file}`);
  return readFileSync(p);
}
const sha = (v: string | Uint8Array) => createHash("sha256").update(v).digest("hex");
const json = (file: string) => JSON.parse(read(file).toString("utf8"));
const archived = new Map<string, string>();
for (const archive of json("archives.json")) {
  const bytes = read(archive.file);
  assert(sha(bytes) === archive.contentHash, `Archive hash mismatch: ${archive.file}`);
  const raw = gunzipSync(bytes, { maxOutputLength: 64 * 1024 * 1024 });
  assert(sha(raw) === archive.uncompressedHash, `Decompressed hash mismatch: ${archive.file}`);
  const entries = JSON.parse(raw.toString("utf8"));
  assert(entries.length === archive.entries, `Archive count mismatch: ${archive.file}`);
  for (const entry of entries) {
    inside(entry.file);
    assert(typeof entry.contentMd === "string" && !archived.has(entry.file), `Invalid/duplicate archive entry: ${entry.file}`);
    assert(!existsSync(inside(entry.file)), `Duplicate physical/archive file: ${entry.file}`);
    archived.set(entry.file, entry.contentMd);
  }
}
function text(file: string): string {
  return archived.get(file) ?? read(file).toString("utf8");
}
const data = json("assessment.json") as { rubricVersion: string; asOf: string; project: Record<string, unknown>; answers: Answer[]; matrix: AdversaryMatrix };
assert(data.rubricVersion === rubric.version, "Rubric version mismatch");
assert(/^\d{4}-\d{2}-\d{2}$/.test(data.asOf), "Invalid cutoff date");
projectInputSchema.parse({ ...data.project, websiteUrl: data.project.website });
const sources = json("sources.json") as Source[];
const corpus = json("corpus.json") as Source[];
const all = [...sources, ...corpus];
for (const key of ["id", "url", "file"] as const) assert(new Set(all.map((s) => s[key])).size === all.length, `Duplicate ${key}`);
const sourceById = new Map(sources.map((s) => [s.id, s]));
const rank: SourceClass[] = ["code_onchain", "independent", "official_docs", "third_party", "marketing"];
for (const s of all) {
  httpUrlSchema.parse(s.url);
  assert(rank.includes(s.sourceClass) && ["evaluated", "context"].includes(s.scope), `Invalid source class/scope: ${s.id}`);
  assert(!s.date || (/^\d{4}-\d{2}-\d{2}$/.test(s.date) && s.date <= data.asOf), `Invalid/post-cutoff source date: ${s.id}`);
  const body = text(s.file);
  assert(sha(body) === s.contentHash, `Source hash mismatch: ${s.id}`);
  if (s.originalTextFile) assert(sha(text(s.originalTextFile)) === s.originalTextHash, `Original capture hash mismatch: ${s.id}`);
  assert(!/^# Search attestation:/m.test(body), `Supplied search attestation is not allowed: ${s.id}`);
}
const ids = new Set(data.answers.map((a) => a.criterionId));
assert(
  ids.size === criteria.length && data.answers.length === criteria.length && criteria.every((c) => ids.has(c.id)),
  "Research every criterion exactly once",
);
const answers: AnswerMap = {};
const verified: { id: string; criterionId: string; verified: boolean; stance: string; verifyNote: string | null; sourceClass: string }[] = [];
const absenceChecks: { criterionId: string; scope: string; patterns: string[]; files: number; manifestHash: string; matches: number }[] = [];
const results = data.answers.map((a) => {
  const c = findCriterion(a.criterionId)!;
  assert(["answered", "unknown", "not_applicable"].includes(a.status), `Invalid status: ${c.id}`);
  assert(a.rationale.length >= 20 && ["high", "medium", "low"].includes(a.confidence), `Missing rationale/confidence: ${c.id}`);
  if (a.status === "answered")
    assert(
      c.options.some((o) => o.id === a.optionId),
      `Invalid option: ${c.id}`,
    );
  else assert(a.optionId === null && (a.status !== "not_applicable" || c.naAllowed), `Invalid unanswered/N/A option: ${c.id}`);
  const noData = a.status === "answered" && a.optionId === c.noDataOption;
  const explicitUnknown =
    a.status === "answered" &&
    !c.highImpact &&
    !BADGE_DRIVING.has(c.id) &&
    c.options.some((o) => o.id === a.optionId && o.points === 0 && /\bunknown\b/i.test(o.label));
  if (a.status === "unknown" || noData || explicitUnknown)
    assert(
      a.searchLog?.searched.length && a.searchLog.searched.every((x) => typeof x === "string" && x.trim()) && a.searchLog.note,
      `Missing research log: ${c.id}`,
    );
  const classes: SourceClass[] = [];
  const decisive: string[] = [];
  for (const [i, e] of a.evidence.entries()) {
    const s = sourceById.get(e.sourceId);
    assert(s, `Unknown source: ${e.sourceId}`);
    assert(["supports", "contradicts", "context"].includes(e.stance) && e.claim && e.quote.length >= 20, `Invalid evidence: ${c.id}`);
    const check = verifyQuote(e.quote, text(s.file));
    assert(check.verified && check.method === "exact", `Quote mismatch: ${c.id}/${s.id}`);
    assert(s.scope !== "context" || e.stance === "context", `Context cannot establish answer: ${c.id}/${s.id}`);
    const id = `${c.id}:${i}`;
    verified.push({ id, criterionId: c.id, verified: true, stance: e.stance, verifyNote: null, sourceClass: s.sourceClass });
    if (e.stance !== "context") {
      decisive.push(id);
      classes.push(s.sourceClass);
    }
  }
  if (a.absence) {
    const { scope } = a.absence;
    const refusal = absenceRefusal(c.id, scope);
    assert(!refusal, refusal ?? "");
    const policy = ABSENCE_POLICY[c.id];
    assert(policy && !policy.favorableWhenAbsent && a.status === "answered" && a.optionId === lowestOption(c).id, `Invalid feature-absence claim: ${c.id}`);
    assert(
      a.absence.patterns.length <= 12 && a.absence.patterns.every((p) => p.length >= 3 && p.length <= 80 && !/[\r\n]/.test(p)),
      `Invalid search patterns: ${c.id}`,
    );
    const patterns = [...new Set([...policy.patterns, ...a.absence.patterns])];
    assert(patterns.length, `Missing search patterns: ${c.id}`);
    const kinds = scope === "code" ? ["code"] : ["docs", "website", "blog"];
    const files = all.filter((s) => kinds.includes(s.kind));
    assert(files.length >= (scope === "code" ? 5 : 10), `Insufficient absence scope: ${c.id}`);
    const matchers = patterns.map((p) => patternMatcher(p));
    for (const file of files)
      for (const line of text(file.file).split("\n")) assert(!matchers.some((m) => m(line, line.toLowerCase())), `Feature match in ${file.id}: ${c.id}`);
    const sourceClass = scope === "code" ? "code_onchain" : "official_docs";
    const id = `${c.id}:recomputed-absence`;
    decisive.push(id);
    classes.push(sourceClass);
    verified.push({ id, criterionId: c.id, verified: true, stance: "contradicts", verifyNote: "search attestation", sourceClass });
    absenceChecks.push({
      criterionId: c.id,
      scope,
      patterns,
      files: files.length,
      manifestHash: sha(JSON.stringify(files.map((s) => ({ id: s.id, url: s.url, contentHash: s.contentHash })))),
      matches: 0,
    });
  }
  assert(a.status === "unknown" || noData || explicitUnknown || decisive.length, `Missing establishing evidence: ${c.id}`);
  classes.sort((x, y) => rank.indexOf(x) - rank.indexOf(y));
  answers[c.id] = { criterionId: c.id, status: a.status, optionId: a.optionId, verifiability: classes[0] ?? null };
  return { ...a, overrideStatus: null, decisiveEvidenceIds: decisive };
});
const conflicts = [...consistencyConflicts(answers), ...matrixConflicts(data.matrix, answers)];
assert(!conflicts.length, conflicts.map((x) => x.message).join("; "));
const gaps = json("information-gaps.json");
const unknown = data.answers
  .filter((a) => a.status === "unknown")
  .map((a) => a.criterionId)
  .sort();
assert(
  gaps.unknownCount === unknown.length && JSON.stringify(gaps.gaps.map((g: { criterionId: string }) => g.criterionId).sort()) === JSON.stringify(unknown),
  "Gap list differs from unknowns",
);
const scores = scoreProject(answers);
const coverage = coverageFrom(results, verified, null, { requireCodeCheck: true });
assert(!coverage.blocker && coverage.notResearched === 0, `Research coverage blocker: ${coverage.blocker}`);
const saved = json("results.json");
assert(
  saved.overall === scores.overall &&
    saved.privacyLevel === scores.level &&
    saved.trustTier === scores.trustTier &&
    JSON.stringify(saved.walkaway) === JSON.stringify(scores.walkaway) &&
    scores.suites.every((s) => saved.suites[s.suiteId] === s.score),
  "Saved results differ from original scorer",
);
console.log(
  JSON.stringify(
    {
      project: data.project.name,
      rubricVersion: rubric.version,
      asOf: data.asOf,
      sources: sources.length + absenceChecks.length,
      corpusFiles: corpus.length,
      answered: data.answers.filter((a) => a.status === "answered").length,
      unknown: unknown.length,
      notApplicable: data.answers.filter((a) => a.status === "not_applicable").length,
      scores,
      coverage,
      absenceChecks,
      note: "Offline validation only. Quotes/hashes/scoring verified; source truth and the scoped interpretations require editorial judgment. No model, database import or publication.",
    },
    null,
    2,
  ),
);
