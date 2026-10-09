# Near Confidential Intents — contributor research dossier

Mainnet confidential accounts and swaps on FAR, assessed through the near.com reference client. Evidence cutoff: **8 October 2026**. Independent manual contributor draft; the benchmark authors' automated evaluator was not run.

**84 answered, 21 unknown, 1 permitted N/A; 26.038% (26.0% displayed).** Original rubric 1.3.0 derives Public 3/5 (Z3), unrated Operator and failed Walkaway. Unknowns score as the riskiest option; they are insufficient reviewed evidence, not 21 proven defects or a measured percentage of privacy.

## Scope and review status

Scope includes FAR/intents.far, required bridge/relay/account services and public backing where used. Public NEAR's ordinary decentralization, age and unrelated NEAR AI/Chain Signatures guarantees are not inherited by FAR. Foreign-to-foreign swaps are a distinct route. The documented treasury, Earn and Perps paths count only for applicable criteria.

This folder proposes research for a **new project**, not a change to an existing published score. It is outside the fictional samples and private golden set. It does not add a server importer, modify the site or create an upstream release. Merging it cannot publish Near: editors control the site's database and review/release process.

Read [EDITOR_REVIEW.md](EDITOR_REVIEW.md) before accepting the proposed data-location and public-app classifications. App-level identity proofs mean developers can build an approved application, not a deployed native credential system. Seven validators and their independence are vendor claims, not an owner census. Perps anonymity retains marketing provenance; private host/bridge deployed bytes and operator data access remain unverified. The default-mode documentation conflict is unknown.

## Package

- `assessment.json`: all 106 answers, scoped rationale, exact quotes, search logs and adversary matrix.
- `sources.json` and `sources/`: publisher URLs, dates, hashes and evaluated/context scope; quoted sources remain readable text.
- `archives.json`, `supporting-sources.json.gz`, `corpus.json`, `corpus.json.gz`: lossless archives of additional evidence and466 pinned public-source files. Each archive is a gzip-compressed JSON array of `{file,contentMd}` entries. Archive and individual-content hashes are checked; paths identify preserved originals. Archived code is data, never executed.
- `information-gaps.md/json`: every remaining unknown and examples of sufficient evidence.
- `review.json`, `code-check.json`, `proofs/`: current review decisions, retained checks and compact build/controller/DAO/audit/source provenance.
- `results.json`: derived results, not scoring input.
- `validate.ts`: offline dossier checker reusing existing rubric, quote verifier, absence policy and coverage functions; no database import, models or publication.
- `PULL_REQUEST_DRAFT.md`: proposed submission text, not a submitted PR.

Historical research iterations and the optional generic manual importer proposal are preserved locally outside this package; they are not part of the proposed diff.

## Reproduce

With the repository's pinned Node/pnpm versions and existing dependencies, from the repository root:

```sh
pnpm exec tsx contributions/near-confidential-intents/validate.ts
pnpm test:all
```

The checker verifies archive/source hashes, exact quotes, one answer per criterion, valid options/N/A, context boundaries, search logs, answer/matrix consistency, original scoring and ordinary research coverage. It re-runs allowed feature-absence patterns over the preserved code corpus instead of trusting a supplied attestation. It cannot prove source statements true or establish unpublished private behavior.

Research covers 106/106 criteria; ordinary coverage is105/106 with no blocker because the zero-point TPS option explicitly includes unknown speed. There is no measured private TPS claim. Current public Verifier/controller match vendor artifact bytes; independent recompilation and private deployed-code correspondence are not claimed. Historical measurements retain their original dates. Other projects are not reevaluated or included in this submission.

## Editorial use

Use this dossier as input to ordinary editorial review or the authors' evaluator. Accepting a contributor interpretation still requires an editor; quote verification and successful tests are not a privacy certification. Local screenshots/release data and unpublished comparison databases stay outside Git. Research used public sources; no paid benchmark evaluation, private-user queries, wallet signatures or financial transactions were performed. This dossier does not publish an upstream score.

Validated against upstream `0521a0310149290a6bfff7ebc3e5a0339f477e5d`: **510 unit tests and 55 browser scenarios passed**. Default scoring remains 26.038%; other projects are unchanged. The dossier does not alter the new community-weighting implementation.
