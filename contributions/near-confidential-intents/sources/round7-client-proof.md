!(function () {
  try {
    var e =
        "undefined" != typeof globalThis
          ? globalThis
          : "undefined" != typeof global
            ? global
            : "undefined" != typeof window
              ? window
              : "undefined" != typeof self
                ? self
                : {},
      n = new e.Error().stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "f9f23437-cc6b-0808-9dcb-1b8ddc495810");
  } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  830570,
  562181,
  (e) => {
    "use strict";
    var t,
      n = e.i(789477);
    e.s([], 911317), e.i(911317), e.i(335292);
    var a = e.i(696150),
      i = e.i(860549),
      o = e.i(137546),
      r = e.i(412701),
      s = e.i(877519),
      l = e.i(626503),
      u = e.i(851866),
      c = e.i(572386),
      d = e.i(503208),
      p = e.i(936433),
      m = e.i(68695),
      f = e.i(618105);
    let h = a.createContext(void 0);
    var k = e.i(29476);
    let y =
        (((t = {}).checked = "data-checked"),
        (t.unchecked = "data-unchecked"),
        (t.disabled = "data-disabled"),
        (t.readonly = "data-readonly"),
        (t.required = "data-required"),
        (t.valid = "data-valid"),
        (t.invalid = "data-invalid"),
        (t.touched = "data-touched"),
        (t.dirty = "data-dirty"),
        (t.filled = "data-filled"),
        (t.focused = "data-focused"),
        t),
      g = { ...k.fieldValidityMapping, checked: (e) => (e ? { [y.checked]: "" } : { [y.unchecked]: "" }) };
    var A = e.i(833065),
      T = e.i(934360),
      E = e.i(396079),
      R = e.i(948587),
      I = e.i(326870),
      w = e.i(696916),
      b = e.i(576444),
      C = e.i(219682),
      v = e.i(105525);
    let x = a.forwardRef(function (e, t) {
        let {
            checked: f,
            className: k,
            defaultChecked: y,
            "aria-labelledby": x,
            id: N,
            inputRef: S,
            name: O,
            nativeButton: _ = !1,
            onCheckedChange: D,
            readOnly: F = !1,
            required: B = !1,
            disabled: P = !1,
            render: W,
            uncheckedValue: M,
            value: U,
            ...Q
          } = e,
          { clearErrors: q } = (0, E.useFormContext)(),
          {
            state: j,
            setTouched: L,
            setDirty: H,
            validityData: $,
            setFilled: z,
            setFocused: K,
            shouldValidateOnChange: V,
            validationMode: G,
            disabled: X,
            name: Y,
            validation: J,
          } = (0, T.useFieldRootContext)(),
          { labelId: Z } = (0, R.useLabelableContext)(),
          ee = X || P,
          et = Y ?? O,
          en = (0, o.useStableCallback)(D),
          ea = a.useRef(null),
          ei = (0, r.useMergedRefs)(ea, S, J.inputRef),
          eo = a.useRef(null),
          er = (0, p.useBaseUiId)(),
          es = (0, w.useLabelableId)({ id: N, implicit: !1, controlRef: eo }),
          el = _ ? void 0 : es,
          [eu, ec] = (0, i.useControlled)({ controlled: f, default: !!y, name: "Switch", state: "checked" });
        (0, A.useField)({ id: er, commit: J.commit, value: eu, controlRef: eo, name: et, getValue: () => eu }),
          (0, s.useIsoLayoutEffect)(() => {
            ea.current && z(ea.current.checked);
          }, [ea, z]),
          (0, v.useValueChanged)(eu, () => {
            q(et), H(eu !== $.initialValue), z(eu), V() ? J.commit(eu) : J.commit(eu, !0);
          });
        let { getButtonProps: ed, buttonRef: ep } = (0, m.useButton)({ disabled: ee, native: _ }),
          em = (0, I.useAriaLabelledBy)(x, Z, ea, !_, el),
          ef = a.useMemo(
            () =>
              (0, d.mergeProps)(
                {
                  checked: eu,
                  disabled: ee,
                  id: el,
                  name: et,
                  required: B,
                  style: et ? l.visuallyHiddenInput : l.visuallyHidden,
                  tabIndex: -1,
                  type: "checkbox",
                  "aria-hidden": !0,
                  ref: ei,
                  onChange(e) {
                    if (e.nativeEvent.defaultPrevented) return;
                    let t = e.target.checked,
                      n = (0, b.createChangeEventDetails)(C.REASONS.none, e.nativeEvent);
                    en?.(t, n), n.isCanceled || ec(t);
                  },
                  onFocus() {
                    eo.current?.focus();
                  },
                },
                J.getInputValidationProps,
                void 0 !== U ? { value: U } : u.EMPTY_OBJECT,
              ),
            [eu, ee, ei, el, et, en, B, ec, J, U],
          ),
          eh = a.useMemo(() => ({ ...j, checked: eu, disabled: ee, readOnly: F, required: B }), [j, eu, ee, F, B]),
          ek = (0, c.useRenderElement)("span", e, {
            state: eh,
            ref: [t, eo, ep],
            props: [
              {
                id: _ ? es : er,
                role: "switch",
                "aria-checked": eu,
                "aria-readonly": F || void 0,
                "aria-required": B || void 0,
                "aria-labelledby": em,
                onFocus() {
                  ee || K(!0);
                },
                onBlur() {
                  let e = ea.current;
                  e && !ee && (L(!0), K(!1), "onBlur" === G && J.commit(e.checked));
                },
                onClick(e) {
                  F ||
                    ee ||
                    (e.preventDefault(),
                    ea.current?.dispatchEvent(
                      new PointerEvent("click", { bubbles: !0, shiftKey: e.shiftKey, ctrlKey: e.ctrlKey, altKey: e.altKey, metaKey: e.metaKey }),
                    ));
                },
              },
              J.getValidationProps,
              Q,
              ed,
            ],
            stateAttributesMapping: g,
          });
        return (0, n.jsxs)(h.Provider, {
          value: eh,
          children: [ek, !eu && et && void 0 !== M && (0, n.jsx)("input", { type: "hidden", name: et, value: M }), (0, n.jsx)("input", { ...ef })],
        });
      }),
      N = a.forwardRef(function (e, t) {
        let { render: n, className: i, ...o } = e,
          { state: r } = (0, T.useFieldRootContext)(),
          s = (function () {
            let e = a.useContext(h);
            if (void 0 === e) throw Error((0, f.default)(63));
            return e;
          })(),
          l = { ...r, ...s };
        return (0, c.useRenderElement)("span", e, { state: l, ref: t, stateAttributesMapping: g, props: o });
      });
    e.s(["Root", 0, x, "Thumb", 0, N], 708086);
    var S = e.i(708086);
    e.s(["Switch", 0, S], 562181);
    var S = S,
      O = e.i(956570),
      _ = e.i(470733);
    e.s(
      [
        "default",
        0,
        ({
          id: e,
          checked: t,
          onCheckedChange: a,
          disabled: i,
          isLoading: o,
          className: r,
          "aria-label": s,
          "aria-labelledby": l,
          "aria-describedby": u,
          "data-testid": c,
        }) =>
          (0, n.jsx)(S.Root, {
            id: e,
            checked: t,
            onCheckedChange: a,
            disabled: i,
            "aria-label": s,
            "aria-labelledby": l,
            "aria-describedby": u,
            "data-testid": c,
            className: (0, _.default)(
              "group relative inset-ring inset-ring-gray-900/5 flex h-6 w-13 cursor-pointer rounded-lg bg-gray-200 p-[3px] outline-gray-900 outline-offset-2 transition-colors duration-200 ease-in-out focus-visible:outline-2 dark:bg-gray-700 dark:focus-visible:outline-white",
              "data-disabled:cursor-not-allowed data-disabled:opacity-50",
              "data-checked:bg-green-600",
              r,
            ),
            children: (0, n.jsx)(S.Thumb, {
              className:
                "pointer-events-none inline-flex h-4.5 w-6 translate-x-0 items-center justify-center rounded-md bg-white ring-0 transition duration-200 ease-in-out data-checked:translate-x-5.5",
              children: o && (0, n.jsx)(O.default, { className: "text-gray-400", size: "xs" }),
            }),
          }),
      ],
      830570,
    );
  },
  606030,
  (e) => {
    "use strict";
    e.s([
      "decodeProof",
      0,
      function (e) {
        let t = e.replaceAll("-", "+").replaceAll("_", "/"),
          n = atob(t.padEnd(4 * Math.ceil(t.length / 4), "="));
        return JSON.parse(new TextDecoder().decode(Uint8Array.from(n, (e) => e.charCodeAt(0))));
      },
      "encodeProof",
      0,
      function (e) {
        let t = new TextEncoder().encode(JSON.stringify(e)),
          n = "";
        for (let e of t) n += String.fromCharCode(e);
        return btoa(n).replaceAll("+", "-").replaceAll("/", "_").replace(/=+$/, "");
      },
      "proofSigningMessage",
      0,
      function (e) {
        return new TextEncoder().encode(
          `near_proof_of_transaction:v1\0${JSON.stringify(
            (function e(t) {
              return Array.isArray(t)
                ? t.map(e)
                : null == t || "object" != typeof t
                  ? t
                  : Object.fromEntries(
                      Object.entries(t)
                        .sort(([e], [t]) => (e < t ? -1 : +(e > t)))
                        .map(([t, n]) => [t, e(n)]),
                    );
            })(
              (function ({ proofVersion: e, issuer: t, payload: n, algorithm: a, keyId: i, issuedAt: o }) {
                return { proofVersion: e, issuer: t, payload: n, algorithm: a, keyId: i, issuedAt: o };
              })(e),
            ),
          )}`,
        );
      },
    ]);
  },
  496663,
  (e) => {
    "use strict";
    let t = "Send",
      n = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      a = (e) => String(e).padStart(2, "0");
    function i(e) {
      let t = new Date(e);
      return `${t.getUTCDate()} ${n[t.getUTCMonth()]} ${t.getUTCFullYear()}`;
    }
    function o(e) {
      let t = new Date(e);
      return `${a(t.getUTCHours())}:${a(t.getUTCMinutes())}:${a(t.getUTCSeconds())} UTC`;
    }
    function r(e) {
      return `${i(e)}, ${o(e)}`;
    }
    function s(e) {
      let [t, n = ""] = e.split("."),
        a = t.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return `${a}.${n.padEnd(2, "0")}`;
    }
    function l(e, t = 6) {
      return e.length <= 2 * t + 1 ? e : `${e.slice(0, t)}…${e.slice(-t)}`;
    }
    e.s([
      "formatProofDate",
      0,
      i,
      "formatProofDateTime",
      0,
      r,
      "formatProofTime",
      0,
      o,
      "proofSignatureFields",
      0,
      function (e) {
        return [
          { label: "Issued by", value: "near.com" },
          { label: "Issued", value: r(e.issuedAt) },
          { label: "Signature", value: "Ed25519 (SHA-256)" },
          { label: "Signing key", value: e.keyId, mono: !0 },
        ];
      },
      "proofView",
      0,
      function (e) {
        if ("send" === e.type)
          return (function (e) {
            let { amount: n, network: a, internal: i } = e,
              o = `${s(n.amount)} ${n.token}`;
            return {
              typeLabel: t,
              statusLabel: "Completed",
              amountLabel: "Amount sent",
              amount: s(n.amount),
              token: n.token,
              summary: `Sent to ${l(e.recipient)} on ${a.name}`,
              completedAt: e.timestamp,
              from: i
                ? {
                    title: "From",
                    fields: [
                      { label: "Paid from", value: i.paidFrom.name },
                      { label: "Paid with", value: `${s(i.paidWith.amount)} ${i.paidWith.token}` },
                    ],
                  }
                : null,
              to: {
                title: "To",
                fields: [
                  { label: "Recipient", value: e.recipient, mono: !0 },
                  ...(e.destinationMemo ? [{ label: "Memo", value: e.destinationMemo, mono: !0 }] : []),
                  { label: "Network", value: a.name },
                  { label: "Amount received", value: o },
                ],
              },
              details: [
                { label: "Transaction type", value: t },
                { label: "Transaction ID", value: e.transactionId, mono: !0 },
                ...(e.destinationTxHash ? [{ label: `${a.name} transaction`, value: e.destinationTxHash, mono: !0, href: e.destinationTxUrl ?? void 0 }] : []),
                ...(i ? [{ label: "NEAR Intents record", value: i.transactionReference, mono: !0, href: i.transactionReferenceUrl ?? void 0 }] : []),
              ],
              internalDetailsIncluded: null != i,
            };
          })(e);
      },
      "truncateMiddle",
      0,
      l,
    ]);
  },
  641007,
  678373,
  (e) => {
    "use strict";
    var t = e.i(117956),
      n = e.i(606030),
      a = e.i(496663);
    let i = {
        regular: [
          278, 278, 355, 556, 556, 889, 667, 191, 333, 333, 389, 584, 278, 333, 278, 278, 556, 556, 556, 556, 556, 556, 556, 556, 556, 556, 278, 278, 584, 584,
          584, 556, 1015, 667, 667, 722, 722, 667, 611, 778, 722, 278, 500, 667, 556, 833, 722, 778, 667, 778, 722, 667, 611, 722, 667, 944, 667, 667, 611, 278,
          278, 278, 469, 556, 333, 556, 556, 500, 556, 556, 278, 556, 556, 222, 222, 500, 222, 833, 556, 556, 556, 556, 333, 500, 278, 556, 500, 722, 500, 500,
          500, 334, 260, 334, 584,
        ],
        bold: [
          278, 333, 474, 556, 556, 889, 722, 238, 333, 333, 389, 584, 278, 333, 278, 278, 556, 556, 556, 556, 556, 556, 556, 556, 556, 556, 333, 333, 584, 584,
          584, 611, 975, 722, 722, 722, 722, 667, 611, 778, 722, 278, 556, 722, 611, 833, 722, 778, 667, 778, 722, 667, 611, 722, 667, 944, 667, 667, 611, 333,
          278, 333, 584, 556, 333, 556, 611, 556, 611, 556, 333, 611, 611, 278, 278, 556, 278, 889, 611, 611, 611, 611, 389, 556, 333, 611, 556, 778, 556, 556,
          500, 389, 280, 389, 584,
        ],
      },
      o = {
        "•": { code: 149, widths: [350, 350] },
        "–": { code: 150, widths: [556, 556] },
        "—": { code: 151, widths: [1e3, 1e3] },
        "·": { code: 183, widths: [278, 278] },
        "’": { code: 146, widths: [222, 278] },
        "…": { code: 133, widths: [1e3, 1e3] },
      };
    var r = e.i(879908);
    let s = r.z
        .string()
        .url()
        .refine((e) => "https:" === new URL(e).protocol),
      l = r.z
        .string()
        .url()
        .refine((e) => new URL(e).origin === e),
      u = r.z.object({ id: r.z.string().min(1), name: r.z.string().min(1) }).strict(),
      c = r.z.object({ token: r.z.string().min(1), tokenId: r.z.string().min(1), amount: r.z.string().regex(/^\d+(?:\.\d+)?$/) }).strict(),
      d = r.z.object({ paidFrom: u, paidWith: c, transactionReference: r.z.string().min(1), transactionReferenceUrl: s.nullable() }).strict(),
      p = r.z
        .object({
          type: r.z.literal("send"),
          transactionId: r.z.string().min(1),
          status: r.z.literal("completed"),
          timestamp: r.z.string().datetime({ offset: !0 }),
          recipient: r.z.string().min(1),
          destinationMemo: r.z.string().min(1).nullable(),
          network: u,
          amount: c,
          destinationTxHash: r.z.string().nullable(),
          destinationTxUrl: s.nullable(),
          internal: d.nullable(),
        })
        .strict(),
      m = r.z.discriminatedUnion("type", [p]),
      f = r.z
        .object({
          proofVersion: r.z.literal("1"),
          issuer: l,
          payload: m,
          algorithm: r.z.literal("Ed25519-SHA256"),
          keyId: r.z.string().min(1),
          issuedAt: r.z.string().datetime({ offset: !0 }),
        })
        .strict()
        .extend({ signature: r.z.string().min(1) })
        .strict();
    e.s(["proofOfTransactionSchema", 0, f], 678373);
    let h = "%NEAR_PROOF_PDF_V1:";
    function k(e) {
      let t = (t) => Math.round((Number.parseInt(e.slice(t, t + 2), 16) / 255) * 1e3) / 1e3;
      return [t(0), t(2), t(4)];
    }
    let y = k("0f1419"),
      g = k("5b6470"),
      A = k("8a929c"),
      T = k("e4e7eb"),
      E = k("f5f6f8"),
      R = k("00ec97"),
      I = k("047857"),
      w = k("e6f9f1"),
      b = [1, 1, 1],
      C = { regular: "F1", bold: "F2", mono: "F3" },
      v = new TextEncoder();
    function x(e) {
      return v.encode(e);
    }
    function N(e) {
      let t = new Uint8Array(e.reduce((e, t) => e + t.length, 0)),
        n = 0;
      for (let a of e) t.set(a, n), (n += a.length);
      return t;
    }
    function S(e) {
      let t = Math.round(100 * e) / 100;
      return Object.is(t, -0) ? "0" : String(t);
    }
    function O([e, t, n], a) {
      return `${e} ${t} ${n} ${a}`;
    }
    function _(e) {
      let t = "";
      for (let n of e) {
        let e = o[n];
        if (e) {
          t += `\\${e.code.toString(8)}`;
          continue;
        }
        let a = n.normalize("NFKD").replace(/[^\x20-\x7E]/g, "");
        t += (a.length > 0 ? a : "?").replaceAll("\\", "\\\\").replaceAll("(", "\\(").replaceAll(")", "\\)");
      }
      return t;
    }
    function D(e) {
      let t = "";
      for (let n of e) {
        if (o[n]) {
          t += n;
          continue;
        }
        let e = n.normalize("NFKD").replace(/[^\x20-\x7E]/g, "");
        t += e.length > 0 ? e : "?";
      }
      return t;
    }
    function F(e, t) {
      let n = [...D(e)].length;
      return (
        (function (e, t, n) {
          let a = 0;
          for (let n of e)
            a += (function (e, t) {
              if ("mono" === t) return 600;
              let n = o[e];
              if (n) return n.widths[+("regular" !== t)];
              let a = e.charCodeAt(0);
              return a >= 32 && a <= 126 ? i[t][a - 32] : i[t][31];
            })(n, t);
          return (a * n) / 1e3;
        })(D(e), t.font, t.size) +
        (t.tracking ?? 0) * n
      );
    }
    function B(e, t, n) {
      let a = D(e);
      if ("mono" === t.font) {
        let e = Math.max(1, Math.floor(n / ((600 * t.size) / 1e3))),
          i = Math.max(1, Math.ceil(a.length / e)),
          o = Math.ceil(a.length / i),
          r = [];
        for (let e = 0; e < a.length; e += o) r.push(a.slice(e, e + o));
        return r.length ? r : [""];
      }
      let i = P(a, t, n),
        o = i;
      for (let e = n - 4; e > 0.6 * n; e -= 4) {
        let n = P(a, t, e);
        if (n.length !== i.length) break;
        o = n;
      }
      return o;
    }
    function P(e, t, n) {
      let a = [],
        i = "";
      for (let o of e.split(" ")) {
        let e = i ? `${i} ${o}` : o;
        i && F(e, t) > n ? (a.push(i), (i = o)) : (i = e);
      }
      return a.push(i), a;
    }
    class W {
      ops = [];
      links = [];
      y(e) {
        return 842 - e;
      }
      text(e, t, n, a) {
        return (
          this.ops.push(`BT /${C[a.font]} ${S(a.size)} Tf ${S(a.tracking ?? 0)} Tc ${O(a.color, "rg")} ${S(e)} ${S(this.y(t))} Td (${_(n)}) Tj ET`), F(n, a)
        );
      }
      lines(e, t, n, a, i) {
        for (let [o, r] of n.entries()) this.text(e, t + o * a, r, i);
      }
      textRight(e, t, n, a) {
        this.text(e - F(n, a), t, n, a);
      }
      rect(e, t, n, a, i) {
        this.ops.push(`${O(i, "rg")} ${S(e)} ${S(this.y(t + a))} ${S(n)} ${S(a)} re f`);
      }
      roundedRect(e, t, n, a, i, o) {
        let r = 0.5523 * i,
          s = e + n,
          l = this.y(t + a),
          u = this.y(t),
          c = `${S(e + i)} ${S(l)} m ${S(s - i)} ${S(l)} l ${S(s - i + r)} ${S(l)} ${S(s)} ${S(l + i - r)} ${S(s)} ${S(l + i)} c ${S(s)} ${S(u - i)} l ${S(s)} ${S(u - i + r)} ${S(s - i + r)} ${S(u)} ${S(s - i)} ${S(u)} c ${S(e + i)} ${S(u)} l ${S(e + i - r)} ${S(u)} ${S(e)} ${S(u - i + r)} ${S(e)} ${S(u - i)} c ${S(e)} ${S(l + i)} l ${S(e)} ${S(l + i - r)} ${S(e + i - r)} ${S(l)} ${S(e + i)} ${S(l)} c h`,
          d = [o.fill ? O(o.fill, "rg") : "", o.stroke ? `${O(o.stroke, "RG")} ${S(o.lineWidth ?? 0.75)} w` : ""].filter(Boolean),
          p = o.fill && o.stroke ? "B" : o.fill ? "f" : "S";
        this.ops.push(`${d.join(" ")} ${c} ${p}`);
      }
      circle(e, t, n, a) {
        this.roundedRect(e - n, t - n, 2 * n, 2 * n, n, a);
      }
      hairline(e, t, n, a = T) {
        this.ops.push(`${O(a, "RG")} 0.75 w ${S(e)} ${S(this.y(t))} m ${S(n)} ${S(this.y(t))} l S`);
      }
      stroke(e, t, n) {
        let [a, ...i] = e;
        this.ops.push(`q 1 J 1 j ${O(t, "RG")} ${S(n)} w ${S(a[0])} ${S(this.y(a[1]))} m ${i.map(([e, t]) => `${S(e)} ${S(this.y(t))} l`).join(" ")} S Q`);
      }
      svgPath(e, t, n, a, i) {
        let o = String(Math.round(1e5 * a) / 1e5);
        this.ops.push(`q ${o} 0 0 -${o} ${S(t)} ${S(this.y(n))} cm ${O(i, "rg")} ${e} f Q`);
      }
      link(e, t, n, a, i) {
        this.links.push({ rect: [e, this.y(t + a), e + n, this.y(t)], uri: i });
      }
    }
    let M = { font: "regular", size: 8, color: g },
      U = { font: "bold", size: 7, color: A, tracking: 0.9 },
      Q = { font: "regular", size: 10, color: y },
      q = { font: "mono", size: 8.6, color: y };
    function j(e, t, n, a, i, o = !1) {
      let r = { font: "bold", size: 7, color: i.text, tracking: 0.7 },
        s = 9 * !!o,
        l = 16 + s + F(a, r);
      return (
        e.roundedRect(t, n, l, 17, 8.5, { fill: i.fill }), o && e.circle(t + 8 + 2.5, n + 8.5, 2.5, { fill: i.text }), e.text(t + 8 + s, n + 11.3, a, r), l
      );
    }
    function L(e, t) {
      let n = e.mono ? q : Q;
      return { field: e, lines: B(e.value, n, t), style: n };
    }
    function H(e) {
      return e.reduce((t, { lines: n }, a) => t + 14.5 + (n.length - 1) * 12.5 + 19 * (a < e.length - 1), 0);
    }
    function $(e, t, n, a) {
      let i = n;
      for (let { field: n, lines: o, style: r } of a) e.text(t, i, n.label, M), (i += 14.5), e.lines(t, i, o, 12.5, r), (i += (o.length - 1) * 12.5 + 19);
    }
    let z = 242.5,
      K = 253;
    function V({ proof: e }) {
      let t,
        i = `${e.issuer}/verify-proof`;
      if (i.length > 120) throw Error("The verification link is too long for the PDF");
      let o = (function (e, t) {
          var n, i;
          let o,
            r,
            s,
            l,
            u,
            c,
            d,
            p,
            m,
            f,
            h,
            k = (0, a.proofView)(e.payload),
            C = new W();
          C.roundedRect(48, 44, 26, 26, (110 / 512) * 26, { fill: R }),
            C.svgPath(
              "373.89 106.2 m 362.79 106.2 352.49 111.96 346.68 121.41 c 284.05 214.39 l 283.07 215.86 282.71 217.65 283.06 219.39 c 283.4 221.12 284.42 222.64 285.89 223.62 c 288.38 225.27 291.66 225.07 293.93 223.13 c 355.57 169.66 l 356.59 168.73 358.17 168.83 359.09 169.85 c 359.51 170.32 359.74 170.92 359.74 171.55 c 359.74 338.95 l 359.74 339.61 359.47 340.25 359 340.71 c 358.53 341.18 357.9 341.44 357.23 341.44 c 356.5 341.44 355.79 341.12 355.32 340.55 c 168.98 117.5 l 162.91 110.33 154 106.2 144.62 106.2 c 138.11 106.2 l 120.49 106.2 106.2 120.49 106.2 138.12 c 106.2 373.88 l 106.2 391.51 120.49 405.8 138.11 405.8 c 149.21 405.8 159.51 400.05 165.33 390.59 c 227.96 297.61 l 230 294.55 229.17 290.42 226.11 288.38 c 223.62 286.73 220.34 286.93 218.08 288.87 c 156.43 342.34 l 155.41 343.27 153.83 343.17 152.91 342.15 c 152.49 341.68 152.27 341.08 152.28 340.45 c 152.28 173.01 l 152.28 172.35 152.54 171.71 153.01 171.24 c 153.48 170.77 154.12 170.51 154.78 170.52 c 155.51 170.52 156.22 170.84 156.69 171.41 c 343 394.5 l 349.07 401.66 357.98 405.79 367.36 405.8 c 373.87 405.8 l 391.49 405.8 405.8 391.53 405.81 373.91 c 405.81 138.12 l 405.81 120.49 391.51 106.2 373.89 106.2 c h",
              48,
              44,
              26 / 512,
              y,
            ),
            C.svgPath(
              "136.42 0.98 m 109.81 0.98 90.46 7.27 74.02 21.78 c 44.99 46.93 l 42.57 48.87 37.73 50.32 34.35 47.41 c 30.96 44.51 30.48 40.64 33.38 36.77 c 48.86 13.55 l 51.28 10.16 49.35 5.81 44.99 5.81 c 7.74 5.81 l 3.39 5.81 0 9.2 0 13.55 c 0 239.95 l 0 244.3 3.39 247.69 7.74 247.69 c 46.44 247.69 l 50.79 247.69 54.18 244.3 54.18 239.95 c 54.18 112.24 l 54.18 53.71 103.04 44.52 121.42 44.52 c 160.6 44.52 174.63 72.58 174.63 93.86 c 174.63 239.95 l 174.63 244.3 178.02 247.69 182.37 247.69 c 221.07 247.69 l 225.42 247.69 228.81 244.3 228.81 239.95 c 228.81 89.02 l 228.81 34.84 193.49 0.98 136.41 0.98 c 136.42 0.98 l h 386.5 0.01 m 311.52 0.01 263.63 45.97 263.63 108.37 c 263.63 142.72 l 263.63 208.51 311.52 253.5 386.5 253.5 c 452.77 253.5 499.21 219.15 504.05 172.71 c 504.54 167.87 501.15 164.49 496.31 164.49 c 458.58 164.49 l 455.19 164.49 452.29 166.43 451.32 169.81 c 446.48 185.29 423.75 208.51 386.5 208.51 c 349.25 208.51 314.42 181.42 314.9 142.72 c 315.39 99.67 l 315.87 67.26 349.74 45.01 386.5 45.01 c 419.88 45.01 452.29 63.88 455.67 94.84 c 455.95 98.43 453.49 101.65 449.96 102.33 c 341.5 123.38 l 337.15 124.35 333.76 128.22 333.76 133.05 c 333.76 133.53 l 333.76 137.88 338.11 141.75 344.4 141.75 c 500.17 141.75 l 502.23 141.75 504.19 140.94 505.65 139.49 c 507.1 138.03 507.91 136.06 507.91 134.01 c 507.91 103.54 l 507.91 45.98 458.08 0.02 386.49 0.02 c 386.5 0.01 l h 656.42 0.01 m 595.95 0.01 543.71 35.32 543.71 81.76 c 543.71 85.63 547.1 88.53 551.45 88.53 c 590.63 88.53 l 594.5 88.53 597.4 85.63 597.89 81.76 c 601.76 60.48 627.4 45 654.97 45 c 687.86 45 710.12 65.32 710.12 100.15 c 710.12 142.24 l 710.12 185.29 678.19 207.06 638.52 207.06 c 607.56 207.06 589.66 195.45 589.66 176.58 c 589.66 160.13 598.37 146.1 634.16 137.88 c 685.92 123.85 l 691.24 122.4 693.18 118.04 692.21 113.21 c 691.73 109.34 687.38 107.4 683.5 107.4 c 629.81 107.4 l 584.34 107.4 538.38 136.42 538.38 178.99 c 538.38 185.76 l 538.38 229.3 579.5 252.03 626.42 252.03 c 656.41 252.03 682.05 240.42 698.01 226.88 c 721.72 206.56 l 725.59 203.17 729.46 203.17 732.84 206.56 c 735.74 209.46 734.77 213.82 732.35 217.2 c 717.84 239.94 l 715.42 243.33 717.35 247.68 721.71 247.68 c 756.54 247.68 l 760.89 247.68 764.28 244.29 764.28 239.94 c 764.28 93.36 l 764.28 37.25 724.13 0 656.4 0 c 656.42 0.01 l h 973.26 5.82 m 919.08 5.82 l 900.22 5.82 881.83 17.43 868.77 28.56 c 847.49 46.94 l 845.07 48.88 840.71 50.33 837.81 47.91 c 834.42 45.49 832.97 40.65 835.88 36.78 c 851.36 13.56 l 853.78 10.17 851.85 5.82 847.49 5.82 c 811.21 5.82 l 806.86 5.82 803.47 9.21 803.47 13.56 c 803.47 239.96 l 803.47 244.31 806.86 247.7 811.21 247.7 c 850.88 247.7 l 855.23 247.7 858.62 244.31 858.62 239.96 c 858.62 123.86 l 858.62 74.03 878.94 51.78 922.96 51.78 c 973.27 51.78 l 977.62 51.78 981.01 48.39 981.01 44.04 c 981.01 13.56 l 981.01 9.21 977.62 5.82 973.27 5.82 c 973.26 5.82 l h",
              83,
              51.25,
              11.5 / 254,
              y,
            ),
            C.textRight(547, 55, "Proof of Transaction", { font: "bold", size: 11, color: y }),
            C.textRight(547, 68, e.payload.transactionId, { font: "regular", size: 8, color: g }),
            C.hairline(48, 92, 547);
          let v = j(C, 48, 114, k.typeLabel.toUpperCase(), { fill: E, text: y });
          j(C, 48 + v + 6, 114, k.statusLabel.toUpperCase(), { fill: w, text: I }, !0), C.text(48, 158, k.amountLabel, { font: "regular", size: 9, color: g });
          let x = C.text(48, 194, k.amount, { font: "bold", size: 34, color: y });
          C.text(48 + x + 8, 194, k.token, { font: "bold", size: 34, color: A }),
            C.text(48, 216, k.summary, { font: "regular", size: 10.5, color: g }),
            C.textRight(547, 158, "Completed", { font: "regular", size: 9, color: g }),
            C.textRight(547, 177, (0, a.formatProofDate)(k.completedAt), { font: "bold", size: 12, color: y }),
            C.textRight(547, 192, (0, a.formatProofTime)(k.completedAt), { font: "regular", size: 9, color: g });
          let N =
              244 +
              (function (e, t, n) {
                if (!t) {
                  let t, a, i, o, r, s;
                  return (
                    (a = 0.48 * (t = 463)),
                    (i = (t - a - 24 * (n.fields.length - 1)) / Math.max(1, n.fields.length - 1)),
                    (r = 44 + Math.max(...(o = n.fields.map((e, t) => L(e, 0 === t ? a : i))).map((e) => H([e]))) + 18),
                    e.roundedRect(48, 244, 499, r, 10, { fill: E }),
                    e.text(66, 268, n.title.toUpperCase(), U),
                    (s = 66),
                    o.forEach((t, n) => {
                      $(e, s, 288, [t]), (s += (0 === n ? a : i) + 24);
                    }),
                    r
                  );
                }
                let a = z - 36,
                  i = [t, n].map((e) => ({ party: e, fields: e.fields.map((e) => L(e, a)) })),
                  o = 44 + Math.max(...i.map(({ fields: e }) => H(e))) + 18;
                i.forEach(({ party: t, fields: n }, a) => {
                  let i = 48 + a * (z + 14);
                  e.roundedRect(i, 244, z, o, 10, { fill: E }), e.text(i + 18, 268, t.title.toUpperCase(), U), $(e, i + 18, 288, n);
                });
                let r = 48 + z + 7,
                  s = 244 + o / 2;
                return (
                  e.circle(r, s, 12, { fill: b, stroke: T }),
                  e.stroke(
                    [
                      [r - 4.5, s],
                      [r + 4.5, s],
                    ],
                    y,
                    1.3,
                  ),
                  e.stroke(
                    [
                      [r + 1, s - 3.5],
                      [r + 4.5, s],
                      [r + 1, s + 3.5],
                    ],
                    y,
                    1.3,
                  ),
                  o
                );
              })(C, k.from, k.to) +
              40,
            S = (function (e, t, n) {
              e.text(48, t, "Transaction details", { font: "bold", size: 11, color: y });
              let a = t + 14;
              for (let t of (e.hairline(48, a, 547), n)) {
                let n = t.href ? { ...(t.mono ? q : Q), size: t.mono ? 8.6 : 9.5, color: I } : { ...(t.mono ? q : Q), size: t.mono ? 8.6 : 9.5 },
                  i = B(t.value, n, K),
                  o = a + 11 + 8;
                e.text(48, o, t.label, { font: "regular", size: 9, color: g }), e.lines(198, o, i, 12.5, n);
                let r = 30 + (i.length - 1) * 12.5;
                if (t.href) {
                  let n = { font: "bold", size: 8, color: I };
                  e.textRight(547, o, "View in explorer", n), e.link(198, a + 4, 349, r - 8, t.href);
                }
                (a += r), e.hairline(48, a, 547);
              }
              return a - t;
            })(C, N, k.details);
          if (
            N + S >
            ((n = C),
            (i = t),
            (c =
              752 -
              (u =
                (l =
                  44 +
                  ((s = B(
                    "This document is digitally signed by near.com. To confirm that it is authentic and has not been altered, upload the original PDF at the address below. Verification runs in your browser, so the file never leaves your device.",
                    (r = { font: "regular", size: 8.5, color: g }),
                    417,
                  )).length -
                    1) *
                    11.5 +
                  18) +
                20 -
                2)),
            n.roundedRect(48, c, 499, u, 10, { fill: w }),
            (d = c + 20 + 14),
            n.circle(82, d, 14, { fill: R }),
            n.stroke(
              [
                [76.8, d + 0.4],
                [80.4, d + 4],
                [87.4, d - 3.6],
              ],
              y,
              1.8,
            ),
            n.text(110, c + 28, "Verify this document", { font: "bold", size: 10.5, color: y }),
            n.lines(110, c + 44, s, 11.5, r),
            (p = c + l),
            (m = ((o = new URL(i)), `${o.host}${o.pathname}`)),
            (f = n.text(110, p, m, { font: "bold", size: 9.5, color: I })),
            n.hairline(110, p + 2.5, 110 + f, I),
            n.link(108, p - 11, f + 4, 16, i),
            c - 16)
          )
            throw Error("The transaction details are too long for the PDF");
          return (
            (h = { font: "regular", size: 7.5, color: A }),
            C.hairline(48, 776, 547),
            C.text(48, 792, `Issued ${(0, a.formatProofDateTime)(e.issuedAt)}  \xb7  Ed25519 signature  \xb7  Key ${e.keyId}`, h),
            C.text(
              48,
              803.5,
              "near.com issued this document at the sender’s request. It reflects the transaction as recorded when the document was issued.",
              h,
            ),
            C
          );
        })(e, i),
        r = x(o.ops.join("\n")),
        s = (e) => x(`<< /Type /Font /Subtype /Type1 /BaseFont /${e} /Encoding /WinAnsiEncoding >>`),
        l = o.links.map((e, t) => `${9 + t} 0 R`).join(" "),
        u = `Proof of Transaction ${e.payload.transactionId}`,
        c = ((t = new Date(e.issuedAt).toISOString()), `D:${t.slice(0, 19).replace(/[-:T]/g, "")}Z`),
        d = [
          x("<< /Type /Catalog /Pages 2 0 R /ViewerPreferences << /DisplayDocTitle true >> >>"),
          x("<< /Type /Pages /Kids [3 0 R] /Count 1 >>"),
          x(
            `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 4 0 R /F2 5 0 R /F3 6 0 R >> >> /Contents 7 0 R /Annots [${l}] >>`,
          ),
          s("Helvetica"),
          s("Helvetica-Bold"),
          s("Courier"),
          N([
            x(`<< /Length ${r.length} >>
stream
`),
            r,
            x("\nendstream"),
          ]),
          x(`<< /Title (${_(u)}) /Author (near.com) /Creator (near.com) /Producer (near.com) /CreationDate (${c}) /ModDate (${c}) >>`),
          ...o.links.map(({ rect: e, uri: t }) =>
            x(`<< /Type /Annot /Subtype /Link /Rect [${e.map(S).join(" ")}] /Border [0 0 0] /A << /S /URI /URI (${_(t)}) >> >>`),
          ),
        ],
        p = x(`%PDF-1.7
%\xe2\xE3\xcf\xD3
${h}${(0, n.encodeProof)(e)}
`),
        m = [p],
        f = [0],
        k = p.length;
      d.forEach((e, t) => {
        f.push(k);
        let n = N([
          x(`${t + 1} 0 obj
`),
          e,
          x("\nendobj\n"),
        ]);
        m.push(n), (k += n.length);
      });
      let C = k,
        v = [
          `xref
0 ${d.length + 1}`,
          "0000000000 65535 f ",
          ...f.slice(1).map((e) => `${String(e).padStart(10, "0")} 00000 n `),
        ].join("\n");
      return (
        m.push(
          x(`${v}
trailer
<< /Size ${d.length + 1} /Root 1 0 R /Info 8 0 R >>
startxref
${C}
%%EOF
`),
        ),
        N(m)
      );
    }
    e.s(
      [
        "buildProofOfTransactionPdf",
        0,
        V,
        "extractProofFromPdf",
        0,
        function (e, a) {
          let i = (function (e, t) {
            let n = e.indexOf(t);
            if (-1 === n) return null;
            let a = e.indexOf("\n", n + t.length);
            return -1 === a ? null : e.slice(n + t.length, a).trim();
          })(new TextDecoder("latin1").decode(e), h);
          if (!i) throw Error("No signed proof was found in this PDF");
          let o = f.parse((0, n.decodeProof)(i));
          if (a && o.issuer !== a) throw Error("The PDF issuer does not match this site");
          let r = (0, t.sha256)(V({ proof: o }));
          if (!(0, t.sha256)(e).every((e, t) => e === r[t])) throw Error("The PDF contents do not match the signed proof");
          return o;
        },
      ],
      641007,
    );
  },
  631318,
  (e) => {
    "use strict";
    var t = e.i(789477),
      n = e.i(528973),
      a = e.i(816046),
      i = e.i(384681),
      o = e.i(830570),
      r = e.i(696150),
      s = e.i(641007),
      l = e.i(678373);
    async function u(e, t, n) {
      let a,
        i = await fetch("/api/proof-of-transaction/issue", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ type: e, depositAddress: t, includeInternalDetails: n }),
        }),
        o = await i.text();
      try {
        a = JSON.parse(o);
      } catch {
        a = null;
      }
      if (!i.ok) throw Error(null != a && "object" == typeof a && "error" in a ? String(a.error) : `Unable to issue proof (HTTP ${i.status})`);
      let r = l.proofOfTransactionSchema.safeParse(null != a && "object" == typeof a && "proof" in a ? a.proof : void 0);
      if (!r.success || r.data.payload.type !== e) throw Error("Invalid response from proof service");
      return r.data;
    }
    let c = "Download proof of transaction";
    function d(e, t) {
      let {
          download: n,
          isLoading: a,
          error: i,
          reset: o,
        } = (function (e, t) {
          let [n, a] = (0, r.useState)(!1),
            [i, o] = (0, r.useState)(null),
            l = (0, r.useRef)(0);
          async function c(n) {
            let i = ++l.current;
            o(null), a(!0);
            try {
              var r;
              let a,
                o,
                c,
                d,
                p = await u(e, t, n);
              if (i !== l.current) return !1;
              return (
                (a = new Blob([(0, s.buildProofOfTransactionPdf)({ proof: p })], { type: "application/pdf" })),
                (o = URL.createObjectURL(a)),
                ((c = document.createElement("a")).href = o),
                (d = new Date((r = p.payload).timestamp).toISOString().slice(0, 10)),
                (c.download = `${d}-nearcom-proof-of-transaction-${r.transactionId}.pdf`),
                c.click(),
                setTimeout(() => URL.revokeObjectURL(o), 0),
                !0
              );
            } catch (e) {
              return i === l.current && o(e instanceof Error ? e.message : "Unable to issue proof"), !1;
            } finally {
              i === l.current && a(!1);
            }
          }
          return (
            (0, r.useEffect)(
              () => () => {
                l.current++;
              },
              [],
            ),
            {
              download: c,
              isLoading: n,
              error: i,
              reset: () => {
                l.current++, a(!1), o(null);
              },
            }
          );
        })(e, t),
        [l, c] = (0, r.useState)(!1);
      return {
        includeInternalDetails: l,
        setIncludeInternalDetails: c,
        isLoading: a,
        error: i,
        download: () => n(l),
        reset: () => {
          c(!1), o();
        },
      };
    }
    function p({ form: e }) {
      let n = (0, r.useId)(),
        a = (0, r.useId)(),
        i = (0, r.useId)();
      return (0, t.jsxs)("div", {
        className: "space-y-5",
        children: [
          (0, t.jsx)("p", {
            className: "text-pretty font-medium text-gray-500 text-sm dark:text-gray-400",
            children:
              "A signed PDF that anyone can check at near.com/verify-proof. It shows what the recipient received: the amount, the recipient, the network, and when it arrived.",
          }),
          (0, t.jsxs)("div", {
            className: "space-y-2 border-gray-200 border-t pt-5 dark:border-white/10",
            children: [
              (0, t.jsxs)("label", {
                htmlFor: n,
                className: "flex cursor-pointer items-center justify-between gap-4",
                children: [
                  (0, t.jsx)("span", { id: a, className: "font-medium text-base text-gray-900 dark:text-white", children: "Include internal details" }),
                  (0, t.jsx)(o.default, {
                    id: n,
                    checked: e.includeInternalDetails,
                    onCheckedChange: e.setIncludeInternalDetails,
                    disabled: e.isLoading,
                    "aria-labelledby": a,
                    "aria-describedby": i,
                    className: "shrink-0",
                  }),
                ],
              }),
              (0, t.jsx)("p", {
                id: i,
                className: "text-pretty font-medium text-gray-500 text-sm dark:text-gray-400",
                children:
                  "Adds how you paid: the near.com balance and asset you used, and the NEAR Intents record. Your counterparty doesn’t need these to verify the payment.",
              }),
            ],
          }),
        ],
      });
    }
    function m({ form: e, onDownloaded: a }) {
      return (0, t.jsxs)("div", {
        className: "space-y-3",
        children: [
          (0, t.jsx)(n.default, {
            fullWidth: !0,
            size: "xl",
            loading: e.isLoading,
            "aria-busy": e.isLoading,
            onClick: async () => {
              (await e.download()) && a();
            },
            children: "Download PDF",
          }),
          e.error && (0, t.jsx)(i.default, { className: "text-center", role: "alert", children: e.error }),
        ],
      });
    }
    e.s(
      [
        "DOWNLOAD_PROOF_TITLE",
        0,
        c,
        "DownloadProofButton",
        0,
        function ({ type: e, depositAddress: i }) {
          let [o, s] = (0, r.useState)(!1),
            l = d(e, i);
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(n.default, {
                size: "xl",
                variant: "secondary",
                fullWidth: !0,
                onClick: () => {
                  l.reset(), s(!0);
                },
                children: "Download proof of transaction",
              }),
              (0, t.jsx)(a.Dialog, {
                open: o,
                title: c,
                onClose: () => s(!1),
                footer: (0, t.jsx)(m, { form: l, onDownloaded: () => s(!1) }),
                children: (0, t.jsx)(p, { form: l }),
              }),
            ],
          });
        },
        "DownloadProofFooter",
        0,
        m,
        "DownloadProofOptions",
        0,
        p,
        "useDownloadProofForm",
        0,
        d,
      ],
      631318,
    );
  },
  505599,
  (e) => {
    "use strict";
    var t = e.i(6754);
    let n = {
        near: t.BlockchainEnum.NEAR,
        eth: t.BlockchainEnum.ETHEREUM,
        base: t.BlockchainEnum.BASE,
        arbitrum: t.BlockchainEnum.ARBITRUM,
        bitcoin: t.BlockchainEnum.BITCOIN,
        bitcoincash: t.BlockchainEnum.BITCOINCASH,
        solana: t.BlockchainEnum.SOLANA,
        dogecoin: t.BlockchainEnum.DOGECOIN,
        turbochain: t.BlockchainEnum.TURBOCHAIN,
        aurora: t.BlockchainEnum.AURORA,
        aurora_devnet: t.BlockchainEnum.AURORA_DEVNET,
        xrpledger: t.BlockchainEnum.XRPLEDGER,
        zcash: t.BlockchainEnum.ZCASH,
        gnosis: t.BlockchainEnum.GNOSIS,
        berachain: t.BlockchainEnum.BERACHAIN,
        tron: t.BlockchainEnum.TRON,
        tuxappchain: t.BlockchainEnum.TUXAPPCHAIN,
        vertex: t.BlockchainEnum.VERTEX,
        optima: t.BlockchainEnum.OPTIMA,
        easychain: t.BlockchainEnum.EASYCHAIN,
        hako: t.BlockchainEnum.HAKO,
        polygon: t.BlockchainEnum.POLYGON,
        bsc: t.BlockchainEnum.BSC,
        hyperliquid: t.BlockchainEnum.HYPERLIQUID,
        ton: t.BlockchainEnum.TON,
        optimism: t.BlockchainEnum.OPTIMISM,
        avalanche: t.BlockchainEnum.AVALANCHE,
        sui: t.BlockchainEnum.SUI,
        stellar: t.BlockchainEnum.STELLAR,
        aptos: t.BlockchainEnum.APTOS,
        cardano: t.BlockchainEnum.CARDANO,
        litecoin: t.BlockchainEnum.LITECOIN,
        layerx: t.BlockchainEnum.LAYERX,
        monad: t.BlockchainEnum.MONAD,
        adi: t.BlockchainEnum.ADI,
        starknet: t.BlockchainEnum.STARKNET,
        plasma: t.BlockchainEnum.PLASMA,
        aleo: t.BlockchainEnum.ALEO,
        scroll: t.BlockchainEnum.SCROLL,
        dash: t.BlockchainEnum.DASH,
        movement: t.BlockchainEnum.MOVEMENT,
        fogo: t.BlockchainEnum.FOGO,
        hood: t.BlockchainEnum.HOOD,
        qtc: t.BlockchainEnum.QTC,
      },
      a = {
        [t.BlockchainEnum.NEAR]: "near",
        [t.BlockchainEnum.ETHEREUM]: "eth",
        [t.BlockchainEnum.BASE]: "base",
        [t.BlockchainEnum.ARBITRUM]: "arbitrum",
        [t.BlockchainEnum.BITCOIN]: "bitcoin",
        [t.BlockchainEnum.BITCOINCASH]: "bitcoincash",
        [t.BlockchainEnum.SOLANA]: "solana",
        [t.BlockchainEnum.DOGECOIN]: "dogecoin",
        [t.BlockchainEnum.TURBOCHAIN]: "turbochain",
        [t.BlockchainEnum.AURORA]: "aurora",
        [t.BlockchainEnum.AURORA_DEVNET]: "aurora_devnet",
        [t.BlockchainEnum.XRPLEDGER]: "xrpledger",
        [t.BlockchainEnum.ZCASH]: "zcash",
        [t.BlockchainEnum.GNOSIS]: "gnosis",
        [t.BlockchainEnum.BERACHAIN]: "berachain",
        [t.BlockchainEnum.TRON]: "tron",
        [t.BlockchainEnum.TUXAPPCHAIN]: "tuxappchain",
        [t.BlockchainEnum.VERTEX]: "vertex",
        [t.BlockchainEnum.OPTIMA]: "optima",
        [t.BlockchainEnum.EASYCHAIN]: "easychain",
        [t.BlockchainEnum.HAKO]: "hako",
        [t.BlockchainEnum.POLYGON]: "polygon",
        [t.BlockchainEnum.BSC]: "bsc",
        [t.BlockchainEnum.HYPERLIQUID]: "hyperliquid",
        [t.BlockchainEnum.TON]: "ton",
        [t.BlockchainEnum.OPTIMISM]: "optimism",
        [t.BlockchainEnum.AVALANCHE]: "avalanche",
        [t.BlockchainEnum.SUI]: "sui",
        [t.BlockchainEnum.STELLAR]: "stellar",
        [t.BlockchainEnum.APTOS]: "aptos",
        [t.BlockchainEnum.CARDANO]: "cardano",
        [t.BlockchainEnum.LITECOIN]: "litecoin",
        [t.BlockchainEnum.LAYERX]: "layerx",
        [t.BlockchainEnum.MONAD]: "monad",
        [t.BlockchainEnum.ADI]: "adi",
        [t.BlockchainEnum.STARKNET]: "starknet",
        [t.BlockchainEnum.PLASMA]: "plasma",
        [t.BlockchainEnum.ALEO]: "aleo",
        [t.BlockchainEnum.SCROLL]: "scroll",
        [t.BlockchainEnum.DASH]: "dash",
        [t.BlockchainEnum.MOVEMENT]: "movement",
        [t.BlockchainEnum.FOGO]: "fogo",
        [t.BlockchainEnum.HOOD]: "hood",
        [t.BlockchainEnum.QTC]: "qtc",
      };
    e.s([
      "assetNetworkAdapter",
      0,
      n,
      "isValidBlockchainEnumKey",
      0,
      function (e) {
        return e in a;
      },
      "reverseAssetNetworkAdapter",
      0,
      a,
    ]);
  },
  226492,
  304476,
  (e) => {
    "use strict";
    var t = e.i(267756),
      n = e.i(67781),
      a = e.i(25548),
      i = e.i(5895);
    let o = {
        aurora: "aurora",
        aurora_devnet: "0x4e45426a.c.aurora",
        turbochain: "0x4e45415f.c.aurora",
        tuxappchain: "0x4e454165.c.aurora",
        vertex: "0x4e454173.c.aurora",
        optima: "0x4e454161.c.aurora",
        easychain: "0x4e454218.c.aurora",
        hako: "0x4e4542ad.c.aurora",
      },
      r = new Set(Object.keys(o));
    e.s(
      [
        "getAuroraEngineContractId",
        0,
        function (e) {
          if (!(e in o)) throw Error(`Unsupported virtual chain = ${e}`);
          return o[e];
        },
        "isAuroraVirtualChain",
        0,
        function (e) {
          return r.has(e);
        },
      ],
      304476,
    );
    var s = e.i(117110),
      l = e.i(721794),
      u = e.i(505599),
      c = e.i(197900);
    function d(e) {
      let t = e;
      return (
        i.config.features.hyperliquid || (t = t.filter((e) => "hyperliquid" !== e)),
        i.config.features.ton || (t = t.filter((e) => "ton" !== e)),
        i.config.features.optimism || (t = t.filter((e) => "optimism" !== e)),
        i.config.features.avalanche || (t = t.filter((e) => "avalanche" !== e)),
        i.config.features.sui || (t = t.filter((e) => "sui" !== e)),
        i.config.features.stellar || (t = t.filter((e) => "stellar" !== e)),
        i.config.features.aptos || (t = t.filter((e) => "aptos" !== e)),
        t
      );
    }
    e.i(18578),
      e.s(
        [
          "allAvailableChains",
          0,
          function () {
            let e = (0, s.getBlockchainsOptions)(),
              t = d(Object.keys(e));
            return Object.fromEntries(
              Object.values(e)
                .filter((e) => t.includes(e.value))
                .map((e) => [e.value, e]),
            );
          },
          "availableChainsForToken",
          0,
          function (e, i = a.LIST_TOKENS_FLATTEN) {
            let o = (0, t.resolveTokenFamily)(a.tokenFamilies, e),
              r = [];
            if (o) for (let e of (0, n.eachBaseTokenInfo)(i)) o.tokenIds.includes(e.defuseAssetId) && r.push(...e.deployments);
            else for (let t of (0, n.eachBaseTokenInfo)([e])) r.push(...t.deployments);
            let l = Array.from(new Set(r.map((e) => e.chainName)));
            return (
              (l = d(l)),
              Object.fromEntries(
                Object.values((0, s.getBlockchainsOptions)())
                  .filter((e) => l.includes(u.reverseAssetNetworkAdapter[e.value]))
                  .map((e) => [e.value, e]),
              )
            );
          },
          "availableDisabledChainsForToken",
          0,
          function (e, t) {
            return Object.values(e).reduce((e, n) => {
              let a = d([u.reverseAssetNetworkAdapter[n.value]]);
              return !t[n.value] && a.length > 0 && (e[n.value] = n), e;
            }, {});
          },
          "isOneClickTokenChainSupported",
          0,
          function (e, i) {
            let o = (0, t.resolveTokenFamily)(a.tokenFamilies, e),
              r = o?.tokenIds ?? (0, n.getUnderlyingBaseTokenInfos)(e).map((e) => e.defuseAssetId);
            for (let e of (0, n.eachBaseTokenInfo)(a.LIST_TOKENS_FLATTEN))
              if (r.includes(e.defuseAssetId) && null != e.deployments.find((e) => e.chainName === i))
                return (0, c.isOneClickAssetChainSupported)(e.defuseAssetId, i);
            return !0;
          },
          "isSupportedChainName",
          0,
          function (e) {
            return Object.keys(l.CHAIN_IDS).includes(e);
          },
        ],
        226492,
      );
  },
  161794,
  (e) => {
    "use strict";
    var t = e.i(18578),
      n = e.i(267756),
      a = e.i(67781),
      i = e.i(858712);
    e.s([
      "resolveTokenOut",
      0,
      function (e, o, r, s) {
        if ("near_intents" === e) {
          let e = (0, a.getAnyBaseTokenInfo)(o);
          return [e, e.deployments[0]];
        }
        if ((0, i.isHyperliquid)(e)) {
          let l = (function (e, o, r) {
            let s = (0, t.isBaseToken)(e) ? ((0, i.isDirectHyperliquidToken)(e) ? e : null) : e.groupedTokens.find(i.isDirectHyperliquidToken);
            if (null == s) {
              let t = (0, n.resolveTokenFamily)(o, e);
              if (null != t) {
                for (let e of (0, a.eachBaseTokenInfo)(r))
                  if (t.tokenIds.includes(e.defuseAssetId) && (0, i.isDirectHyperliquidToken)(e)) {
                    s = e;
                    break;
                  }
              }
            }
            if (null == s) return null;
            let l = s.deployments.find((e) => "hyperliquid" === e.chainName);
            return null != l ? [s, l] : null;
          })(o, r, s);
          if (null != l) return l;
          e = { bitcoin: "bitcoin", solana: "solana", ethereum: "eth" }[(0, i.getHyperliquidSrcChain)(o)];
        }
        let l = (0, n.resolveTokenFamily)(r, o),
          u = l?.tokenIds ?? (0, a.getUnderlyingBaseTokenInfos)(o).map((e) => e.defuseAssetId);
        for (let t of (0, a.eachBaseTokenInfo)(s)) {
          if (!u.includes(t.defuseAssetId)) continue;
          let n = t.deployments.find((t) => t.chainName === e);
          if (null != n) return [t, n];
        }
        throw Error("No corresponded token found");
      },
    ]);
  },
  912665,
  769787,
  (e) => {
    "use strict";
    let t = new Set(["SUCCESS", "REFUNDED", "FAILED", "FAILED_EXECUTION"]);
    e.s(["WITHDRAW_TERMINAL_STATUSES", 0, t], 912665);
    var n = e.i(789477),
      a = e.i(757668),
      i = e.i(528973);
    e.s(
      [
        "UnknownWithdrawStatus",
        0,
        function ({ recipient: e, statusCheck: t, error: o, onCheck: r }) {
          let s = "automatic" === t;
          return (0, n.jsxs)("div", {
            className: "space-y-3",
            children: [
              (0, n.jsxs)("p", { className: "font-medium text-gray-700 text-sm dark:text-white", children: ["To ", (0, a.midTruncate)(e)] }),
              (0, n.jsx)("p", {
                className: "font-semibold text-amber-700 text-sm dark:text-amber-300",
                children: s ? "Checking submission" : "Outcome unknown",
              }),
              (0, n.jsx)("p", {
                className: "text-gray-500 text-sm dark:text-gray-400",
                children: s
                  ? "We're checking whether this send was accepted. You can return to Activity if you leave this page."
                  : "This send may have succeeded. Check its status before sending the same payment again.",
              }),
              o && (0, n.jsx)("p", { role: "alert", className: "text-red-600 text-sm dark:text-red-300", children: o }),
              !s &&
                (0, n.jsx)(i.default, { fullWidth: !0, loading: "manual" === t, onClick: r, children: "manual" === t ? "Checking status…" : "Check status" }),
            ],
          });
        },
      ],
      769787,
    );
  },
  581797,
  390339,
  (e) => {
    "use strict";
    var t = e.i(789477),
      n = e.i(696150);
    let a = n.forwardRef(function ({ title: e, titleId: t, ...a }, i) {
      return n.createElement(
        "svg",
        Object.assign(
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 16 16",
            fill: "currentColor",
            "aria-hidden": "true",
            "data-slot": "icon",
            ref: i,
            "aria-labelledby": t,
          },
          a,
        ),
        e ? n.createElement("title", { id: t }, e) : null,
        n.createElement("path", {
          fillRule: "evenodd",
          d: "M15 8c0 .982-.472 1.854-1.202 2.402a2.995 2.995 0 0 1-.848 2.547 2.995 2.995 0 0 1-2.548.849A2.996 2.996 0 0 1 8 15a2.996 2.996 0 0 1-2.402-1.202 2.995 2.995 0 0 1-2.547-.848 2.995 2.995 0 0 1-.849-2.548A2.996 2.996 0 0 1 1 8c0-.982.472-1.854 1.202-2.402a2.995 2.995 0 0 1 .848-2.547 2.995 2.995 0 0 1 2.548-.849A2.995 2.995 0 0 1 8 1c.982 0 1.854.472 2.402 1.202a2.995 2.995 0 0 1 2.547.848c.695.695.978 1.645.849 2.548A2.996 2.996 0 0 1 15 8Zm-3.291-2.843a.75.75 0 0 1 .135 1.052l-4.25 5.5a.75.75 0 0 1-1.151.043l-2.25-2.5a.75.75 0 1 1 1.114-1.004l1.65 1.832 3.7-4.789a.75.75 0 0 1 1.052-.134Z",
          clipRule: "evenodd",
        }),
      );
    });
    e.s(["CheckBadgeIcon", 0, a], 390339);
    var i = e.i(980297),
      o = e.i(150788),
      r = e.i(364087),
      s = e.i(723980),
      l = e.i(145803),
      u = e.i(317824),
      c = e.i(631318),
      d = e.i(241258);
    let p = ["pending", "executing", "complete"],
      m = { pending: "Processing send", executing: "Sending", complete: "Complete" },
      f = { pending: "Processing", executing: "Sending", complete: "Complete" };
    function h(e) {
      switch (e) {
        case "pending":
        case "intent_settling":
          return "pending";
        case "SubmittingTxHash":
        case "checking":
        case "waiting":
        case "polling":
        case "retryDelay":
          return "executing";
        case "success":
        case "error":
          return "complete";
        default:
          return d.logger.warn(`Unknown send state: "${e}", defaulting to pending`), "pending";
      }
    }
    var k = e.i(539698),
      y = e.i(757668),
      g = e.i(528973),
      A = e.i(117110);
    function T({ withdraw: e, displayStage: n, displayIndex: r, isError: d, isSuccess: f, onWithdrawAgain: h }) {
      let { tokenOut: E, amountOut: R, depositAddress: I, recipient: w, displayOverrides: b, recipientContactName: C } = e,
        v = (0, s.formatTokenValue)(R.amount, R.decimals, { min: 1e-4, fractionDigits: 4 }),
        { accountId: x } = (0, k.useNearWallet)(),
        N = I ? (0, A.buildIntentsExplorerTxUrl)(I, { isConfidential: e.isConfidential }) : null,
        S = b?.successActionHref;
      return (0, t.jsxs)(t.Fragment, {
        children: [
          (0, t.jsxs)("div", {
            className: "mt-7 rounded-3xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-white/5 dark:bg-gray-800",
            children: [
              (0, t.jsxs)("div", {
                className: "flex flex-col items-center text-center",
                children: [
                  (0, t.jsx)(o.default, { icon: E?.icon, sizeClassName: "size-13" }),
                  (0, t.jsxs)("div", {
                    className: "mt-5 text-balance font-bold text-2xl/7 text-gray-900 tracking-tight dark:text-white",
                    children: [
                      "Sending",
                      " ",
                      (0, t.jsxs)("span", { className: "whitespace-nowrap", children: [v, " ", (0, u.getEarnVaultDisplayName)(E)] }),
                      (0, t.jsx)("br", {}),
                      "to",
                      " ",
                      (0, t.jsx)("span", { className: "whitespace-nowrap", children: b?.recipientLabel ?? (0, y.midTruncate)(w) }),
                    ],
                  }),
                  C &&
                    (0, t.jsxs)("div", {
                      className: "mt-2 flex items-center gap-1",
                      children: [
                        (0, t.jsx)(a, { className: "size-4 shrink-0 text-green-600" }),
                        (0, t.jsx)("span", { className: "font-medium text-base/5 text-gray-500 dark:text-gray-400", children: C }),
                      ],
                    }),
                ],
              }),
              (0, t.jsx)("div", {
                className: "mt-6 border-gray-200 border-t pt-6 sm:mt-8 sm:pt-8 dark:border-white/10",
                children: (0, t.jsx)(l.ProgressSteps, { stages: p, stageLabels: m, displayStage: n, displayIndex: r, isError: d, isSuccess: f, size: "md" }),
              }),
            ],
          }),
          (0, t.jsxs)("div", {
            className: "mt-5 flex flex-col gap-3",
            children: [
              f && !S && I && (null == x || w !== x) && (0, t.jsx)(c.DownloadProofButton, { type: "send", depositAddress: I }),
              N &&
                (0, t.jsxs)(g.default, {
                  href: N,
                  variant: "secondary",
                  size: "xl",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  fullWidth: !0,
                  children: ["View on explorer", (0, t.jsx)(i.ArrowTopRightOnSquareIcon, {})],
                }),
              f && (0, t.jsx)(g.default, { size: "xl", fullWidth: !0, href: S, onClick: S ? void 0 : h, children: b?.successActionLabel ?? "Send again" }),
              !f && !d && (0, t.jsx)(g.default, { size: "xl", variant: "secondary", fullWidth: !0, onClick: h, children: "Create a new send" }),
              d && (0, t.jsx)(g.default, { size: "xl", variant: "secondary", fullWidth: !0, onClick: h, children: "Try a new send" }),
            ],
          }),
        ],
      });
    }
    e.s(
      [
        "WithdrawStatus",
        0,
        function ({ withdraw: e, variant: n, onWithdrawAgain: a }) {
          let {
              displayStage: i,
              displayIndex: o,
              contextStatus: s,
              stateValue: u,
            } = (0, r.useMachineStageProgress)({ actorRef: e.actorRef, stages: p, getStageFromState: h }),
            c = null != s ? "FAILED" === s || "REFUNDED" === s || "FAILED_EXECUTION" === s : "error" === u,
            d = null != s ? "SUCCESS" === s : "success" === u;
          return "dock" === n
            ? (0, t.jsx)(l.ProgressSteps, { stages: p, stageLabels: f, displayStage: i, displayIndex: o, isError: c, isSuccess: d, size: "sm" })
            : (0, t.jsx)(T, { withdraw: e, displayStage: i, displayIndex: o, isError: c, isSuccess: d, onWithdrawAgain: a });
        },
      ],
      581797,
    );
  },
  245132,
  602661,
  113432,
  977524,
  211788,
  152061,
  347924,
  68146,
  472613,
  350845,
  155425,
  (e) => {
    "use strict";
    let t, n, a, i;
    e.i(549498);
    var o,
      r = e.i(217351),
      s = e.i(445234),
      l = e.i(120993),
      u = e.i(557518),
      c = e.i(945878);
    e.i(645719);
    var d = e.i(529073),
      p = e.i(657585),
      m = e.i(627197),
      f = e.i(517494);
    e.i(226492);
    var h = e.i(304476),
      k = e.i(723980),
      y = e.i(711776),
      g = e.i(18578),
      A = e.i(67781),
      T = e.i(658077),
      E = e.i(564264),
      R = e.i(66189),
      I = e.i(142007);
    class w extends Error {
      status;
      constructor(e, t) {
        super(t), (this.status = e);
      }
    }
    let b = ["nep413", "erc191", "raw_ed25519", "webauthn", "ton_connect", "sep53", "tip191"];
    function C(e, t) {
      return "string" == typeof e && t.includes(e);
    }
    function v(e) {
      return (
        !!(0, R.isRecord)(e) &&
        "string" == typeof e.err &&
        (void 0 === e.correlationId || "string" == typeof e.correlationId) &&
        (void 0 === e.originalRequest || (0, R.isJsonObject)(e.originalRequest))
      );
    }
    function x() {
      throw Error("Withdraw API returned an invalid response");
    }
    function N(e) {
      var t, n;
      return v(e)
        ? e
        : (0, R.isRecord)(e) &&
            ((t = e.ok),
            (0, R.isRecord)(t) &&
              ((n = t.intent), (0, R.isRecord)(n) && C(n.standard, b) && (0, R.isJsonValue)(n.payload)) &&
              "string" == typeof t.correlationId)
          ? { ok: e.ok }
          : x();
    }
    function S(e) {
      var t, n;
      return (0, R.isRecord)(e) && "string" == typeof e.err
        ? { err: { kind: "unknown", message: e.err } }
        : (0, R.isRecord)(e) && ((t = e.err), (0, R.isRecord)(t) && C(t.kind, ["rejected", "unknown"]) && "string" == typeof t.message)
          ? { err: e.err }
          : (0, R.isRecord)(e) && ((n = e.ok), (0, R.isRecord)(n) && "string" == typeof n.intentHash && "string" == typeof n.correlationId)
            ? { ok: e.ok }
            : x();
    }
    function O(e) {
      var t;
      return v(e)
        ? e
        : (0, R.isRecord)(e) &&
            ((t = e.ok),
            (0, R.isRecord)(t) &&
              "string" == typeof t.status &&
              t.status.length > 0 &&
              (void 0 === t.intentHash || ("string" == typeof t.intentHash && t.intentHash.length > 0)))
          ? { ok: e.ok }
          : x();
    }
    function _(e) {
      var t, n, a, i;
      let o = v(e)
        ? e
        : (0, R.isRecord)(e) &&
            ((t = e.ok),
            (0, R.isRecord)(t) &&
              "string" == typeof t.correlationId &&
              "string" == typeof t.timestamp &&
              "string" == typeof t.signature &&
              ((n = t.quoteRequest),
              (0, R.isRecord)(n) &&
                "boolean" == typeof n.dry &&
                "number" == typeof n.slippageTolerance &&
                "string" == typeof n.originAsset &&
                "string" == typeof n.destinationAsset &&
                "string" == typeof n.amount &&
                C(n.swapType, Object.values(I.WITHDRAW_SWAP_TYPE)) &&
                "string" == typeof n.recipient &&
                C(n.recipientType, Object.values(I.WITHDRAW_RECIPIENT_TYPE)) &&
                "string" == typeof n.deadline) &&
              ((a = t.quote),
              (0, R.isRecord)(a) &&
                "string" == typeof a.amountIn &&
                "string" == typeof a.amountOut &&
                (void 0 === a.deadline || "string" == typeof a.deadline) &&
                (void 0 === a.depositAddress || "string" == typeof a.depositAddress) &&
                (void 0 === a.depositMemo || "string" == typeof a.depositMemo) &&
                (void 0 === a.timeEstimate || "number" == typeof a.timeEstimate)) &&
              Array.isArray((i = t.appFee)) &&
              i.every((e) => Array.isArray(e) && 2 === e.length && "string" == typeof e[0] && "string" == typeof e[1]))
          ? { ok: e.ok }
          : x();
      return "err" in o ? o : { ok: { ...o.ok, appFee: o.ok.appFee.map(([e, t]) => [e, BigInt(t)]) } };
    }
    function D(e = {}) {
      let t = e.fetchImpl ?? globalThis.fetch;
      async function n(n, a, i) {
        var o;
        let r,
          s = {
            method: "POST",
            headers: { accept: "application/json", "content-type": "application/json" },
            credentials: e.credentials ?? "include",
            body: JSON.stringify(a),
          },
          l = { ...s.headers, ...e.headers };
        if (e.requestImpl) {
          let t = await e.requestImpl(n, { ...s, headers: l });
          if (!t.ok)
            throw new w(
              t.error.status,
              (function (e) {
                if (e.message) return e.message;
                let t = e.body;
                if ("object" == typeof t && null != t && "error" in t) {
                  if ("string" == typeof t.error) return t.error;
                  if ("object" == typeof t.error && null != t.error && "message" in t.error && "string" == typeof t.error.message) return t.error.message;
                }
                return `Withdraw API request failed (${e.status})`;
              })(t.error),
            );
          return i(t.body);
        }
        if (null == t) throw Error("A fetch implementation is required to use WithdrawApi");
        let u = await t(((o = e.baseUrl ?? ""), `${o.replace(/\/+$/, "")}${n}`), { ...s, headers: { ...s.headers, ...e.headers } });
        try {
          r = await u.json();
        } catch {
          let e = `Withdraw API request failed (${u.status})`;
          if (!u.ok) throw new w(u.status, e);
          throw Error(e);
        }
        if (!u.ok) {
          let e =
            "object" == typeof r && null != r && "error" in r
              ? "string" == typeof r.error
                ? r.error
                : "object" == typeof r.error && null != r.error && "message" in r.error && "string" == typeof r.error.message
                  ? r.error.message
                  : `Withdraw API request failed (${u.status})`
              : `Withdraw API request failed (${u.status})`;
          throw new w(u.status, e);
        }
        return i(r);
      }
      return {
        getQuote: async (e) => n("/api/withdraw/quote", e, _),
        generateIntent: (e) => n("/api/withdraw/intent", e, N),
        async submitIntent(e) {
          try {
            return await n("/api/withdraw/submit", e, S);
          } catch (e) {
            if (e instanceof w && (400 === e.status || 401 === e.status || 403 === e.status)) return { err: { kind: "rejected", message: e.message } };
            throw e;
          }
        },
        getStatus: (e) => n("/api/withdraw/status", e, O),
      };
    }
    e.s(["createWithdrawApi", 0, D], 602661);
    let F = D();
    e.s(["withdrawApi", 0, F], 113432);
    let B = "ERR_QUOTE_SIGNATURE_INVALID";
    function P(e) {
      return "object" == typeof e && null != e && !Array.isArray(e);
    }
    function W(e) {
      return (
        null == e ||
        "string" == typeof e ||
        "number" == typeof e ||
        "boolean" == typeof e ||
        (Array.isArray(e) ? e.every(W) : P(e) && Object.values(e).every(W))
      );
    }
    function M(e) {
      return P(e) && Object.values(e).every(W);
    }
    function U(e) {
      var t, n;
      return (
        !!P(e) &&
        "string" == typeof e.correlationId &&
        "string" == typeof e.timestamp &&
        "string" == typeof e.signature &&
        !!P((t = e.quoteRequest)) &&
        "boolean" == typeof t.dry &&
        "string" == typeof t.swapType &&
        "number" == typeof t.slippageTolerance &&
        Number.isFinite(t.slippageTolerance) &&
        "string" == typeof t.originAsset &&
        "string" == typeof t.depositType &&
        "string" == typeof t.destinationAsset &&
        "string" == typeof t.amount &&
        "string" == typeof t.refundTo &&
        "string" == typeof t.refundType &&
        "string" == typeof t.recipient &&
        "string" == typeof t.recipientType &&
        "string" == typeof t.deadline &&
        !!P((n = e.quote)) &&
        "string" == typeof n.amountIn &&
        "string" == typeof n.amountInFormatted &&
        "string" == typeof n.amountInUsd &&
        "string" == typeof n.minAmountIn &&
        "string" == typeof n.amountOut &&
        "string" == typeof n.amountOutFormatted &&
        "string" == typeof n.amountOutUsd &&
        "string" == typeof n.minAmountOut &&
        "number" == typeof n.timeEstimate &&
        Number.isFinite(n.timeEstimate) &&
        (void 0 === n.depositAddress || "string" == typeof n.depositAddress) &&
        (void 0 === n.deadline || "string" == typeof n.deadline)
      );
    }
    e.i(791793);
    function Q(e) {
      return "near_intents" === e;
    }
    e.s(
      [
        "chainTypeSatisfiesChainName",
        0,
        function (e, t) {
          if (null == e) return !1;
          switch (!0) {
            case "near" === e && "near" === t:
            case "evm" === e && "eth" === t:
            case "evm" === e && "arbitrum" === t:
            case "evm" === e && "base" === t:
            case "evm" === e && "turbochain" === t:
            case "evm" === e && "tuxappchain" === t:
            case "evm" === e && "vertex" === t:
            case "evm" === e && "optima" === t:
            case "evm" === e && "easychain" === t:
            case "evm" === e && "hako" === t:
            case "evm" === e && "aurora" === t:
            case "evm" === e && "aurora_devnet" === t:
            case "evm" === e && "gnosis" === t:
            case "evm" === e && "berachain" === t:
            case "evm" === e && "polygon" === t:
            case "evm" === e && "bsc" === t:
            case "evm" === e && "optimism" === t:
            case "evm" === e && "avalanche" === t:
            case "evm" === e && "monad" === t:
            case "evm" === e && "plasma" === t:
            case "evm" === e && "scroll" === t:
            case "evm" === e && "hood" === t:
            case "evm" === e && "layerx" === t:
            case "evm" === e && "adi" === t:
            case "solana" === e && "solana" === t:
            case "stellar" === e && "stellar" === t:
            case "ton" === e && "ton" === t:
            case "tron" === e && "tron" === t:
              return !0;
          }
          return !1;
        },
        "isNearIntentsNetwork",
        0,
        Q,
      ],
      977524,
    );
    var q = e.i(283278),
      j = e.i(915365),
      L = e.i(241258),
      H = e.i(626531),
      $ = e.i(827391),
      z = e.i(791919),
      K = e.i(385989),
      V = e.i(651235),
      G = e.i(653755),
      X = e.i(901760),
      Y = e.i(404466),
      J = e.i(186448),
      Z = e.i(925419);
    let ee = ["ERR_USER_DIDNT_SIGN", "ERR_WALLET_CANCEL_ACTION", "ERR_WALLET_WEBAUTHN_TIMEOUT_OR_CANCELLED"];
    function et(e, t, n) {
      !n && "default" === e && null != t && ee.includes(t) && (0, Z.trackEvent)("universal_send_rejected");
    }
    e.s(
      [
        "trackUniversalSendRejected",
        0,
        et,
        "trackUniversalSendRequested",
        0,
        function (e, t) {
          t || ("default" === e && (0, Z.trackEvent)("universal_send_requested"));
        },
      ],
      211788,
    );
    function en(e, t) {
      return null != t && e > t.amount;
    }
    var ea = e.i(54913),
      ei = e.i(721794);
    function eo(e) {
      return `${e.rail}:${e.chain}:${e.recipient.toLowerCase()}`;
    }
    function er({ network: e, recipient: t }) {
      let n = t?.trim();
      return "near_intents" !== e && null != n && (0, ea.isEvmAddress)(n) && null != ei.CHAIN_IDS[e] ? { rail: e, chain: e, recipient: n } : null;
    }
    function es(e, t) {
      return { chain: e.chain, rail: e.rail, fresh: !0, overridden: t };
    }
    e.s(["freshDestinationInput", 0, er, "freshDestinationKey", 0, eo, "freshDestinationTelemetryPayload", 0, es], 152061);
    var el = e.i(913852);
    function eu(e) {
      let { parsedRecipient: t, displayAddress: n, blockchain: a, destinationChainName: i } = e,
        o = !Q(a) && (0, h.isAuroraVirtualChain)(i);
      return {
        recipient:
          "nearcom" === t.kind
            ? { kind: "nearcom", address: t.address }
            : { kind: "destination", displayAddress: n, protocolAddress: o ? (0, h.getAuroraEngineContractId)(i) : t.address },
        destinationChainName: i,
        isAurora: o,
      };
    }
    function ec(e, t) {
      return null == e || null == t
        ? e === t
        : e.kind === t.kind &&
            ("nearcom" === e.kind && "nearcom" === t.kind
              ? e.address.bareIdentifier === t.address.bareIdentifier
              : "destination" === e.kind && "destination" === t.kind && e.address === t.address);
    }
    function ed(e, t) {
      return t ? "nearcom" === e.kind : "destination" === e.kind;
    }
    function ep(e, t) {
      return "nearcom" === e.kind
        ? {
            displayRecipient: e.address.displayAddress,
            recipient: l.authIdentity.authHandleToIntentsUserId(e.address.bareIdentifier, "near"),
            recipientType: t ? u.QuoteRequest.recipientType.CONFIDENTIAL_INTENTS : u.QuoteRequest.recipientType.INTENTS,
          }
        : { displayRecipient: e.displayAddress, recipient: e.protocolAddress, recipientType: u.QuoteRequest.recipientType.DESTINATION_CHAIN };
    }
    function em(e) {
      return "nearcom" === e.kind ? e.address.bareIdentifier : e.address;
    }
    function ef(e, t) {
      if ((0, g.isBaseToken)(e))
        return t.filter((t) => {
          if (!(0, g.isBaseToken)(t)) return !1;
          if (t.defuseAssetId === e.defuseAssetId) return !0;
          let n = (0, g.getTokenAid)(e),
            a = (0, g.getTokenAid)(t);
          return null != n && null != a ? n === a : t.symbol === e.symbol;
        });
    }
    function eh(e) {
      let { formContext: t, amount: n, amountMode: a, balances: i, tokenList: o, exactInputAmount: r } = e;
      if ((0, y.isSamePaymentFamily)(t.paymentToken, t.tokenIn))
        return (0, el.selectQuoteInputToken)({ tokenIn: t.paymentToken, parsedAmount: n, balances: i, siblingCandidates: ef(t.paymentToken, o) });
      let s = (0, y.resolvePaymentSource)({ paymentToken: t.paymentToken, balances: i, siblingCandidates: ef(t.paymentToken, o) });
      if (null == s) return null;
      if (a === u.QuoteRequest.swapType.EXACT_INPUT) {
        let e = r ?? s.spendableBalance;
        return 0n === e.amount ? null : { tokenIn: s.quoteToken, amount: e };
      }
      return { tokenIn: s.quoteToken, amount: n };
    }
    function ek(e) {
      let { formContext: t, quoteInput: n, userAddress: a, userChainType: i, tokenList: o, balances: r, exactInputAmount: s, isConfidential: l } = e;
      if (
        null == t.parsedAmount ||
        0n === t.parsedAmount.amount ||
        null == t.parsedRecipient ||
        !ed(t.parsedRecipient, Q(t.blockchain)) ||
        null == a ||
        null == i
      )
        return !1;
      let { recipient: u } = eu({
          parsedRecipient: t.parsedRecipient,
          displayAddress: t.recipient,
          blockchain: t.blockchain,
          destinationChainName: t.tokenOutDeployment.chainName,
        }),
        c = ep(u, l),
        d = t.parsedDestinationMemo ?? null,
        p = n.destinationMemo ?? null,
        m = (0, A.adjustDecimalsTokenValue)(t.parsedAmount, n.amount.decimals),
        f = eh({ formContext: t, amount: m, amountMode: n.swapType, balances: r, tokenList: o, exactInputAmount: s });
      return (
        null != f &&
        f.tokenIn.defuseAssetId === n.tokenIn.defuseAssetId &&
        n.userAddress === a &&
        n.userChainType === i &&
        (!0 === n.isConfidential) == (!0 === l) &&
        (n.displayRecipient ?? n.recipient) === c.displayRecipient &&
        n.recipient === c.recipient &&
        n.recipientType === c.recipientType &&
        n.tokenOut.defuseAssetId === t.tokenOut.defuseAssetId &&
        f.amount.amount === n.amount.amount &&
        d === p
      );
    }
    e.s(
      [
        "getParsedWithdrawRecipientAddress",
        0,
        em,
        "parsedWithdrawRecipientMatchesNetwork",
        0,
        ed,
        "parsedWithdrawRecipientsEqual",
        0,
        ec,
        "resolveWithdrawQuoteRecipient",
        0,
        eu,
        "serializeWithdrawQuoteRecipient",
        0,
        ep,
      ],
      347924,
    ),
      e.s(["getSiblingCandidates", 0, ef, "matchesWithdrawQuoteInput", 0, ek, "resolveWithdrawQuoteInput", 0, eh], 68146);
    var ey = e.i(858712),
      eg = e.i(161794),
      eA = e.i(37453),
      eT = e.i(25548),
      eE = e.i(166786),
      eR = e.i(567451),
      eI = e.i(157946);
    function ew(e) {
      return (
        (function ({ bridge: e }) {
          return ["direct", "hot_omni", "near_omni"].includes(e);
        })(e) || "aleo" === e.chainName
      );
    }
    e.s(["requiresExchangeFundsAck", 0, ew], 472613);
    let eb = ["tokenIn", "paymentToken", "tokenOut", "parsedAmount", "parsedRecipient", "parsedDestinationMemo", "cexFundsLooseConfirmation"],
      eC = (0, eI.fromTransition)(
        (e, t) => {
          let n = e;
          switch (t.type) {
            case "WITHDRAW_FORM.UPDATE_TOKEN": {
              let a = Q(e.blockchain) || (0, eE.isEarnVaultToken)(t.params.token),
                i = (0, eE.isEarnVaultToken)(t.params.token) ? "near_intents" : e.blockchain,
                [o, r] = a
                  ? (0, eg.resolveTokenOut)(i, t.params.token, eT.tokenFamilies, eT.LIST_TOKENS_FLATTEN)
                  : (function (e, t, n) {
                      try {
                        return (0, eg.resolveTokenOut)(e, t, eT.tokenFamilies, eT.LIST_TOKENS_FLATTEN);
                      } catch {
                        let e;
                        return [(e = ev(t, n)), e.deployments[0]];
                      }
                    })(e.blockchain, t.params.token, e.tokenOutDeployment.chainName),
                s = a ? i : r.chainName,
                l = s === e.blockchain,
                u = t.params.parsedAmount ? { amount: BigInt(t.params.parsedAmount.amount), decimals: t.params.parsedAmount.decimals } : null;
              n = {
                ...e,
                amount: "",
                parsedAmount: u,
                tokenIn: t.params.token,
                paymentToken: t.params.token,
                paymentTokenCustomized: !1,
                tokenOut: o,
                tokenOutDeployment: r,
                recipient: l ? e.recipient : "",
                parsedRecipient: l ? e.parsedRecipient : null,
                destinationMemo: l ? e.destinationMemo : "",
                parsedDestinationMemo: l ? e.parsedDestinationMemo : null,
                cexFundsLooseConfirmation: a ? "not_required" : eS(r),
                minReceivedAmount: null,
                blockchain: s,
              };
              break;
            }
            case "WITHDRAW_FORM.UPDATE_BLOCKCHAIN": {
              let a = (0, eE.isEarnVaultToken)(e.tokenIn) ? "near_intents" : t.params.blockchain,
                [i, o] = (0, eg.resolveTokenOut)(a, e.tokenIn, eT.tokenFamilies, eT.LIST_TOKENS_FLATTEN),
                r = Q(a) ? "not_required" : eS(o);
              n = {
                ...e,
                tokenOut: i,
                tokenOutDeployment: o,
                recipient: "",
                parsedRecipient: null,
                destinationMemo: "",
                parsedDestinationMemo: null,
                cexFundsLooseConfirmation: r,
                minReceivedAmount: null,
                blockchain: a,
              };
              break;
            }
            case "WITHDRAW_FORM.UPDATE_BLOCKCHAIN_AND_RECIPIENT": {
              let { recipient: a, proxyRecipient: i } = t.params,
                o = (0, eE.isEarnVaultToken)(e.tokenIn) ? "near_intents" : t.params.blockchain,
                [r, s] = (0, eg.resolveTokenOut)(o, e.tokenIn, eT.tokenFamilies, eT.LIST_TOKENS_FLATTEN),
                l = Q(o) ? "not_required" : eS(s),
                u = (0, ey.isHyperliquid)(o) && "hyperliquid" !== s.chainName ? (i ?? null) : a,
                c = null != u ? ex(u, s, Q(o)) : null,
                d = ec(e.parsedRecipient, c) ? e.parsedRecipient : c,
                p = Q(o);
              n = {
                ...e,
                tokenOut: r,
                tokenOutDeployment: s,
                recipient: p && d?.kind === "nearcom" ? d.address.displayAddress : a,
                parsedRecipient: d,
                destinationMemo: "",
                parsedDestinationMemo: null,
                cexFundsLooseConfirmation: l,
                minReceivedAmount: null,
                blockchain: o,
              };
              break;
            }
            case "WITHDRAW_FORM.UPDATE_AMOUNT": {
              let a = t.params.parsedAmount ? { amount: BigInt(t.params.parsedAmount.amount), decimals: t.params.parsedAmount.decimals } : null;
              n = { ...e, parsedAmount: a, amount: t.params.amount };
              break;
            }
            case "WITHDRAW_FORM.RECIPIENT": {
              let a = t.params.recipient,
                i = (0, ey.isHyperliquid)(e.blockchain) && "hyperliquid" !== e.tokenOutDeployment.chainName ? t.params.proxyRecipient : t.params.recipient,
                o = i ? ex(i, e.tokenOutDeployment, Q(e.blockchain)) : null,
                r = ec(e.parsedRecipient, o) ? e.parsedRecipient : o,
                s = Q(e.blockchain);
              n = { ...e, recipient: s && r?.kind === "nearcom" ? r.address.displayAddress : a, parsedRecipient: r };
              break;
            }
            case "WITHDRAW_FORM.UPDATE_DESTINATION_MEMO":
              n = { ...e, destinationMemo: t.params.destinationMemo, parsedDestinationMemo: eN(t.params.destinationMemo, e.tokenOutDeployment.chainName) };
              break;
            case "WITHDRAW_FORM.CEX_FUNDS_LOOSE_CHANGED":
              n = { ...e, cexFundsLooseConfirmation: t.params.cexFundsLooseConfirmation };
              break;
            case "WITHDRAW_FORM.UPDATE_MIN_RECEIVED_AMOUNT":
              n = { ...e, minReceivedAmount: t.params.minReceivedAmount };
              break;
            case "WITHDRAW_FORM.UPDATE_PAYMENT_TOKEN":
              n = { ...e, paymentToken: t.params.paymentToken, paymentTokenCustomized: !1 };
              break;
            case "WITHDRAW_FORM.PICK_PAYMENT_TOKEN":
              n = { ...e, paymentToken: t.params.paymentToken, paymentTokenCustomized: !0 };
              break;
            default:
              return e;
          }
          let a = [];
          for (let t of eb) n[t] !== e[t] && a.push(t);
          return (
            ("WITHDRAW_FORM.UPDATE_AMOUNT" !== t.type || !1 !== t.params.notifyParent) &&
              a.length > 0 &&
              e.parentRef.send({ type: "WITHDRAW_FORM_FIELDS_CHANGED", fields: a }),
            n
          );
        },
        ({ input: e }) => {
          let t,
            n = (0, eE.isEarnVaultToken)(e.tokenIn) ? "near_intents" : e.blockchain,
            [a, i] =
              null != n ? (0, eg.resolveTokenOut)(n, e.tokenIn, eT.tokenFamilies, eT.LIST_TOKENS_FLATTEN) : [(t = ev(e.tokenIn, null)), t.deployments[0]],
            o = n ?? i.chainName,
            r = e.recipient ?? "",
            s = "" !== r ? ex(r, i, Q(o)) : null,
            l = Q(o) ? (s?.kind === "nearcom" ? s.address.displayAddress : r) : null != s ? r : "",
            u = e.parsedAmount ? { amount: BigInt(e.parsedAmount.amount), decimals: e.parsedAmount.decimals } : null;
          return {
            parentRef: e.parentRef,
            tokenIn: e.tokenIn,
            paymentToken: e.paymentToken ?? e.tokenIn,
            paymentTokenCustomized: !1,
            tokenOut: a,
            tokenOutDeployment: i,
            amount: e.amount ?? "",
            parsedAmount: u,
            recipient: l,
            parsedRecipient: s,
            destinationMemo: "",
            parsedDestinationMemo: null,
            cexFundsLooseConfirmation: Q(o) ? "not_required" : eS(i),
            minReceivedAmount: null,
            blockchain: o,
          };
        },
      );
    function ev(e, t) {
      if ((0, g.isBaseToken)(e)) return e;
      if (null != t) {
        let n = e.groupedTokens.find((e) => e.originChainName === t);
        if (null != n) return n;
      }
      let n = e.groupedTokens[0];
      return (0, f.assert)(null != n, "Token out not found"), n;
    }
    function ex(e, t, n) {
      if (n) {
        let t = (0, eR.parseNearcomAddress)(e);
        return null == t ? null : { kind: "nearcom", address: t };
      }
      if ("near" === t.chainName) {
        let t = e.toLowerCase();
        return (0, eA.validateAddress)(t, "near") ? { kind: "destination", address: t } : null;
      }
      return (0, eA.validateAddress)(e, t.chainName) ? { kind: "destination", address: e } : null;
    }
    function eN(e, t) {
      if ("xrpledger" !== t || "" === e.trim()) return null;
      let n = Number(e.trim());
      return !Number.isInteger(n) || n < 0 || n > 0xffffffff ? null : n.toString();
    }
    function eS(e) {
      return "hyperliquid" === e.chainName ? "not_required" : ew(e) ? "not_confirmed" : "not_required";
    }
    function eO(e) {
      let { formContext: t, balances: n, tokenList: a, amountMode: i, exactInputAmount: o } = e;
      return null == t.parsedAmount ? null : eh({ formContext: t, amount: t.parsedAmount, amountMode: i, balances: n, tokenList: a, exactInputAmount: o });
    }
    function e_(e, t, n) {
      let a = (0, d.getPriceForToken)(t, n);
      return null == a || a <= 0 ? null : (Number(e.amount) / 10 ** e.decimals) * a;
    }
    function eD(e) {
      if (!e.backgroundQuoterRef) return void e.onQuoteError("Unable to initialize quote engine. Please try again.");
      let t = (function (e) {
        var t, n;
        let a = (function ({ formContext: e, userAddress: t, userChainType: n }) {
          return null != e.parsedAmount &&
            0n !== e.parsedAmount.amount &&
            null != e.parsedRecipient &&
            ed(e.parsedRecipient, Q(e.blockchain)) &&
            null != t &&
            null != n
            ? { formContext: e, userAddress: t, userChainType: n }
            : null;
        })({ formContext: e.formContext, userAddress: e.userAddress, userChainType: e.userChainType });
        if (null == a) return { type: "skip" };
        let { formContext: i, userAddress: o, userChainType: r } = a,
          s = i.parsedAmount;
        if (null == s) return { type: "skip" };
        let l = !(0, y.isSamePaymentFamily)(i.paymentToken, i.tokenIn) && e.amountMode === u.QuoteRequest.swapType.EXACT_OUTPUT,
          d = !0 === e.balancesLoaded,
          p =
            l && !d
              ? { tokenIn: (0, A.getAnyBaseTokenInfo)(i.paymentToken), amount: s }
              : eO({ formContext: i, balances: e.balances, tokenList: e.tokenList, amountMode: e.amountMode, exactInputAmount: e.exactInputAmount });
        if (null == p) return { type: "error", reason: "INSUFFICIENT_BALANCE" };
        let { tokenIn: m, amount: f } = p,
          h = d ? (0, T.computeTotalBalanceDifferentDecimals)(m, e.balances, { strict: !1 }) : null;
        if (l && d && (null == h || 0n === h.amount)) return { type: "error", reason: "INSUFFICIENT_BALANCE" };
        if (l && d && null != e.tokenPrices) {
          let t = (0, ey.isDirectHyperliquidUsdcToken)(i.tokenOut),
            n = null != h ? e_(h, m, e.tokenPrices) : null,
            a = t ? Number(s.amount) / 10 ** s.decimals : e_(s, i.tokenIn, e.tokenPrices);
          if (null != n && null != a) {
            if (n < a) return { type: "error", reason: "INSUFFICIENT_BALANCE" };
            if (t && n < a + 0.4) return { type: "fallback_exact_in" };
          }
        }
        if (
          (0, y.isSamePaymentFamily)(i.paymentToken, i.tokenIn) &&
          e.amountMode === u.QuoteRequest.swapType.EXACT_OUTPUT &&
          ((t = (0, T.computeTotalBalanceDifferentDecimals)(m, e.balances)),
          (n = e.slippageBasisPoints),
          null != t && f.amount > (0, A.netDownAmount)(t.amount, n))
        )
          return { type: "fallback_exact_in" };
        let k = i.parsedRecipient;
        if (null == k) return { type: "skip" };
        let {
            recipient: g,
            destinationChainName: E,
            isAurora: R,
          } = eu({ parsedRecipient: k, displayAddress: i.recipient, blockchain: i.blockchain, destinationChainName: i.tokenOutDeployment.chainName }),
          I = ep(g, e.isConfidential),
          w = e.nowMs ?? Date.now();
        return {
          type: "quote",
          payload: {
            tokenIn: m,
            tokenOut: i.tokenOut,
            amount: f,
            swapType: e.amountMode,
            slippageBasisPoints: e.slippageBasisPoints,
            slippageExplicitlySet: e.slippageExplicitlySet,
            defuseUserId: o,
            deadline: new Date(w + c.settings.dryQuoteDeadlineMs).toISOString(),
            userAddress: o,
            userChainType: r,
            ...I,
            ...(i.parsedDestinationMemo ? { destinationMemo: i.parsedDestinationMemo } : {}),
            ...(R ? { virtualChainRecipient: i.parsedRecipient?.kind === "destination" ? i.parsedRecipient.address : void 0 } : {}),
            destinationChainName: E,
            ...(e.isConfidential ? { isConfidential: e.isConfidential } : {}),
          },
        };
      })({
        formContext: e.formContext,
        userAddress: e.userAddress,
        userChainType: e.userChainType,
        tokenList: e.tokenList,
        balances: e.balances,
        amountMode: e.amountMode,
        exactInputAmount: e.exactInputAmount,
        slippageBasisPoints: e.slippageBasisPoints,
        slippageExplicitlySet: e.slippageExplicitlySet,
        isConfidential: e.isConfidential,
        tokenPrices: e.tokenPrices,
        balancesLoaded: e.balancesLoaded,
      });
      if ("skip" !== t.type) {
        if ("error" === t.type) return void e.onQuoteError(t.reason);
        if ("fallback_exact_in" === t.type) return void e.onFallbackExactIn();
        e.backgroundQuoterRef.send({ type: "NEW_QUOTE_INPUT", params: t.payload });
      }
    }
    function eF(e) {
      try {
        return BigInt(e);
      } catch {
        return null;
      }
    }
    function eB(e) {
      return "perps_fund" === e.journey.flow ? { ...e.facts, journey: e.journey, surface: "perps" } : { ...e.facts, journey: e.journey, surface: "withdraw" };
    }
    function eP(e) {
      return "ok" in e ? { tag: "ok", value: e.ok } : { tag: "err", value: { reason: e.err } };
    }
    function eW(e, t) {
      return (
        t.params.quoteInput.swapType === e.amountMode &&
        ek({
          formContext: e.withdrawFormRef.getSnapshot().context,
          quoteInput: t.params.quoteInput,
          userAddress: e.userAddress,
          userChainType: e.userChainType,
          tokenList: e.tokenList,
          balances: (0, p.balancesSelector)(e.depositedBalanceRef?.getSnapshot()),
          exactInputAmount: e.exactInputAmount,
          isConfidential: e.isConfidential,
        })
      );
    }
    function eM(e) {
      return null != e.parsedRecipient && ed(e.parsedRecipient, Q(e.blockchain));
    }
    function eU(e, t) {
      if (e.amountMode !== u.QuoteRequest.swapType.EXACT_OUTPUT || !("ok" in t.params.result) || !eW(e, t)) return null;
      let n = eF(t.params.result.ok.quote.amountIn);
      if (null == n) return null;
      let a = (0, T.computeTotalBalanceDifferentDecimals)(t.params.quoteInput.tokenIn, e.depositedBalanceRef.getSnapshot().context.balances, { strict: !1 });
      return null == a ? null : { parsedAmountIn: n, availableBalance: a };
    }
    e.s(["parseDestinationMemo", 0, eN, "withdrawFormReducer", 0, eC], 350845), e.s(["requestWithdrawQuote", 0, eD, "resolveQuoteInput", 0, eO], 155425);
    let eQ = { reenter: !0, guard: "shouldFallbackFreshExactOutOverBalance", actions: { type: "applyExactInFallback", params: { notice: null } } },
      eq =
        ((t = (o = {
          withdrawApi: F,
          onStablecoinQuoteFailed: j.logStablecoinWithdrawQuoteFailed,
          ...{
            telemetry: { warn: (e, t) => L.logger.warn(e, t), error: (e, t) => L.logger.error(e, t) },
            analytics: { emit: (e, t) => (0, m.emitEvent)(e, t) },
          },
        }).telemetry ?? { warn: () => void 0, error: () => void 0 }),
        (n = o.analytics ?? { emit: (e, t) => (0, m.emitEvent)(e, t) }),
        (a = (0, r.createBackgroundWithdraw1csQuoterMachine)({ withdrawApi: o.withdrawApi, telemetry: t, onStablecoinQuoteFailed: o.onStablecoinQuoteFailed })),
        (i = (0, s.createWithdraw1csMachine)({
          withdrawApi: o.withdrawApi,
          telemetry: t,
          verifyQuote:
            o.verifyQuote ??
            ((e) =>
              (function (e) {
                let t;
                if (P(e) && "string" == typeof e.err) {
                  var n;
                  if (
                    P(e) &&
                    "string" == typeof e.err &&
                    (void 0 === e.correlationId || "string" == typeof e.correlationId) &&
                    (void 0 === e.originalRequest || M(e.originalRequest))
                  )
                    return e;
                  let t = P(e) ? e : {};
                  return {
                    err: "string" == typeof t.err ? t.err : B,
                    ...("string" == typeof t.correlationId ? { correlationId: t.correlationId } : {}),
                    ...(M(t.originalRequest) ? { originalRequest: t.originalRequest } : {}),
                  };
                }
                return (function (e, t, n) {
                  var a;
                  if (
                    !P(e) ||
                    !t(e) ||
                    !(Array.isArray((a = e.appFee)) && a.every((e) => Array.isArray(e) && 2 === e.length && "string" == typeof e[0] && "bigint" == typeof e[1]))
                  )
                    return !1;
                  try {
                    return (0, u.verifyQuoteSignature)(e, n);
                  } catch {
                    return !1;
                  }
                })(P(e) ? e.ok : void 0, U, void 0)
                  ? e
                  : ((n = P(e) ? e.ok : void 0),
                    (t = P(n) ? n : void 0),
                    {
                      err: B,
                      ...("string" == typeof t?.correlationId ? { correlationId: t.correlationId } : {}),
                      ...(M(t?.quoteRequest) ? { originalRequest: t.quoteRequest } : {}),
                    });
              })(e)),
          onQuoteSigned: o.onQuoteSigned ?? q.saveQuoteFromResult,
        })),
        (0, J.setup)({
          types: { input: {}, context: {}, events: {}, emitted: {}, children: {} },
          actors: { depositedBalanceActor: p.depositedBalanceMachine, withdraw1csActor: i, withdrawFormActor: eC, backgroundWithdraw1csQuoterActor: a },
          actions: {
            logError: (e, n) => {
              t.error(n.error);
            },
            setAuthenticatedUserIdentity: (0, K.assign)({ userAddress: (e, t) => t.userAddress, userChainType: (e, t) => t.userChainType }),
            clearAuthenticatedUserIdentity: (0, K.assign)({ userAddress: null, userChainType: null }),
            setIntentCreationResult: (0, K.assign)({ intentCreationResult: (e, t) => t }),
            clearIntentCreationResult: (0, K.assign)({ intentCreationResult: null }),
            setSubmissionStatus: (0, K.assign)({ submissionStatus: (e, t) => t }),
            setAnalyticsJourney: (0, K.assign)({
              analytics: ({ context: e }) =>
                (function (e) {
                  let t,
                    n = e.quoteInput,
                    a = e.quoteResult;
                  if (null == n || a?.tag !== "ok") return null;
                  let i =
                    e.amountMode === u.QuoteRequest.swapType.EXACT_OUTPUT
                      ? null == (t = eF(a.value.quote.amountIn))
                        ? null
                        : { amount: t, decimals: n.tokenIn.decimals }
                      : n.amount;
                  if (null == i || i.amount <= 0n) return null;
                  let o = (0, k.formatTokenValue)(i.amount, i.decimals),
                    r = (0, d.getPriceForToken)(n.tokenIn, e.tokenPrices),
                    s = null != r && Number.isFinite(r) && r > 0 ? Number(o) * r : null,
                    l =
                      null != s && Number.isFinite(s) && s >= 0 ? { valueUsd: s, valueQuality: "estimated" } : { valueUsd: null, valueQuality: "unavailable" },
                    c = e.withdrawFormRef.getSnapshot().context,
                    p = { journeyId: E.journeyAnalytics.newId(), privacy: (0, H.getPrivacyMode)(e.isConfidential), valuation: l },
                    m = {
                      asset_id: n.tokenIn.defuseAssetId,
                      asset_symbol: n.tokenIn.symbol,
                      amount: o,
                      source_chain: "near_intents",
                      destination_chain: c.blockchain,
                    };
                  return "fund" === e.variant ? { journey: { ...p, flow: "perps_fund" }, facts: m } : { journey: { ...p, flow: "withdraw" }, facts: m };
                })(e),
            }),
            emitPerpsFundingError: ({ context: e }, t) => {
              e.analytics?.journey.flow === "perps_fund" &&
                E.journeyAnalytics.error({
                  ...e.analytics.facts,
                  journey: e.analytics.journey,
                  surface: "perps",
                  reason: t.reason,
                  ...(void 0 !== t.server_reason ? { server_reason: t.server_reason } : {}),
                });
            },
            emitAnalyticsJourneyStarted: ({ context: e }) => {
              null != e.analytics && E.journeyAnalytics.started(eB(e.analytics));
            },
            passthroughEvent: (0, V.emit)((e, t) => t),
            setSubmitDeps: (0, K.assign)({ submitDeps: (e, t) => t }),
            setQuoteResult: (0, K.assign)({ quoteResult: (e, t) => t }),
            clearQuoteResult: (0, K.assign)({ quoteResult: null }),
            setQuoteInput: (0, K.assign)({ quoteInput: (e, t) => t }),
            clearQuoteInput: (0, K.assign)({ quoteInput: null }),
            clearQuoteRejectionReason: (0, K.assign)({ quoteRejectionReason: null }),
            setQuoteRejectionReason: (0, K.assign)({ quoteRejectionReason: (e, t) => t.reason }),
            setSlippage: (0, K.assign)({ slippageBasisPoints: (e, t) => t, slippageExplicitlySet: !0 }),
            setTokenPrices: (0, K.assign)({ tokenPrices: (e, t) => t.tokenPrices }),
            setAmountMode: (0, K.assign)({
              amountMode: (e, t) => t.amountMode,
              exactInputAmount: (e, t) =>
                null != t.exactInputAmount ? { amount: BigInt(t.exactInputAmount.amount), decimals: t.exactInputAmount.decimals } : null,
              syncExactInputQuoteToAmount: (e, t) => t.amountMode === u.QuoteRequest.swapType.EXACT_INPUT && !0 === t.syncQuoteToAmount,
            }),
            setAmountModeExactOutput: (0, K.assign)({
              amountMode: (e) => u.QuoteRequest.swapType.EXACT_OUTPUT,
              exactInputAmount: null,
              syncExactInputQuoteToAmount: !1,
            }),
            applyExactInFallback: (0, K.assign)({
              amountMode: (e) => u.QuoteRequest.swapType.EXACT_INPUT,
              exactInputAmount: null,
              syncExactInputQuoteToAmount: !1,
              amountModeFallbackNotice: (e, t) => t.notice,
              quoteRejectionReason: (e, t) => (null != t.notice ? "EXCEEDS_BALANCE" : null),
            }),
            clearAmountModeFallbackNotice: (0, K.assign)({ amountModeFallbackNotice: null }),
            clearExactInputQuoteToAmountSync: (0, K.assign)({ syncExactInputQuoteToAmount: !1 }),
            syncExactInputQuoteAmountToForm: ({ context: e, event: t }) => {
              if (
                !e.syncExactInputQuoteToAmount ||
                e.amountMode !== u.QuoteRequest.swapType.EXACT_INPUT ||
                "NEW_WITHDRAW_1CS_QUOTE" !== t.type ||
                !("ok" in t.params.result)
              )
                return;
              let n = e.withdrawFormRef.getSnapshot().context,
                a = t.params.result.ok.quote.amountOut,
                i = eF(a);
              null != i &&
                e.withdrawFormRef.send({
                  type: "WITHDRAW_FORM.UPDATE_AMOUNT",
                  params: { amount: (0, $.formatUnits)(i, n.tokenOut.decimals), parsedAmount: { amount: a, decimals: n.tokenOut.decimals }, notifyParent: !1 },
                });
            },
            emitWithdrawalInitiated: ({ context: e }) => {
              let t = e.withdrawFormRef.getSnapshot().context;
              (0, f.assert)(null != t.parsedAmount, "parsedAmount is null");
              let a = e.quoteInput?.slippageBasisPoints ?? e.slippageBasisPoints;
              n.emit("withdrawal_initiated", {
                token: t.tokenIn.symbol,
                to_chain: t.tokenOut.defuseAssetId,
                amount: t.parsedAmount.toString(),
                configured_slippage_bps: Math.round(e.slippageBasisPoints / 100),
                effective_slippage_bps: Math.round(a / 100),
                slippage_tightened: a < e.slippageBasisPoints,
                slippage_adjusted: e.slippageExplicitlySet,
              });
            },
            relayToDepositedBalanceRef: (0, Y.sendTo)("depositedBalanceRef", (e, t) => t),
            sendToDepositedBalanceRefRefresh: (0, Y.sendTo)("depositedBalanceRef", (e) => ({ type: "REQUEST_BALANCE_REFRESH" })),
            sendToDepositedBalanceRefRemoveAccount: (0, Y.sendTo)("depositedBalanceRef", (e, t) => ({
              type: "REMOVE_ACCOUNT",
              params: { accountId: l.authIdentity.authHandleToIntentsUserId(t.depositAddress, "near") },
            })),
            emitWithdrawalConfirmed: ({ context: e }, t) => {
              if ("ok" !== t.tag) return;
              let { quoteInput: a, submitDeps: i } = e;
              (0, f.assert)(null != i);
              let { intentDescription: o } = t.value,
                { totalAmountIn: r, totalAmountOut: s } = o,
                l = a?.tokenIn.defuseAssetId === o.tokenOut.defuseAssetId && r.decimals === s.decimals && r.amount >= s.amount ? r.amount - s.amount : null;
              n.emit("withdrawal_confirmed", {
                tx_hash: t.value.intentHash,
                received_amount: s.amount.toString(),
                ...(null == l ? {} : { actual_fee: l.toString() }),
                destination_chain: o.destinationNetwork,
                transaction_id: t.value.depositAddress,
              });
            },
            emitWithdrawalFailed: ({ context: e }, t) => {
              if ("err" !== t.tag) return;
              et(e.variant, "reason" in t.value ? t.value.reason : void 0, e.isConfidential);
              let a = e.withdrawFormRef.getSnapshot().context;
              (0, f.assert)(null != a.parsedAmount, "parsedAmount is null"),
                n.emit("withdrawal_failed", {
                  token: a.tokenIn.symbol,
                  amount: a.parsedAmount.toString(),
                  to_chain: a.tokenOut.defuseAssetId,
                  error_reason: "reason" in t.value ? t.value.reason : "unknown",
                });
            },
            relayToWithdrawFormRef: (0, Y.sendTo)("withdrawFormRef", (e, t) => t),
            relayPickPaymentTokenToWithdrawFormRef: ({ context: e, event: t }) => {
              "PICK_PAYMENT_TOKEN" === t.type && e.withdrawFormRef.send({ type: "WITHDRAW_FORM.PICK_PAYMENT_TOKEN", params: t.params });
            },
            applyDefaultPaymentToken: ({ context: e, event: t }) => {
              if ("WITHDRAW_FORM_FIELDS_CHANGED" !== t.type || !t.fields.includes("tokenIn")) return;
              let n = e.depositedBalanceRef?.getSnapshot()?.context.balances;
              if (!n) return;
              let a = (0, y.pickDefaultPaymentToken)({
                destinationToken: e.withdrawFormRef.getSnapshot().context.tokenIn,
                heldTokens: e.tokenList,
                balances: n,
                tokenPrices: e.tokenPrices,
              });
              if (null == a) return;
              let i = e.withdrawFormRef?.getSnapshot()?.context.paymentToken;
              (null == i || (0, g.getDefuseAssetId)(i) !== (0, g.getDefuseAssetId)(a)) &&
                e.withdrawFormRef?.send({ type: "WITHDRAW_FORM.UPDATE_PAYMENT_TOKEN", params: { paymentToken: a } });
            },
            applyDefaultPaymentTokenIfNotCustomized: ({ context: e }) => {
              let t = e.withdrawFormRef?.getSnapshot()?.context;
              if (!t || t.paymentTokenCustomized || (null != t.paymentToken && !(0, y.isSamePaymentFamily)(t.paymentToken, t.tokenIn))) return;
              let n = e.depositedBalanceRef?.getSnapshot()?.context.balances;
              if (!n) return;
              let a = (0, y.pickDefaultPaymentToken)({ destinationToken: t.tokenIn, heldTokens: e.tokenList, balances: n, tokenPrices: e.tokenPrices });
              null == a ||
                ((null == t.paymentToken || (0, g.getDefuseAssetId)(t.paymentToken) !== (0, g.getDefuseAssetId)(a)) &&
                  e.withdrawFormRef?.send({ type: "WITHDRAW_FORM.UPDATE_PAYMENT_TOKEN", params: { paymentToken: a } }));
            },
            setExecutionQuote: (0, K.assign)({
              priceChangeDialog: (e, t) =>
                t.newOppositeAmount.amount < t.previousOppositeAmount.amount
                  ? { pendingNewOppositeAmount: t.newOppositeAmount, previousOppositeAmount: t.previousOppositeAmount }
                  : null,
            }),
            updateQuoteAmounts: (0, K.assign)({
              quoteResult: ({ context: e }, t) =>
                e.quoteResult?.tag !== "ok"
                  ? e.quoteResult
                  : {
                      ...e.quoteResult,
                      value: {
                        ...e.quoteResult.value,
                        quote: { ...e.quoteResult.value.quote, amountIn: t.newAmountIn.toString(), amountOut: t.newAmountOut.toString() },
                      },
                    },
            }),
            clearExecutionQuote: (0, K.assign)({ priceChangeDialog: null }),
            setFreshnessGateRequirement: (0, K.assign)({
              requiredFreshnessKey: ({ context: e }, t) => {
                let n = e.withdrawFormRef.getSnapshot().context,
                  a = er({ network: n.blockchain, recipient: null == n.parsedRecipient ? null : em(n.parsedRecipient) });
                return (null == a ? null : eo(a)) !== t.key ? e.requiredFreshnessKey : t.required ? t.key : null;
              },
            }),
            clearFreshnessGateRequirement: (0, K.assign)({ requiredFreshnessKey: null }),
            sendToWithdrawRefConfirm: (0, Y.sendTo)("withdrawRef", () => ({ type: "CONFIRMED" })),
            emitFreshnessWarningProceeded: ({ context: e }) => {
              if (null == e.requiredFreshnessKey) return;
              let t = e.withdrawFormRef.getSnapshot().context,
                a = er({ network: t.blockchain, recipient: null == t.parsedRecipient ? null : em(t.parsedRecipient) });
              null != a && eo(a) === e.requiredFreshnessKey && n.emit("send_freshness_warning_proceeded", es(a, !0));
            },
            emitEventIntentPublished: (0, V.emit)(() => ({ type: "INTENT_PUBLISHED" })),
            emitEventSubmissionUnknown: (0, G.enqueueActions)(({ context: e, enqueue: t }) => {
              let n = e.intentCreationResult;
              n?.tag === "err" &&
                "recovery" in n.value &&
                n.value.recovery &&
                t.emit({ type: "SUBMISSION_UNCERTAIN", recovery: n.value.recovery, checking: !1 });
            }),
            emitEventSubmissionChecking: (0, G.enqueueActions)(({ enqueue: e }, t) => {
              t && e.emit({ type: "SUBMISSION_UNCERTAIN", recovery: t, checking: !0 });
            }),
            requestQuote: ({ context: e, self: t }) => {
              let n = e.withdrawFormRef.getSnapshot().context,
                a = (0, p.balancesSelector)(e.depositedBalanceRef.getSnapshot());
              eD({
                backgroundQuoterRef: e.backgroundQuoterRef,
                formContext: n,
                userAddress: e.userAddress,
                userChainType: e.userChainType,
                isConfidential: e.isConfidential,
                tokenList: e.tokenList,
                balances: a,
                balancesLoaded: e.depositedBalanceRef.getSnapshot().context.balancesLoaded,
                amountMode: e.amountMode,
                exactInputAmount: e.exactInputAmount,
                slippageBasisPoints: e.slippageBasisPoints,
                slippageExplicitlySet: e.slippageExplicitlySet,
                tokenPrices: e.tokenPrices,
                onQuoteError: (e) => {
                  t.send({ type: "WITHDRAW_1CS_QUOTE_ERROR", params: { reason: e } });
                },
                onFallbackExactIn: () => {
                  t.send({ type: "FALLBACK_TO_EXACT_IN", params: { notice: null } });
                },
              });
            },
            pauseQuoter: ({ context: e }) => {
              e.backgroundQuoterRef?.send({ type: "PAUSE" });
            },
          },
          guards: {
            isQuotable: ({ context: e }) => {
              let t = e.withdrawFormRef.getSnapshot().context;
              return null != t.parsedAmount && t.parsedAmount.amount > 0n && eM(t) && null != e.userAddress && null != e.userChainType;
            },
            isWithdrawParamsComplete: ({ context: e }) => {
              let t = e.withdrawFormRef.getSnapshot().context;
              return (
                null != t.parsedAmount &&
                t.parsedAmount.amount > 0n &&
                eM(t) &&
                "not_confirmed" !== t.cexFundsLooseConfirmation &&
                null != e.userAddress &&
                null != e.userChainType
              );
            },
            isQuoteOk: ({ context: e }) => {
              if (e.quoteResult?.tag !== "ok") return !1;
              let { amountIn: t, amountOut: n } = e.quoteResult.value.quote,
                a = eF(t);
              return !(
                null == a ||
                null == eF(n) ||
                (e.amountMode === u.QuoteRequest.swapType.EXACT_OUTPUT &&
                  null != e.quoteInput &&
                  en(a, (0, T.computeTotalBalanceDifferentDecimals)(e.quoteInput.tokenIn, e.depositedBalanceRef.getSnapshot().context.balances)))
              );
            },
            isExecutionQuoteAffordable: ({ context: e }, t) =>
              e.amountMode !== u.QuoteRequest.swapType.EXACT_OUTPUT ||
              null == e.quoteInput ||
              !en(
                t.newAmountIn.amount,
                (0, T.computeTotalBalanceDifferentDecimals)(e.quoteInput.tokenIn, e.depositedBalanceRef.getSnapshot().context.balances),
              ),
            isFreshExactOutOverBalance: ({ context: e, event: t }) => {
              if ("NEW_WITHDRAW_1CS_QUOTE" !== t.type) return !1;
              let n = eU(e, t);
              return null != n && en(n.parsedAmountIn, n.availableBalance);
            },
            shouldFallbackFreshExactOutOverBalance: ({ context: e, event: t }) => {
              if ("NEW_WITHDRAW_1CS_QUOTE" !== t.type) return !1;
              let n = eU(e, t);
              if (null == n) return !1;
              let a = e.withdrawFormRef.getSnapshot().context;
              return (
                !!(0, y.isSamePaymentFamily)(a.paymentToken, a.tokenIn) &&
                en(n.parsedAmountIn, n.availableBalance) &&
                0 >= (0, A.compareAmounts)(t.params.quoteInput.amount, n.availableBalance)
              );
            },
            isFreshWithdrawQuote: ({ context: e, event: t }) => "NEW_WITHDRAW_1CS_QUOTE" === t.type && eW(e, t),
            freshnessGateSatisfied: ({ context: e, event: t }) =>
              null == e.requiredFreshnessKey || ("CONFIRM_WITHDRAWAL" === t.type && t.params?.freshnessConfirmationKey === e.requiredFreshnessKey),
            isIntentCreationResultError: ({ context: e }) => e.intentCreationResult?.tag === "err",
            isOk: (e, t) => "ok" === t.tag,
          },
        }).createMachine({
          id: "withdraw-ui",
          context: ({ input: e, spawn: t, self: n }) => ({
            intentCreationResult: null,
            submissionStatus: null,
            signer: e.signer,
            tokenList: e.tokenList,
            tokenPrices: e.tokenPrices ?? {},
            userAddress: null,
            userChainType: null,
            depositedBalanceRef: t("depositedBalanceActor", {
              id: "depositedBalanceRef",
              input: { parentRef: n, tokenList: e.tokenList, isConfidential: e.isConfidential ?? !1 },
            }),
            withdrawFormRef: t("withdrawFormActor", {
              id: "withdrawFormRef",
              input: {
                parentRef: n,
                tokenIn: e.tokenIn,
                paymentToken: e.paymentToken,
                amount: e.initialAmount,
                parsedAmount: e.initialParsedAmount,
                blockchain: e.initialBlockchain,
                recipient: e.initialRecipient,
              },
            }),
            backgroundQuoterRef: t("backgroundWithdraw1csQuoterActor", { id: "backgroundQuoterRef", input: { parentRef: n } }),
            submitDeps: null,
            quoteResult: null,
            quoteInput: null,
            quoteRejectionReason: null,
            slippageBasisPoints: e.slippageBasisPoints,
            slippageExplicitlySet: !1,
            amountMode: u.QuoteRequest.swapType.EXACT_OUTPUT,
            exactInputAmount: null,
            syncExactInputQuoteToAmount: !1,
            priceChangeDialog: null,
            requiredFreshnessKey: null,
            amountModeFallbackNotice: null,
            referral: e.referral,
            appFeeRecipient: e.appFeeRecipient,
            isConfidential: e.isConfidential ?? !1,
            variant: e.variant ?? "default",
            analytics: null,
          }),
          on: {
            ONE_CLICK_SETTLED: {
              actions: [
                { type: "passthroughEvent", params: ({ event: e }) => e },
                { type: "sendToDepositedBalanceRefRemoveAccount", params: ({ event: e }) => ({ depositAddress: e.data.depositAddress }) },
                "sendToDepositedBalanceRefRefresh",
              ],
            },
            LOGIN: {
              actions: [
                { type: "relayToDepositedBalanceRef", params: ({ event: e }) => e },
                { type: "setAuthenticatedUserIdentity", params: ({ event: e }) => e.params },
              ],
            },
            LOGOUT: { actions: [{ type: "relayToDepositedBalanceRef", params: ({ event: e }) => e }, { type: "clearAuthenticatedUserIdentity" }] },
          },
          states: {
            editing: {
              initial: "idle",
              on: {
                "WITHDRAW_FORM.*": { actions: [{ type: "relayToWithdrawFormRef", params: ({ event: e }) => e }] },
                BALANCE_CHANGED: [
                  {
                    target: ".quoting",
                    guard: "isQuotable",
                    actions: [
                      "applyDefaultPaymentTokenIfNotCustomized",
                      "clearQuoteResult",
                      "clearQuoteInput",
                      "clearAmountModeFallbackNotice",
                      "clearQuoteRejectionReason",
                    ],
                  },
                  {
                    target: ".idle",
                    actions: [
                      "applyDefaultPaymentTokenIfNotCustomized",
                      "clearQuoteResult",
                      "clearQuoteInput",
                      "clearAmountModeFallbackNotice",
                      "clearQuoteRejectionReason",
                    ],
                  },
                ],
                LOGIN: {
                  actions: [
                    { type: "relayToDepositedBalanceRef", params: ({ event: e }) => e },
                    { type: "setAuthenticatedUserIdentity", params: ({ event: e }) => e.params },
                    (0, X.raise)({ type: "WITHDRAW_FORM_FIELDS_CHANGED", fields: [] }),
                  ],
                },
                WITHDRAW_FORM_FIELDS_CHANGED: [
                  {
                    target: ".quoting",
                    guard: "isQuotable",
                    actions: ["applyDefaultPaymentToken", "clearQuoteResult", "clearQuoteInput", "clearAmountModeFallbackNotice", "clearQuoteRejectionReason"],
                  },
                  {
                    target: ".idle",
                    actions: ["applyDefaultPaymentToken", "clearQuoteResult", "clearQuoteInput", "clearAmountModeFallbackNotice", "clearQuoteRejectionReason"],
                  },
                ],
                SET_SLIPPAGE: [
                  {
                    target: ".quoting",
                    guard: "isQuotable",
                    actions: [
                      { type: "setSlippage", params: ({ event: e }) => e.params.slippageBasisPoints },
                      "clearQuoteResult",
                      "clearQuoteInput",
                      "clearAmountModeFallbackNotice",
                      "clearQuoteRejectionReason",
                    ],
                  },
                  {
                    target: ".idle",
                    actions: [
                      { type: "setSlippage", params: ({ event: e }) => e.params.slippageBasisPoints },
                      "clearQuoteResult",
                      "clearQuoteInput",
                      "clearAmountModeFallbackNotice",
                      "clearQuoteRejectionReason",
                    ],
                  },
                ],
                SET_TOKEN_PRICES: { actions: [{ type: "setTokenPrices", params: ({ event: e }) => e.params }, "applyDefaultPaymentTokenIfNotCustomized"] },
                SET_AMOUNT_MODE: {
                  actions: [
                    { type: "setAmountMode", params: ({ event: e }) => e.params },
                    "clearQuoteResult",
                    "clearQuoteInput",
                    "clearAmountModeFallbackNotice",
                    "clearQuoteRejectionReason",
                  ],
                },
                PICK_PAYMENT_TOKEN: [
                  {
                    target: ".quoting",
                    guard: "isQuotable",
                    actions: [
                      "setAmountModeExactOutput",
                      "relayPickPaymentTokenToWithdrawFormRef",
                      "clearQuoteResult",
                      "clearQuoteInput",
                      "clearAmountModeFallbackNotice",
                      "clearQuoteRejectionReason",
                    ],
                  },
                  {
                    target: ".idle",
                    actions: [
                      "setAmountModeExactOutput",
                      "relayPickPaymentTokenToWithdrawFormRef",
                      "clearQuoteResult",
                      "clearQuoteInput",
                      "clearAmountModeFallbackNotice",
                      "clearQuoteRejectionReason",
                    ],
                  },
                ],
                FALLBACK_TO_EXACT_IN: { target: ".quoting", reenter: !0, actions: { type: "applyExactInFallback", params: ({ event: e }) => e.params } },
                NEW_WITHDRAW_1CS_QUOTE: [
                  { target: ".quoting", ...eQ },
                  {
                    target: ".idle",
                    guard: "isFreshExactOutOverBalance",
                    actions: [
                      "clearAmountModeFallbackNotice",
                      { type: "setQuoteRejectionReason", params: { reason: "EXCEEDS_BALANCE" } },
                      { type: "setQuoteResult", params: ({ event: e }) => eP(e.params.result) },
                      { type: "setQuoteInput", params: ({ event: e }) => e.params.quoteInput },
                      "clearExactInputQuoteToAmountSync",
                    ],
                  },
                  {
                    guard: "isFreshWithdrawQuote",
                    actions: [
                      "clearAmountModeFallbackNotice",
                      "clearQuoteRejectionReason",
                      { type: "setQuoteResult", params: ({ event: e }) => eP(e.params.result) },
                      { type: "setQuoteInput", params: ({ event: e }) => e.params.quoteInput },
                      "syncExactInputQuoteAmountToForm",
                      "clearExactInputQuoteToAmountSync",
                    ],
                  },
                  { target: ".quoting", guard: "isQuotable", actions: ["clearQuoteResult", "clearQuoteInput", "clearQuoteRejectionReason"] },
                ],
                WITHDRAW_1CS_QUOTE_ERROR: {
                  actions: [
                    { type: "setQuoteResult", params: ({ event: e }) => ({ tag: "err", value: { reason: e.params.reason } }) },
                    { type: "clearQuoteInput" },
                    "clearExactInputQuoteToAmountSync",
                  ],
                },
                REQUEST_REVIEW: [
                  {
                    target: "#withdraw-ui.submitting",
                    guard: (0, z.and)(["isQuoteOk", "isWithdrawParamsComplete"]),
                    actions: [
                      "setAnalyticsJourney",
                      "emitAnalyticsJourneyStarted",
                      "clearIntentCreationResult",
                      "clearAmountModeFallbackNotice",
                      "clearQuoteRejectionReason",
                      { type: "setSubmitDeps", params: ({ event: e }) => e.params },
                      "emitWithdrawalInitiated",
                      "pauseQuoter",
                    ],
                  },
                ],
                CANCEL_REVIEW: { target: ".idle", actions: ["clearAmountModeFallbackNotice", "clearQuoteRejectionReason"] },
              },
              states: {
                idle: {},
                quoting: {
                  entry: ["clearQuoteResult", "clearQuoteInput", "requestQuote"],
                  on: {
                    NEW_WITHDRAW_1CS_QUOTE: [
                      { target: "quoting", ...eQ },
                      {
                        target: "idle",
                        guard: "isFreshExactOutOverBalance",
                        actions: [
                          "clearAmountModeFallbackNotice",
                          { type: "setQuoteRejectionReason", params: { reason: "EXCEEDS_BALANCE" } },
                          { type: "setQuoteResult", params: ({ event: e }) => eP(e.params.result) },
                          { type: "setQuoteInput", params: ({ event: e }) => e.params.quoteInput },
                          "clearExactInputQuoteToAmountSync",
                        ],
                      },
                      {
                        target: "idle",
                        guard: "isFreshWithdrawQuote",
                        actions: [
                          "clearAmountModeFallbackNotice",
                          "clearQuoteRejectionReason",
                          { type: "setQuoteResult", params: ({ event: e }) => eP(e.params.result) },
                          { type: "setQuoteInput", params: ({ event: e }) => e.params.quoteInput },
                          "syncExactInputQuoteAmountToForm",
                          "clearExactInputQuoteToAmountSync",
                        ],
                      },
                      { target: "quoting", reenter: !0, guard: "isQuotable", actions: ["clearQuoteResult", "clearQuoteInput", "clearQuoteRejectionReason"] },
                      { target: "idle" },
                    ],
                    WITHDRAW_1CS_QUOTE_ERROR: {
                      target: "idle",
                      actions: [
                        { type: "setQuoteResult", params: ({ event: e }) => ({ tag: "err", value: { reason: e.params.reason } }) },
                        { type: "clearQuoteInput" },
                        "clearExactInputQuoteToAmountSync",
                      ],
                    },
                  },
                },
                reviewing: {
                  on: {
                    CONFIRM_WITHDRAWAL: {
                      target: "#withdraw-ui.submitting",
                      guard: "isIntentCreationResultError",
                      actions: [
                        "setAnalyticsJourney",
                        "emitAnalyticsJourneyStarted",
                        "clearIntentCreationResult",
                        { type: "setSubmissionStatus", params: "submitting" },
                        "clearExecutionQuote",
                        "clearFreshnessGateRequirement",
                      ],
                    },
                  },
                },
              },
            },
            submitting: {
              invoke: {
                id: "withdrawRef",
                src: "withdraw1csActor",
                onSnapshot: {
                  actions: [
                    { type: "setSubmissionStatus", params: ({ event: e }) => ("CheckingSubmission" === e.snapshot.value ? "checking" : "submitting") },
                    {
                      type: "emitEventSubmissionChecking",
                      params: ({ event: e }) => ("CheckingSubmission" === e.snapshot.value ? (0, s.getWithdrawSubmissionRecovery)(e.snapshot.context) : null),
                    },
                  ],
                },
                input: ({ context: e, self: t }) => {
                  let n;
                  (0, f.assert)(e.submitDeps, "submitDeps is null"), (0, f.assert)(e.quoteInput, "quoteInput is null");
                  let a = e.withdrawFormRef.getSnapshot().context,
                    i = e.quoteInput,
                    o =
                      "execution_balance_limit" === e.amountModeFallbackNotice
                        ? (0, T.computeTotalBalanceDifferentDecimals)(i.tokenIn, e.depositedBalanceRef.getSnapshot().context.balances, { strict: !1 })
                        : void 0,
                    r =
                      e.quoteResult?.tag === "ok"
                        ? null == (n = eF(e.quoteResult.value.quote.amountIn))
                          ? void 0
                          : { amount: n, decimals: i.tokenIn.decimals }
                        : void 0;
                  return {
                    tokenIn: i.tokenIn,
                    tokenOut: a.tokenOut,
                    tokenOutDeployment: a.tokenOutDeployment,
                    destinationNetwork: a.blockchain,
                    swapType: e.amountMode,
                    slippageBasisPoints: i.slippageBasisPoints,
                    defuseUserId: l.authIdentity.authHandleToIntentsUserId(e.submitDeps.userAddress, e.submitDeps.userChainType),
                    deadline: new Date(Date.now() + 1e3 * c.settings.swapExpirySec).toISOString(),
                    userAddress: e.submitDeps.userAddress,
                    userChainType: e.submitDeps.userChainType,
                    signer: e.signer,
                    amountIn: o ?? i.amount,
                    recipient: i.recipient,
                    recipientType: i.recipientType,
                    displayRecipient: i.displayRecipient,
                    ...(i.destinationMemo ? { destinationMemo: i.destinationMemo } : {}),
                    ...(!Q(a.blockchain) && (0, h.isAuroraVirtualChain)(a.tokenOutDeployment.chainName) && a.parsedRecipient?.kind === "destination"
                      ? { virtualChainRecipient: a.parsedRecipient.address }
                      : {}),
                    destinationChainName: a.tokenOutDeployment.chainName,
                    ...(e.isConfidential ? { isConfidential: e.isConfidential } : {}),
                    minAmountOut:
                      e.quoteResult?.tag === "ok"
                        ? (() => {
                            let t = eF(e.quoteResult.value.quote.amountOut);
                            if (null != t) return (0, A.netDownAmount)(t, i.slippageBasisPoints);
                          })()
                        : void 0,
                    previousAmountIn: r,
                    previousOppositeAmount:
                      e.quoteResult?.tag === "ok"
                        ? { amount: BigInt(e.quoteResult.value.quote.amountOut), decimals: a.tokenOut.decimals }
                        : { amount: 0n, decimals: a.tokenOut.decimals },
                    parentRef: t,
                  };
                },
                onDone: [
                  {
                    target: "#withdraw-ui.editing.reviewing",
                    guard: { type: "isOk", params: ({ event: e }) => e.output },
                    actions: [
                      { type: "setSubmissionStatus", params: null },
                      "clearFreshnessGateRequirement",
                      "clearExecutionQuote",
                      { type: "emitWithdrawalConfirmed", params: ({ event: e }) => e.output },
                      { type: "setIntentCreationResult", params: ({ event: e }) => e.output },
                      (0, Y.sendTo)(
                        "depositedBalanceRef",
                        ({ event: e }) => (
                          (0, f.assert)("ok" === e.output.tag),
                          { type: "ADD_ACCOUNT", params: { accountId: l.authIdentity.authHandleToIntentsUserId(e.output.value.depositAddress, "near") } }
                        ),
                      ),
                      "emitEventIntentPublished",
                    ],
                  },
                  {
                    target: "#withdraw-ui.editing.reviewing",
                    actions: [
                      { type: "setSubmissionStatus", params: null },
                      "clearFreshnessGateRequirement",
                      "clearExecutionQuote",
                      { type: "emitPerpsFundingError", params: ({ event: e }) => ({ ...("err" === e.output.tag ? e.output.value : { reason: "unknown" }) }) },
                      { type: "emitWithdrawalFailed", params: ({ event: e }) => e.output },
                      { type: "setIntentCreationResult", params: ({ event: e }) => e.output },
                      "emitEventSubmissionUnknown",
                    ],
                  },
                ],
                onError: {
                  target: "#withdraw-ui.editing.reviewing",
                  actions: [
                    { type: "setSubmissionStatus", params: null },
                    { type: "emitPerpsFundingError", params: { reason: "unknown" } },
                    "clearFreshnessGateRequirement",
                    "clearExecutionQuote",
                    { type: "logError", params: ({ event: e }) => e },
                    {
                      type: "setIntentCreationResult",
                      params: ({ event: e }) => ({
                        tag: "err",
                        value: { reason: "ERR_CANNOT_PUBLISH_INTENT", error: e.error instanceof Error ? e.error : Error(String(e.error)) },
                      }),
                    },
                  ],
                },
              },
              initial: "fetchingQuote",
              on: {
                EXECUTION_QUOTE_READY: [
                  {
                    target: ".awaitingConfirmation",
                    guard: { type: "isExecutionQuoteAffordable", params: ({ event: e }) => e.params },
                    actions: [
                      {
                        type: "updateQuoteAmounts",
                        params: ({ event: e }) => ({ newAmountIn: e.params.newAmountIn.amount, newAmountOut: e.params.newOppositeAmount.amount }),
                      },
                      {
                        type: "setExecutionQuote",
                        params: ({ event: e }) => ({ newOppositeAmount: e.params.newOppositeAmount, previousOppositeAmount: e.params.previousOppositeAmount }),
                      },
                    ],
                  },
                  {
                    target: "#withdraw-ui.submitting",
                    reenter: !0,
                    actions: [{ type: "applyExactInFallback", params: { notice: "execution_balance_limit" } }, "clearExecutionQuote"],
                  },
                ],
              },
              states: {
                fetchingQuote: {
                  on: {
                    FRESH_DESTINATION_GATE_CHANGED: { actions: { type: "setFreshnessGateRequirement", params: ({ event: e }) => e.params } },
                    CANCEL_REVIEW: {
                      target: "#withdraw-ui.editing.idle",
                      actions: ["clearFreshnessGateRequirement", "clearExecutionQuote", "clearAmountModeFallbackNotice", "clearQuoteRejectionReason"],
                    },
                  },
                },
                awaitingConfirmation: {
                  on: {
                    CONFIRM_WITHDRAWAL: {
                      guard: "freshnessGateSatisfied",
                      target: "processing",
                      actions: ["emitFreshnessWarningProceeded", "clearFreshnessGateRequirement", "clearExecutionQuote", "sendToWithdrawRefConfirm"],
                    },
                    FRESH_DESTINATION_GATE_CHANGED: { actions: { type: "setFreshnessGateRequirement", params: ({ event: e }) => e.params } },
                    CANCEL_REVIEW: {
                      target: "#withdraw-ui.editing.idle",
                      actions: ["clearFreshnessGateRequirement", "clearExecutionQuote", "clearAmountModeFallbackNotice", "clearQuoteRejectionReason"],
                    },
                  },
                },
                processing: {},
              },
            },
          },
          initial: "editing",
        }));
    e.s(["toWithdrawAnalyticsEvent", 0, eB, "withdrawUIMachine", 0, eq], 245132);
  },
  959169,
  (e) => {
    "use strict";
    var t = e.i(789477);
    e.i(549498);
    var n = e.i(912665),
      a = e.i(150788),
      i = e.i(117110),
      o = e.i(856531),
      r = e.i(895756),
      s = e.i(723980),
      l = e.i(769787),
      u = e.i(581797),
      c = e.i(564264),
      d = e.i(317824),
      p = e.i(239727);
    e.i(113432);
    var m = e.i(602661),
      f = e.i(245132),
      h = e.i(747648),
      k = e.i(385989),
      y = e.i(651235),
      g = e.i(653755),
      A = e.i(186448),
      T = e.i(467201);
    function E(e) {
      return `withdraw-attempt-${JSON.stringify([e.depositAddress, e.depositMemo ?? null])}`;
    }
    function R(e) {
      return "confirmed" === e.kind;
    }
    function I(e, t) {
      return (0, o.sameDepositIdentity)(R(e) ? e : e.params, t);
    }
    let w = (0, A.setup)({
      types: { context: {}, events: {}, emitted: {} },
      actors: { oneClickStatusActor: h.oneClickStatusMachine },
      actions: {
        spawnWithdrawActor: (0, k.assign)({
          attempts: ({ context: e, event: t, spawn: n, self: a }) => {
            let { params: i } = t;
            if ("withdraw" !== i.intentDescription.type) return e.attempts;
            let o = i.intentHash;
            if (e.attempts.some((e) => R(e) && I(e, i))) return e.attempts;
            let r = e.attempts.findIndex((e) => !R(e) && I(e, i)),
              s = e.attempts[r],
              l = i.intentDescription,
              u = n("oneClickStatusActor", {
                id: `oneclick-${o}`,
                input: {
                  parentRef: a,
                  intentHash: i.intentHash,
                  depositAddress: i.depositAddress,
                  depositMemo: i.depositMemo ?? null,
                  tokenIn: i.tokenIn,
                  tokenOut: i.tokenOut,
                  totalAmountIn: l.totalAmountIn,
                  totalAmountOut: l.totalAmountOut,
                  isConfidential: i.isConfidential,
                },
              }),
              c = {
                kind: "confirmed",
                id: o,
                intentHash: i.intentHash,
                depositAddress: i.depositAddress,
                depositMemo: i.depositMemo ?? null,
                tokenIn: i.tokenIn,
                tokenOut: i.tokenOut,
                paymentToken: i.paymentToken,
                amountIn: l.totalAmountIn,
                amountOut: l.totalAmountOut,
                recipient: l.recipient,
                displayOverrides: i.displayOverrides,
                destinationNetwork: l.destinationNetwork,
                recipientContactName: i.recipientContactName,
                createdAt: s?.kind === "unknown" ? s.createdAt : new Date(),
                completedAt: null,
                lastTerminalStatus: null,
                seenOnWithdrawPage: !0 === i.recovered,
                isConfidential: !0 === i.isConfidential,
                analytics: i.analytics,
                actorRef: u,
              };
            if (-1 !== r) {
              let t = e.attempts.filter((e, t) => t !== r);
              return i.recovered ? [...t, c] : [c, ...t];
            }
            return i.recovered ? [...e.attempts, c] : [c, ...e.attempts];
          },
        }),
        registerUnknownWithdraw: (0, k.assign)({
          attempts: ({ context: e, event: t }) => {
            if ("REGISTER_UNKNOWN_WITHDRAW" !== t.type) return e.attempts;
            let { params: n, automaticCheck: a } = t;
            return e.attempts.some((e) => R(e) && I(e, n))
              ? e.attempts
              : e.attempts.some((e) => !R(e) && I(e, n))
                ? e.attempts.map((e) => (!R(e) && I(e, n) ? { ...e, statusCheck: a ? "automatic" : "idle" } : e))
                : [...e.attempts, { kind: "unknown", id: E(n), params: n, statusCheck: a ? "automatic" : "idle", error: null, createdAt: new Date() }];
          },
        }),
        stopUnknownAutomaticCheck: (0, k.assign)({
          attempts: ({ context: e, event: t }) =>
            "STOP_UNKNOWN_AUTOMATIC_CHECK" === t.type
              ? e.attempts.map((e) => ("unknown" === e.kind && e.id === t.id && "automatic" === e.statusCheck ? { ...e, statusCheck: "idle" } : e))
              : e.attempts,
        }),
        checkUnknownWithdraw: (0, k.assign)({
          attempts: ({ context: e, event: t }) =>
            "CHECK_UNKNOWN_WITHDRAW" === t.type
              ? e.attempts.map((e) => ("unknown" === e.kind && e.id === t.id && "idle" === e.statusCheck ? { ...e, statusCheck: "manual", error: null } : e))
              : e.attempts,
        }),
        finishUnknownWithdrawCheck: (0, k.assign)({
          attempts: ({ context: e, event: t }) =>
            "FINISH_UNKNOWN_WITHDRAW_CHECK" === t.type
              ? e.attempts.map((e) => ("unknown" === e.kind && e.id === t.id && "manual" === e.statusCheck ? { ...e, statusCheck: "idle", error: t.error } : e))
              : e.attempts,
        }),
        dismissWithdrawActor: (0, g.enqueueActions)(({ enqueue: e, event: t }) => {
          let { id: n } = t;
          e((0, T.stopChild)(`oneclick-${n}`)), e((0, k.assign)({ attempts: ({ context: e }) => e.attempts.filter((e) => !R(e) || e.id !== n) }));
        }),
        resetWithdrawActors: (0, g.enqueueActions)(({ context: e, enqueue: t }) => {
          for (let n of e.attempts) R(n) && t((0, T.stopChild)(`oneclick-${n.id}`));
          t((0, k.assign)({ attempts: [] }));
        }),
        markWithdrawSeen: (0, k.assign)({
          attempts: ({ context: e, event: t }) => {
            let { id: n } = t;
            return e.attempts.map((e) => (R(e) && e.id === n ? { ...e, seenOnWithdrawPage: !0 } : e));
          },
        }),
        setCompletedAt: (0, k.assign)({
          attempts: ({ context: e, event: t }) => {
            if ("ONE_CLICK_SETTLED" !== t.type) return e.attempts;
            let n = new Date();
            return e.attempts.map((e) => (R(e) && I(e, t.data) ? { ...e, completedAt: e.completedAt ?? n, lastTerminalStatus: t.data.status } : e));
          },
        }),
        passthroughEvent: (0, y.emit)((e, t) => t),
      },
      guards: {
        isPendingTrackedEvent: ({ context: e, event: t }) =>
          "ONE_CLICK_SETTLED" === t.type && e.attempts.some((e) => R(e) && I(e, t.data) && e.lastTerminalStatus !== t.data.status),
      },
    }).createMachine({
      id: "withdrawTracker",
      context: { attempts: [] },
      on: {
        REGISTER_WITHDRAW: { actions: "spawnWithdrawActor" },
        REGISTER_UNKNOWN_WITHDRAW: { actions: "registerUnknownWithdraw" },
        STOP_UNKNOWN_AUTOMATIC_CHECK: { actions: "stopUnknownAutomaticCheck" },
        CHECK_UNKNOWN_WITHDRAW: { actions: "checkUnknownWithdraw" },
        FINISH_UNKNOWN_WITHDRAW_CHECK: { actions: "finishUnknownWithdrawCheck" },
        DISMISS_WITHDRAW: { actions: "dismissWithdrawActor" },
        MARK_WITHDRAW_SEEN: { actions: "markWithdrawSeen" },
        RESET: { actions: "resetWithdrawActors" },
        ONE_CLICK_SETTLED: { guard: "isPendingTrackedEvent", actions: ["setCompletedAt", { type: "passthroughEvent", params: ({ event: e }) => e }] },
      },
    });
    var b = e.i(382075),
      C = e.i(696150),
      v = e.i(271220),
      x = e.i(193877);
    let N = (0, m.createWithdrawApi)({ fetchImpl: (e, t) => fetch(e, { ...t, signal: AbortSignal.timeout(15e3) }) }),
      S = (0, C.createContext)(void 0);
    function O(e) {
      return R(e) ? E(e) : e.id;
    }
    function _({ id: e, actorRef: n, onCheck: a }) {
      let i = (0, b.useSelector)(n, (t) => t.context.attempts.find((t) => O(t) === e));
      return i
        ? R(i)
          ? (0, t.jsx)(u.WithdrawStatus, { variant: "dock", withdraw: i })
          : (0, t.jsx)(l.UnknownWithdrawStatus, {
              recipient: i.params.intentDescription.recipient,
              statusCheck: i.statusCheck,
              error: i.error,
              onCheck: () => a(e),
            })
        : null;
    }
    e.s(
      [
        "WithdrawTrackerMachineProvider",
        0,
        function ({ children: e }) {
          let [l] = (0, C.useState)(() => (0, v.createActor)(w).start()),
            { addDockItem: m, removeDockItem: h, settleDockItem: k, updateDockItem: y } = (0, x.useActivityDock)(),
            g = (0, b.useSelector)(l, (e) => e.context.attempts),
            A = (0, C.useMemo)(() => g.filter(R), [g]);
          (0, C.useEffect)(() => {
            let e = l.on("ONE_CLICK_SETTLED", (e) => {
              let t = l.getSnapshot().context.attempts.find((t) => R(t) && (0, o.sameDepositIdentity)(t, e.data));
              if (!t || !R(t)) return;
              k(O(t)), (0, r.invalidateAllBalanceQueries)();
              let n = (0, p.perpsSettlementFailure)(e.data.status);
              null != n &&
                t.analytics?.journey.flow === "perps_fund" &&
                c.journeyAnalytics.failed({ ...t.analytics.facts, journey: t.analytics.journey, surface: "perps", ...n }),
                "SUCCESS" === e.data.status &&
                  null != t.analytics &&
                  c.journeyAnalytics.completed({ ...(0, f.toWithdrawAnalyticsEvent)(t.analytics), operation: { namespace: "intent", key: t.intentHash } });
            });
            return () => e.unsubscribe();
          }, [l, k]);
          let T = (0, C.useCallback)(
              (e) => {
                if ("withdraw" !== e.intentDescription.type) return;
                let n = e.intentHash,
                  o = E(e),
                  r = l.getSnapshot().context.attempts.find((e) => O(e) === o);
                l.send({ type: "REGISTER_WITHDRAW", params: e });
                let c = l.getSnapshot().context.attempts.find((e) => R(e) && e.id === n);
                if (!c || !R(c)) return;
                let p = e.intentDescription,
                  f = (0, s.formatTokenValue)(p.totalAmountOut.amount, p.totalAmountOut.decimals, { min: 1e-4, fractionDigits: 4 }),
                  h = {
                    title: `Withdraw ${f} ${(0, d.getEarnVaultDisplayName)(e.tokenOut)}`,
                    icons: [(0, t.jsx)(a.default, { sizeClassName: "size-7", ...e.tokenOut, chainName: p.tokenOutDeployment.chainName }, "token")],
                    explorerUrl: e.depositAddress ? (0, i.buildIntentsExplorerTxUrl)(e.depositAddress, { isConfidential: e.isConfidential }) : void 0,
                    keyValueRows: [],
                  };
                m({ id: o, ...h, renderContent: () => (0, t.jsx)(u.WithdrawStatus, { variant: "dock", withdraw: c }) }),
                  r?.kind === "unknown" && y(o, { ...h, isProcessing: void 0, preserveOnClear: !1 });
              },
              [l, m, y],
            ),
            I = (0, C.useCallback)(
              async (e) => {
                let t = l.getSnapshot().context.attempts.find((t) => "unknown" === t.kind && t.id === e);
                if (!t || "unknown" !== t.kind || "idle" !== t.statusCheck) return;
                let { params: a } = t;
                l.send({ type: "CHECK_UNKNOWN_WITHDRAW", id: e }), y(e, { isProcessing: !0 });
                let i = null;
                try {
                  let t = await N.getStatus({ depositAddress: a.depositAddress, ...(a.depositMemo ? { depositMemo: a.depositMemo } : {}) }),
                    o = l.getSnapshot().context.attempts.find((t) => "unknown" === t.kind && t.id === e);
                  if (o?.kind !== "unknown" || o.params !== a) return;
                  if ("err" in t) throw Error(t.err);
                  if (t.ok.intentHash) return void T({ ...a, intentHash: t.ok.intentHash, recovered: !0 });
                  n.WITHDRAW_TERMINAL_STATUSES.has(t.ok.status.toUpperCase()) && (0, r.invalidateAllBalanceQueries)(),
                    (i = "The outcome is still unknown. Check again later before sending the same payment.");
                } catch {
                  i = "Status unavailable. Please try checking again later.";
                } finally {
                  let t = l.getSnapshot().context.attempts.find((t) => "unknown" === t.kind && t.id === e);
                  t?.kind === "unknown" && t.params === a && (l.send({ type: "FINISH_UNKNOWN_WITHDRAW_CHECK", id: e, error: i }), y(e, { isProcessing: !1 }));
                }
              },
              [l, T, y],
            ),
            D = (0, C.useCallback)(
              (e, n) => {
                let o = E(e);
                l.send({ type: "REGISTER_UNKNOWN_WITHDRAW", params: e, automaticCheck: n });
                let r = l.getSnapshot().context.attempts.find((e) => "unknown" === e.kind && e.id === o);
                if (!r || "unknown" !== r.kind) return null;
                let u = r.params,
                  c = u.intentDescription,
                  d = (0, s.formatTokenValue)(c.totalAmountOut.amount, c.totalAmountOut.decimals, { min: 1e-4, fractionDigits: 4 });
                return (
                  m({
                    id: o,
                    title: `Withdraw ${d} ${u.tokenOut.symbol}`,
                    icons: [(0, t.jsx)(a.default, { sizeClassName: "size-7", ...u.tokenOut, chainName: c.tokenOutDeployment.chainName }, "token")],
                    explorerUrl: (0, i.buildIntentsExplorerTxUrl)(u.depositAddress, { isConfidential: u.isConfidential }),
                    keyValueRows: [],
                    renderContent: () => (0, t.jsx)(_, { id: o, actorRef: l, onCheck: (e) => void I(e) }),
                    preserveOnClear: !0,
                    isProcessing: "idle" !== r.statusCheck,
                  }),
                  y(o, { isProcessing: "idle" !== r.statusCheck }),
                  o
                );
              },
              [l, m, I, y],
            ),
            F = (0, C.useCallback)(
              (e) => {
                let t = l.getSnapshot().context.attempts.find((t) => "unknown" === t.kind && t.id === e);
                t?.kind === "unknown" && "automatic" === t.statusCheck && (l.send({ type: "STOP_UNKNOWN_AUTOMATIC_CHECK", id: e }), y(e, { isProcessing: !1 }));
              },
              [l, y],
            ),
            B = (0, C.useCallback)(
              (e) => {
                let t = l.getSnapshot().context.attempts.find((t) => R(t) && t.id === e);
                l.send({ type: "DISMISS_WITHDRAW", id: e }), t && R(t) && h(O(t));
              },
              [l, h],
            ),
            P = (0, C.useCallback)(() => {
              for (let e of l.getSnapshot().context.attempts) h(O(e));
              l.send({ type: "RESET" });
            }, [l, h]),
            W = (0, C.useCallback)(
              (e) => {
                l.send({ type: "MARK_WITHDRAW_SEEN", id: e });
              },
              [l],
            ),
            M = (0, C.useCallback)((e) => A.some((t) => t.id === e), [A]),
            U = (0, C.useMemo)(
              () => ({
                trackedWithdraws: A,
                registerWithdraw: T,
                registerUnknownWithdraw: D,
                stopUnknownAutomaticCheck: F,
                dismissWithdraw: B,
                resetTrackedWithdraws: P,
                markWithdrawSeen: W,
                hasActiveWithdraw: M,
              }),
              [A, T, D, F, B, P, W, M],
            );
          return (0, t.jsx)(S.Provider, { value: U, children: e });
        },
        "useWithdrawTrackerMachine",
        0,
        function () {
          let e = (0, C.useContext)(S);
          if (!e) throw Error("useWithdrawTrackerMachine must be used within a WithdrawTrackerMachineProvider");
          return e;
        },
      ],
      959169,
    );
  },
]);

//# debugId=f9f23437-cc6b-0808-9dcb-1b8ddc495810
//# sourceMappingURL=16hm.td0jqdy4.js.map
