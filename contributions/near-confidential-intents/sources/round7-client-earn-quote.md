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
    n && ((e._debugIds || (e._debugIds = {}))[n] = "0fccf545-9fb7-09c7-93a1-87c84be2c9a7");
  } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  654409,
  791530,
  32796,
  984705,
  6661,
  32491,
  144045,
  641395,
  (e) => {
    "use strict";
    var t = e.i(789477),
      n = e.i(557518),
      r = e.i(494438),
      s = e.i(517494),
      o = e.i(18578),
      a = e.i(593562),
      i = e.i(482810),
      u = e.i(718183),
      l = e.i(382075),
      d = e.i(696150),
      p = e.i(268514),
      c = e.i(385989),
      m = e.i(157946),
      g = e.i(186448);
    class E extends Error {
      reason;
      name;
      constructor(e, t) {
        super(t), (this.reason = e), (this.name = "SwapValidationError");
      }
    }
    let I = "The minimum is $20.";
    function f({ isRwaInput: e, isRwaOutput: t, amountInUsd: n, amountOutUsd: r, failOnMissing: s = !1 }) {
      let o = [];
      return (
        e && o.push(n),
        t && o.push(r),
        o.some((e) => {
          if (null == e || ("string" == typeof e && "" === e.trim())) return s;
          let t = "number" == typeof e ? e : Number(e);
          return Number.isFinite(t) ? t < 20 : s;
        })
      );
    }
    e.s(["RWA_MIN_SWAP_ERROR", 0, I, "RWA_MIN_SWAP_VALUE_USD", 0, 20, "isRwaSwapBelowMinimum", 0, f], 791530);
    let R = "CONFIDENTIAL_INTENTS";
    class y extends Error {
      reason;
      originalError;
      name;
      constructor(e, t = null) {
        super(t instanceof Error ? t.message : null == t ? e : String(t), { cause: t }),
          (this.reason = e),
          (this.originalError = t),
          (this.name = "SwapSignerError");
      }
    }
    var _ = e.i(66189);
    let T = e.i(406887).AUTH_METHOD_TO_WITHDRAW_STANDARD,
      A = ["EXACT_INPUT", "EXACT_OUTPUT"],
      C = ["virtualChainRecipient", "virtualChainRefundRecipient", "customRecipientMsg", "destinationMemo"],
      N = ["depositMemo", "virtualChainRecipient", "virtualChainRefundRecipient", "customRecipientMsg"],
      k = /^(?:[A-Za-z0-9+/]{42}[AEIMQUYcgkosw048]=|[A-Za-z0-9_-]{42}[AEIMQUYcgkosw048])$/,
      h = /^imt:[a-f0-9]{64}:/;
    function S(e) {
      throw new E("ERR_QUOTE_MISMATCH", e);
    }
    function w(e) {
      throw new E("ERR_INTENT_MISMATCH", e);
    }
    function O(e) {
      return "string" == typeof e && /^[1-9]\d*$/.test(e) ? BigInt(e) : null;
    }
    function P(e) {
      if ("string" != typeof e || 0 === e.length) return null;
      let t = Date.parse(e);
      return Number.isFinite(t) ? t : null;
    }
    function q(e) {
      "string" != typeof e && w("Intent payload is not a JSON string");
      try {
        return JSON.parse(e);
      } catch {
        return w("Intent payload is not valid JSON");
      }
    }
    let b = ["deadline", "intents", "nonce", "signer_id", "verifying_contract"],
      U = ["deadline", "intents", "signer_id"];
    function Q(e) {
      if ("string" != typeof e) return e;
      let t = e.replace(/-/g, "+").replace(/_/g, "/");
      return t.padEnd(4 * Math.ceil(t.length / 4), "=");
    }
    let v = { warn: () => void 0, error: () => void 0 };
    function D(e) {
      return e instanceof Error ? e : Error(String(e));
    }
    function F(e, t) {
      return e instanceof E ? { reason: e.reason, error: e } : { reason: t, error: D(e) };
    }
    function V(e) {
      let t = (e) => "bigint" == typeof e && e > 0n,
        n = (e) => "number" == typeof e && Number.isInteger(e) && e >= 0 && e <= 255;
      if ("EXACT_INPUT" !== e.swapType && "EXACT_OUTPUT" !== e.swapType) return "Unsupported swap mode";
      if (!t(e.amount)) return "Amount must be a positive bigint";
      if (!e.tokenIn?.defuseAssetId || !e.tokenOut?.defuseAssetId || !n(e.tokenIn.decimals) || !n(e.tokenOut.decimals)) return "Assets are invalid";
      if (!Number.isInteger(e.slippageTolerance) || e.slippageTolerance < 0 || e.slippageTolerance > 1e4)
        return "Slippage tolerance must be an integer between 0 and 10000 basis points";
      let r = Date.parse(e.deadline);
      if (!Number.isFinite(r) || r <= Date.now()) return "Deadline must be in the future";
      if (!e.userAddress || !e.signerId || !(e.authMethod in T)) return "Account is invalid";
      if ("string" != typeof e.idempotencyKey || !/^[\w-]{16,128}$/.test(e.idempotencyKey)) return "Idempotency key must be 16-128 URL-safe characters";
      if (null != e.balance && ("bigint" != typeof e.balance || e.balance < 0n)) return "Balance is invalid";
      if ((e.limits?.minAmountOut != null && !t(e.limits.minAmountOut)) || (e.limits?.maxAmountIn != null && !t(e.limits.maxAmountIn)))
        return "Limits must be positive bigints";
      let s = e.previousOppositeAmount;
      return null != s && ("bigint" != typeof s.amount || s.amount < 0n) ? "Previous amount is invalid" : null;
    }
    function M(e) {
      let t = e.telemetry ?? v,
        n = e.isPriceChangeMaterial ?? (() => !0);
      return (0, g.setup)({
        types: { context: {}, input: {}, output: {}, events: {} },
        actions: {
          fail: (0, c.assign)({ failure: (e, t) => t }),
          logFailure: ({ context: e }) => {
            null != e.failure &&
              "ERR_PRICE_CHANGE_CANCELLED" !== e.failure.reason &&
              t.error(e.failure.error ?? Error(e.failure.reason), { reason: e.failure.reason });
          },
          notifyQuote: ({ context: e }) => {
            null != e.quoteResult && e.input.observer?.onQuote?.(e.quoteResult);
          },
          requestPriceChangeConfirmation: ({ context: e }) => {
            null != e.priceChangeRequest && e.input.observer?.onPriceChangeConfirmationRequest?.(e.priceChangeRequest);
          },
        },
        actors: {
          fetchQuote: (0, m.fromPromise)(async ({ input: t, signal: n }) => {
            let r = await t.api.getQuote(
              {
                dry: !1,
                swapType: t.swapType,
                originAsset: t.tokenIn.defuseAssetId,
                destinationAsset: t.tokenOut.defuseAssetId,
                amount: t.amount.toString(),
                slippageTolerance: t.slippageTolerance,
                deadline: t.deadline,
                userAddress: t.userAddress,
                authMethod: t.authMethod,
                ...(null != t.quotePurpose ? { purpose: t.quotePurpose } : {}),
                idempotencyKey: t.idempotencyKey,
              },
              { signal: n },
            );
            return e.verifyQuote(r);
          }),
          generateIntent: (0, m.fromPromise)(async ({ input: e, signal: t }) => {
            let { appFee: n, ...r } = e.accepted.response,
              s = await e.api.generateIntent(
                { depositAddress: e.accepted.depositAddress, signerId: e.signerId, standard: T[e.authMethod], quote: r },
                { signal: t },
              );
            if ("err" in s) throw Error(s.err);
            return s.ok;
          }),
          signIntent: (0, m.fromPromise)(async ({ input: e, signal: t }) => {
            let n = () => {
              if (t.aborted) throw new y("ERR_CANCELLED", t.reason);
              if (Date.now() >= e.accepted.deadlineMs) throw new E("ERR_QUOTE_EXPIRED", "Quote expired before signing");
            };
            n();
            let r = await e.signer.signIntent({
              intent: e.generated.intent,
              userAddress: e.userAddress,
              authMethod: e.authMethod,
              signerId: e.signerId,
              quote: e.accepted.response,
              summary: e.summary,
              signal: t,
              assertStillValid: n,
            });
            return (
              !(function (e, t) {
                let n;
                switch (((!(0, _.isRecord)(t) || t.standard !== e.standard) && w("Signed intent standard differs from the generated intent"), t.standard)) {
                  case "nep413": {
                    let r = e.payload;
                    n =
                      (0, _.isRecord)(r) &&
                      t.payload.message === r.message &&
                      t.payload.recipient === r.recipient &&
                      Q(t.payload.nonce) === Q(r.nonce) &&
                      null == t.payload.callbackUrl;
                    break;
                  }
                  case "ton_connect": {
                    let r = e.payload;
                    n = (0, _.isRecord)(r) && "text" === t.payload.type && t.payload.text === r.text;
                    break;
                  }
                  default:
                    n = t.payload === e.payload;
                }
                n || w("Signed payload differs from the validated intent");
              })(e.generated.intent, r),
              r
            );
          }),
          submitIntent: (0, m.fromPromise)(async ({ input: e, signal: t }) => {
            let n;
            if (Date.now() >= e.deadlineMs) throw new E("ERR_QUOTE_EXPIRED", "Quote expired before submission");
            try {
              n = await e.api.submitIntent({ depositAddress: e.depositAddress, signedIntent: e.signedIntent }, { signal: t });
            } catch (e) {
              return { tag: "uncertain", error: D(e) };
            }
            return "ok" in n
              ? n.ok.intentHash
                ? { tag: "ok", ...n.ok }
                : { tag: "uncertain", error: Error("Submission returned no intent hash") }
              : "rejected" === n.kind
                ? { tag: "rejected", reason: n.err }
                : { tag: "uncertain", error: Error(n.err) };
          }),
        },
        guards: {
          hasFailure: ({ context: e }) => null != e.failure,
          needsConfirmation: ({ context: e }) => null != e.priceChangeRequest,
          confirmsPendingQuote: ({ context: e, event: t }) =>
            "PRICE_CHANGE_CONFIRMED" === t.type && null != e.priceChangeRequest && t.quoteSignature === e.priceChangeRequest.quoteSignature,
        },
        delays: { quoteExpiry: ({ context: e }) => Math.max(0, (e.accepted?.deadlineMs ?? 0) - Date.now()) },
      }).createMachine({
        id: "confidential-swap",
        context: ({ input: e }) => ({
          input: e,
          quoteResult: null,
          accepted: null,
          priceChangeRequest: null,
          generated: null,
          summary: null,
          signedIntent: null,
          submission: null,
          failure: null,
        }),
        initial: "ValidatingInput",
        output: ({ context: e }) => {
          let t = e.accepted;
          return null != e.submission && null != t && null != e.generated && null != e.signedIntent
            ? {
                tag: "ok",
                value: {
                  intentHash: e.submission.intentHash,
                  depositAddress: t.depositAddress,
                  quote: t.response,
                  amountIn: t.amountIn,
                  amountOut: t.amountOut,
                  minAmountOut: t.minAmountOut,
                  signedIntent: e.signedIntent,
                  quoteCorrelationId: t.response.correlationId,
                  intentCorrelationId: e.generated.correlationId,
                  submitCorrelationId: e.submission.correlationId,
                },
              }
            : {
                tag: "err",
                value: {
                  ...(e.failure ?? { reason: "ERR_INVALID_INPUT", error: null }),
                  ...(null != t ? { depositAddress: t.depositAddress, quoteCorrelationId: t.response.correlationId } : {}),
                  ...(null != e.generated ? { intentCorrelationId: e.generated.correlationId } : {}),
                },
              };
        },
        states: {
          ValidatingInput: {
            always: [
              {
                target: "Error",
                guard: ({ context: e }) => null != V(e.input),
                actions: { type: "fail", params: ({ context: e }) => ({ reason: "ERR_INVALID_INPUT", error: Error(V(e.input) ?? "Invalid input") }) },
              },
              { target: "Fetching1csQuote" },
            ],
          },
          Fetching1csQuote: {
            invoke: {
              src: "fetchQuote",
              input: ({ context: e }) => e.input,
              onDone: { target: "ValidatingQuote", actions: [(0, c.assign)({ quoteResult: ({ event: e }) => e.output }), "notifyQuote"] },
              onError: { target: "Error", actions: { type: "fail", params: ({ event: e }) => ({ reason: "ERR_1CS_QUOTE_FAILED", error: D(e.error) }) } },
            },
          },
          ValidatingQuote: {
            entry: (0, c.assign)(({ context: e }) => {
              let t,
                { input: r, quoteResult: s } = e;
              if (null == s || "err" in s) {
                let e = s?.err ?? "No quote result";
                return { failure: { reason: "ERR_QUOTE_SIGNATURE_INVALID" === e ? "ERR_QUOTE_SIGNATURE_INVALID" : "ERR_1CS_QUOTE_FAILED", error: Error(e) } };
              }
              try {
                t = (function (e, t, n = Date.now()) {
                  let r = (function (e, t, n = Date.now()) {
                      let { quoteRequest: r, quote: s } = e;
                      for (let e of (((0, _.isRecord)(r) && (0, _.isRecord)(s)) || S("Quote response is malformed"),
                      !1 !== r.dry && S("A dry quote is not executable"),
                      A.includes(r.swapType) || S("Unsupported swap mode"),
                      (r.depositType !== R || r.recipientType !== R || r.refundType !== R) && S("Quote is not confidentially routed"),
                      (r.recipient !== t || r.refundTo !== t) && S("Quote recipient or refund account differs from the signer"),
                      C))
                        null != r[e] && "" !== r[e] && S(`Unexpected quote ${e}`);
                      for (let e of N) null != s[e] && "" !== s[e] && S(`Unexpected quote ${e}`);
                      if ("string" != typeof s.depositAddress || "" === s.depositAddress.trim())
                        throw new E("ERR_NO_DEPOSIT_ADDRESS", "Quote succeeded but no deposit address was provided");
                      let o = O(s.amountIn),
                        a = O(s.amountOut),
                        i = O(s.minAmountOut);
                      (null == o || null == a || null == i) && S("Quote amounts must be positive integers"),
                        i > a && S("Quote minimum output exceeds its output");
                      let u = P(r.deadline),
                        l = P(s.deadline);
                      (null == u || null == l) && S("Quote deadline is missing or invalid");
                      let d = Math.min(u, l);
                      if (d <= n) throw new E("ERR_QUOTE_EXPIRED", "Quote expired before signing");
                      return { depositAddress: s.depositAddress, amountIn: o, amountOut: a, minAmountOut: i, deadlineMs: d, depositDeadlineMs: l };
                    })(e, t.signerId, n),
                    s = e.quoteRequest;
                  (s.swapType !== t.swapType ||
                    s.originAsset !== t.originAsset ||
                    s.destinationAsset !== t.destinationAsset ||
                    s.amount !== t.amount.toString() ||
                    s.slippageTolerance !== t.slippageTolerance) &&
                    S("Quote does not match the requested swap");
                  let o = P(t.deadline),
                    a = P(s.deadline);
                  return (
                    (null == o || null == a || a > o) && S("Quote deadline exceeds the requested deadline"),
                    "EXACT_INPUT" === t.swapType
                      ? r.amountIn !== t.amount && S("Quoted input differs from the request")
                      : r.amountOut < t.amount && S("Quoted output is below the requested exact output"),
                    r
                  );
                })(s.ok, {
                  swapType: r.swapType,
                  originAsset: r.tokenIn.defuseAssetId,
                  destinationAsset: r.tokenOut.defuseAssetId,
                  amount: r.amount,
                  slippageTolerance: r.slippageTolerance,
                  deadline: r.deadline,
                  signerId: r.signerId,
                });
              } catch (e) {
                return { failure: F(e, "ERR_QUOTE_MISMATCH") };
              }
              let o = { ...t, response: s.ok },
                a = (e, t) => ({ accepted: o, failure: { reason: e, error: Error(t) } });
              if (
                f({
                  isRwaInput: !0 === r.isRwaInput,
                  isRwaOutput: !0 === r.isRwaOutput,
                  amountInUsd: s.ok.quote.amountInUsd,
                  amountOutUsd: s.ok.quote.amountOutUsd,
                  failOnMissing: !0,
                })
              )
                return a("ERR_RWA_MINIMUM_NOT_MET", I);
              if (null != r.balance && o.amountIn > r.balance)
                return a("ERR_AMOUNT_IN_BALANCE_INSUFFICIENT_AFTER_NEW_1CS_QUOTE", "Quoted spend exceeds the available balance");
              if (
                (r.limits?.minAmountOut != null && o.minAmountOut < r.limits.minAmountOut) ||
                (r.limits?.maxAmountIn != null && o.amountIn > r.limits.maxAmountIn)
              )
                return a("ERR_QUOTE_WORSE_THAN_REVIEWED", "Quote is outside the reviewed bounds");
              let i = r.previousOppositeAmount,
                u = "EXACT_INPUT" === r.swapType,
                l = u ? { amount: o.amountOut, decimals: r.tokenOut.decimals } : { amount: o.amountIn, decimals: r.tokenIn.decimals };
              return {
                accepted: o,
                priceChangeRequest:
                  null != i && (u ? l.amount < i.amount && n({ previous: i, next: l }) : l.amount > i.amount) && null != i
                    ? {
                        quoteSignature: s.ok.signature,
                        previousOppositeAmount: i,
                        newOppositeAmount: l,
                        bound: u ? { amount: o.minAmountOut, decimals: r.tokenOut.decimals } : { amount: o.amountIn, decimals: r.tokenIn.decimals },
                      }
                    : null,
              };
            }),
            always: [
              { target: "Error", guard: "hasFailure" },
              {
                target: "AwaitingPriceChangeConfirmation",
                guard: ({ context: e }) => null != e.priceChangeRequest && "await-confirmation" === e.input.priceChange,
              },
              {
                target: "Error",
                guard: "needsConfirmation",
                actions: { type: "fail", params: { reason: "ERR_PRICE_CHANGE_NOT_CONFIRMED", error: Error("Quote changed and no confirmation is available") } },
              },
              { target: "GeneratingIntent" },
            ],
          },
          AwaitingPriceChangeConfirmation: {
            entry: "requestPriceChangeConfirmation",
            on: {
              PRICE_CHANGE_CONFIRMED: { target: "GeneratingIntent", guard: "confirmsPendingQuote" },
              PRICE_CHANGE_CANCELLED: { target: "Error", actions: { type: "fail", params: { reason: "ERR_PRICE_CHANGE_CANCELLED", error: null } } },
            },
            after: {
              quoteExpiry: {
                target: "Error",
                actions: { type: "fail", params: { reason: "ERR_QUOTE_EXPIRED", error: Error("Quote expired while awaiting confirmation") } },
              },
            },
          },
          GeneratingIntent: {
            invoke: {
              src: "generateIntent",
              input: ({ context: e }) => {
                if (null == e.accepted) throw Error("No accepted quote");
                return { api: e.input.api, accepted: e.accepted, signerId: e.input.signerId, authMethod: e.input.authMethod };
              },
              onDone: { target: "ValidatingIntent", actions: (0, c.assign)({ generated: ({ event: e }) => e.output }) },
              onError: { target: "Error", actions: { type: "fail", params: ({ event: e }) => ({ reason: "ERR_GENERATE_INTENT_FAILED", error: D(e.error) }) } },
            },
          },
          ValidatingIntent: {
            entry: (0, c.assign)(({ context: e }) => {
              let { accepted: t, generated: n, input: r } = e;
              if (null == t || null == n) return { failure: { reason: "ERR_INTENT_MISMATCH", error: null } };
              try {
                let e = (function (e, t, n = Date.now()) {
                  ((0, _.isRecord)(e) && e.standard === t.standard) || w("Intent standard differs from the signer's auth method");
                  let {
                    message: r,
                    nonce: s,
                    verifyingContract: o,
                    allowedKeys: a,
                  } = (function (e) {
                    let t;
                    switch (e.standard) {
                      case "nep413": {
                        let t = e.payload;
                        for (let e of ((0, _.isRecord)(t) || w("NEP-413 payload is malformed"), Object.keys(t)))
                          ["message", "nonce", "recipient", "callbackUrl"].includes(e) || w(`Unexpected NEP-413 field ${e}`);
                        return (
                          null != t.callbackUrl && w("NEP-413 callback is not allowed"),
                          { message: q(t.message), nonce: t.nonce, verifyingContract: t.recipient, allowedKeys: U }
                        );
                      }
                      case "ton_connect": {
                        let n = e.payload;
                        ((0, _.isRecord)(n) && "text" === n.type) || w("TON Connect payload is malformed"), (t = q(n.text));
                        break;
                      }
                      case "erc191":
                      case "tip191":
                      case "raw_ed25519":
                      case "sep53":
                      case "webauthn":
                        t = q(e.payload);
                        break;
                      default:
                        return w("Unsupported intent standard");
                    }
                    return {
                      message: t,
                      nonce: (0, _.isRecord)(t) ? t.nonce : void 0,
                      verifyingContract: (0, _.isRecord)(t) ? t.verifying_contract : void 0,
                      allowedKeys: b,
                    };
                  })(e);
                  for (let e of ((0, _.isRecord)(r) || w("Intent message is malformed"), Object.keys(r))) a.includes(e) || w(`Unexpected intent field ${e}`);
                  r.signer_id !== t.signerId && w("Intent signer differs"),
                    ("string" == typeof s && k.test(s)) || w("Intent nonce is not 32 bytes"),
                    ("string" != typeof o || 0 === o.length) && w("Intent verifying contract is missing"),
                    null != t.verifyingContract && o !== t.verifyingContract && w("Intent verifying contract differs");
                  let i = P(r.deadline);
                  if ((null == i && w("Intent deadline is invalid"), i <= n)) throw new E("ERR_QUOTE_EXPIRED", "Intent deadline has passed");
                  i > t.depositDeadlineMs && w("Intent outlives the accepted deposit address");
                  let u = r.intents;
                  (Array.isArray(u) && 1 === u.length) || w("Intent must contain exactly one transfer");
                  let l = u[0];
                  for (let e of (((0, _.isRecord)(l) && "transfer" === l.intent) || w("Intent is not a transfer"), Object.keys(l)))
                    ["intent", "receiver_id", "tokens", "memo"].includes(e) || w(`Unexpected transfer field ${e}`);
                  null != l.memo && "string" != typeof l.memo && w("Transfer memo is malformed"),
                    l.receiver_id !== t.depositAddress && w("Transfer receiver differs from the accepted deposit account"),
                    (0, _.isRecord)(l.tokens) || w("Transfer tokens are malformed");
                  let d = Object.entries(l.tokens),
                    [p] = d;
                  (1 !== d.length || null == p) && w("Transfer must move exactly one token");
                  let [c, m] = p;
                  return (
                    (h.test(c) && c.replace(h, "") === t.originAsset) || w("Transfer token differs from the source asset"),
                    O(m) !== t.amountIn && w("Transfer amount differs from the accepted quote"),
                    { verifyingContract: o, intentDeadline: new Date(i).toISOString() }
                  );
                })(n.intent, {
                  standard: T[r.authMethod],
                  signerId: r.signerId,
                  depositAddress: t.depositAddress,
                  originAsset: r.tokenIn.defuseAssetId,
                  amountIn: t.amountIn,
                  depositDeadlineMs: t.depositDeadlineMs,
                  ...(null != r.verifyingContract ? { verifyingContract: r.verifyingContract } : {}),
                });
                return {
                  summary: {
                    swapType: r.swapType,
                    originAsset: r.tokenIn.defuseAssetId,
                    destinationAsset: r.tokenOut.defuseAssetId,
                    depositAddress: t.depositAddress,
                    amountIn: t.amountIn,
                    amountOut: t.amountOut,
                    minAmountOut: t.minAmountOut,
                    intentDeadline: e.intentDeadline,
                    quoteDeadline: new Date(t.deadlineMs).toISOString(),
                    verifyingContract: e.verifyingContract,
                  },
                };
              } catch (e) {
                return { failure: F(e, "ERR_INTENT_MISMATCH") };
              }
            }),
            always: [{ target: "Error", guard: "hasFailure" }, { target: "Signing" }],
          },
          Signing: {
            invoke: {
              id: "signIntent",
              src: "signIntent",
              input: ({ context: e }) => {
                if (null == e.accepted || null == e.generated || null == e.summary) throw Error("Intent is not validated");
                return {
                  signer: e.input.signer,
                  generated: e.generated,
                  accepted: e.accepted,
                  summary: e.summary,
                  userAddress: e.input.userAddress,
                  authMethod: e.input.authMethod,
                  signerId: e.input.signerId,
                };
              },
              onDone: { target: "SubmittingIntent", actions: (0, c.assign)({ signedIntent: ({ event: e }) => e.output }) },
              onError: {
                target: "Error",
                actions: {
                  type: "fail",
                  params: ({ event: e }) => {
                    if (e.error instanceof E) return { reason: e.error.reason, error: e.error };
                    let t = e.error instanceof y ? e.error : null;
                    return { reason: "ERR_SIGNING_FAILED", signerReason: t?.reason ?? "ERR_USER_DIDNT_SIGN", error: D(t?.originalError ?? e.error) };
                  },
                },
              },
            },
          },
          SubmittingIntent: {
            invoke: {
              src: "submitIntent",
              input: ({ context: e }) => {
                if (null == e.signedIntent || null == e.accepted) throw Error("Intent is not signed");
                return { api: e.input.api, depositAddress: e.accepted.depositAddress, signedIntent: e.signedIntent, deadlineMs: e.accepted.deadlineMs };
              },
              onDone: [
                {
                  target: "Completed",
                  guard: ({ event: e }) => "ok" === e.output.tag,
                  actions: (0, c.assign)({
                    submission: ({ event: e }) => ("ok" === e.output.tag ? { intentHash: e.output.intentHash, correlationId: e.output.correlationId } : null),
                  }),
                },
                {
                  target: "Error",
                  actions: {
                    type: "fail",
                    params: ({ event: e }) =>
                      "rejected" === e.output.tag
                        ? { reason: "ERR_SUBMIT_INTENT_FAILED", serverReason: e.output.reason, error: Error(e.output.reason) }
                        : { reason: "ERR_SUBMISSION_UNCERTAIN", error: "uncertain" === e.output.tag ? e.output.error : null },
                  },
                },
              ],
              onError: { target: "Error", actions: { type: "fail", params: ({ event: e }) => F(e.error, "ERR_SUBMISSION_UNCERTAIN") } },
            },
          },
          Completed: { type: "final" },
          Error: { type: "final", entry: "logFailure" },
        },
      });
    }
    let B = {
      ValidatingInput: "quote",
      Fetching1csQuote: "quote",
      ValidatingQuote: "quote",
      AwaitingPriceChangeConfirmation: "confirm",
      GeneratingIntent: "sign",
      ValidatingIntent: "sign",
      Signing: "sign",
      SubmittingIntent: "submit",
      Completed: "submitted",
      Error: "failed",
    };
    e.s(
      [
        "createConfidentialSwapMachine",
        0,
        M,
        "getConfidentialSwapStage",
        0,
        function (e) {
          return "string" == typeof e ? (B[e] ?? null) : null;
        },
      ],
      32796,
    ),
      e.s([], 984705);
    let L = /^\d+$/;
    function H() {
      throw Error("Swap API returned an invalid response");
    }
    function G(e) {
      return (0, _.isRecord)(e) && "string" == typeof e.err
        ? {
            err: e.err,
            ...("string" == typeof e.correlationId ? { correlationId: e.correlationId } : {}),
            ...((0, _.isJsonObject)(e.originalRequest) ? { originalRequest: e.originalRequest } : {}),
          }
        : null;
    }
    function W(e) {
      let t = G(e);
      if (t) return t;
      if (!(0, _.isRecord)(e) || !(0, _.isRecord)(e.ok)) return H();
      let { appFee: n, ...r } = e.ok;
      return (function (e) {
        if (!(0, _.isRecord)(e)) return !1;
        let { quoteRequest: t, quote: n } = e;
        return (
          "string" == typeof e.correlationId &&
          "string" == typeof e.timestamp &&
          "string" == typeof e.signature &&
          (0, _.isJsonObject)(t) &&
          "boolean" == typeof t.dry &&
          "string" == typeof t.swapType &&
          "number" == typeof t.slippageTolerance &&
          "string" == typeof t.originAsset &&
          "string" == typeof t.depositType &&
          "string" == typeof t.destinationAsset &&
          "string" == typeof t.amount &&
          "string" == typeof t.refundTo &&
          "string" == typeof t.refundType &&
          "string" == typeof t.recipient &&
          "string" == typeof t.recipientType &&
          "string" == typeof t.deadline &&
          (0, _.isJsonObject)(n) &&
          "string" == typeof n.amountIn &&
          "string" == typeof n.amountOut &&
          "string" == typeof n.minAmountIn &&
          "string" == typeof n.minAmountOut
        );
      })(r) &&
        Array.isArray(n) &&
        n.every((e) => Array.isArray(e) && 2 === e.length && "string" == typeof e[0] && "string" == typeof e[1] && L.test(e[1]))
        ? { ok: { ...r, appFee: n.map(([e, t]) => [e, BigInt(t)]) } }
        : H();
    }
    function x(e) {
      let t = G(e);
      if (t) return { err: t.err };
      if (!(0, _.isRecord)(e) || !(0, _.isRecord)(e.ok)) return H();
      let { intent: n, correlationId: r } = e.ok,
        s = Object.values(T);
      return (0, _.isRecord)(n) && "string" == typeof n.standard && s.includes(n.standard) && (0, _.isJsonValue)(n.payload) && "string" == typeof r
        ? { ok: { intent: { standard: n.standard, payload: n.payload }, correlationId: r } }
        : H();
    }
    function X(e) {
      let t = G(e);
      if (t) return { err: t.err };
      if (!(0, _.isRecord)(e) || !(0, _.isRecord)(e.ok)) return H();
      let { status: n, intentHashes: r, amountIn: s, amountOut: o, refundedAmount: a } = e.ok;
      if ("string" != typeof n || "" === n || (void 0 !== r && !(Array.isArray(r) && r.every((e) => "string" == typeof e)))) return H();
      for (let e of [s, o, a]) if (void 0 !== e && ("string" != typeof e || !L.test(e))) return H();
      return {
        ok: {
          status: n,
          ...(void 0 !== r ? { intentHashes: r } : {}),
          ...(void 0 !== s ? { amountIn: s } : {}),
          ...(void 0 !== o ? { amountOut: o } : {}),
          ...(void 0 !== a ? { refundedAmount: a } : {}),
        },
      };
    }
    function j(e) {
      if (e.message) return e.message;
      let t = e.body;
      return (0, _.isRecord)(t) && "string" == typeof t.error ? t.error : `Swap API request failed (${e.status})`;
    }
    let K = new Set([400, 401, 403, 404, 413, 415, 422, 429]);
    var J = e.i(673899),
      $ = e.i(960259),
      Y = e.i(987750),
      z = e.i(526112),
      Z = e.i(434737),
      ee = e.i(345188);
    let et = (0, ee.createServerReference)("4003d221f5c70ce3d2a01307d522c62f4af4ba95c4", ee.callServer, void 0, ee.findSourceMapURL, "getQuote"),
      en = (e) => et(e);
    var er = e.i(748700),
      es = e.i(283278),
      eo = e.i(259004),
      ea = e.i(241258),
      ei = e.i(207696),
      eu = e.i(404466),
      el = e.i(720549),
      ed = e.i(578800),
      ep = e.i(414583),
      ec = e.i(627197),
      em = e.i(723980),
      eg = e.i(549354),
      eE = e.i(369256),
      eI = e.i(33574),
      ef = e.i(757011);
    function eR(e, t, n) {
      if (null != n && 0n !== e.amount && 100 * Math.abs(Number(e.amount - t) / Number(e.amount)) < n) return !1;
      let r = { fractionDigits: 6, min: 1e-6 };
      return (0, em.formatTokenValue)(e.amount, e.decimals, r) !== (0, em.formatTokenValue)(t, e.decimals, r);
    }
    let ey = (function (e = {}) {
        async function t(t, n, r) {
          let s,
            o = {
              method: "POST",
              headers: { accept: "application/json", "content-type": "application/json", ...e.headers },
              credentials: e.credentials ?? "include",
              body: JSON.stringify(n),
              ...(r?.signal ? { signal: r.signal } : {}),
            };
          if (e.requestImpl) return e.requestImpl(t, o);
          let a = e.fetchImpl ?? globalThis.fetch;
          if (null == a) throw Error("A fetch implementation is required to use SwapApi");
          let i = await a(`${(e.baseUrl ?? "").replace(/\/+$/, "")}${t}`, o);
          try {
            s = await i.json();
          } catch {
            s = void 0;
          }
          return i.ok ? { ok: !0, body: s } : { ok: !1, error: { status: i.status, body: s } };
        }
        async function n(e, n, r, s) {
          let o = await t(e, n, r);
          if (!o.ok) throw Error(j(o.error));
          return s(o.body);
        }
        return {
          getQuote: (e, t) => n("/api/swap/quote", e, t, W),
          generateIntent: (e, t) => n("/api/swap/intent", e, t, x),
          async submitIntent(e, n) {
            let r = await t("/api/swap/submit", e, n);
            if (r.ok) {
              var s;
              return (
                (s = r.body),
                (0, _.isRecord)(s) && "string" == typeof s.err
                  ? { err: s.err, ...("rejected" === s.kind || "unknown" === s.kind ? { kind: s.kind } : {}) }
                  : (0, _.isRecord)(s) &&
                      (0, _.isRecord)(s.ok) &&
                      "string" == typeof s.ok.intentHash &&
                      "" !== s.ok.intentHash &&
                      "string" == typeof s.ok.correlationId
                    ? { ok: { intentHash: s.ok.intentHash, correlationId: s.ok.correlationId } }
                    : H()
              );
            }
            return { err: j(r.error), kind: K.has(r.error.status) ? "rejected" : "unknown" };
          },
          getStatus: (e, t) => n("/api/swap/status", e, t, X),
        };
      })(),
      e_ = {
        ERR_INVALID_INPUT: "ERR_1CS_QUOTE_FAILED",
        ERR_1CS_QUOTE_FAILED: "ERR_1CS_QUOTE_FAILED",
        ERR_QUOTE_SIGNATURE_INVALID: "ERR_QUOTE_SIGNATURE_INVALID",
        ERR_QUOTE_MISMATCH: "ERR_1CS_QUOTE_FAILED",
        ERR_NO_DEPOSIT_ADDRESS: "ERR_NO_DEPOSIT_ADDRESS",
        ERR_QUOTE_EXPIRED: "ERR_1CS_QUOTE_FAILED",
        ERR_RWA_MINIMUM_NOT_MET: "ERR_RWA_MINIMUM_NOT_MET",
        ERR_AMOUNT_IN_BALANCE_INSUFFICIENT_AFTER_NEW_1CS_QUOTE: "ERR_AMOUNT_IN_BALANCE_INSUFFICIENT_AFTER_NEW_1CS_QUOTE",
        ERR_QUOTE_WORSE_THAN_REVIEWED: "ERR_1CS_QUOTE_FAILED",
        ERR_PRICE_CHANGE_CANCELLED: "ERR_PRICE_CHANGE_CANCELLED",
        ERR_PRICE_CHANGE_NOT_CONFIRMED: "ERR_PRICE_CHANGE_CANCELLED",
        ERR_GENERATE_INTENT_FAILED: "ERR_GENERATE_INTENT_FAILED",
        ERR_INTENT_MISMATCH: "ERR_GENERATE_INTENT_FAILED",
        ERR_SUBMIT_INTENT_FAILED: "ERR_SUBMIT_INTENT_FAILED",
      };
    function eT(e) {
      let t = M({
        verifyQuote: (e) => (0, Z.verifyQuoteResult)(e),
        telemetry: { warn: (e, t) => ea.logger.warn(e, t), error: (e) => ea.logger.error(e) },
        isPriceChangeMaterial: ({ previous: t, next: n }) => eR(t, n.amount, e.minPercentChange),
      });
      return (0, g.setup)({
        types: { context: {}, input: {}, output: {}, events: {} },
        actions: {
          setError: (0, c.assign)({ error: (e, t) => ({ tag: "err", value: t }) }),
          logError: (e, t) => {
            ea.logger.error(t.error);
          },
          set1csQuoteResult: (0, c.assign)({ quote1csResult: (e, t) => t }),
          saveOneClickQuote: ({ context: e }) => {
            (0, es.saveQuoteFromResult)(e.quote1csResult);
          },
          setWalletMessage: (0, c.assign)({ walletMessage: (e, t) => t }),
          setSignature: (0, c.assign)({ signature: (e, t) => t }),
          setIntentHash: (0, c.assign)({ intentHash: (e, t) => t }),
          settleSignatureCheck: (0, c.assign)({ signatureCheck: ({ context: e }, t) => (e.signatureCheck?.settle(t), null) }),
          emitSwapFailed: ({ context: e }) => {
            let t = e.error?.value.reason ?? "unknown",
              n = ["ERR_USER_DIDNT_SIGN", "ERR_PRICE_CHANGE_CANCELLED", "ERR_WALLET_CANCEL_ACTION"].includes(t) ? "swap_cancelled" : "swap_failed";
            (0, ec.emitEvent)(n, {
              token_from: e.input.tokenIn.symbol,
              token_to: e.input.tokenOut.symbol,
              ...("swap_failed" === n ? { error_reason: t } : {}),
            });
          },
          notifyQuoteResult: ({ context: e }) => {
            if (e.quote1csResult) {
              let t = e.input.tokenIn.defuseAssetId,
                r = e.input.tokenOut.defuseAssetId;
              e.input.parentRef?.send({
                type: "NEW_1CS_QUOTE",
                params: {
                  result: e.quote1csResult,
                  quoteInput: {
                    tokenIn: e.input.tokenIn,
                    tokenOut: e.input.tokenOut,
                    amount: e.input.swapType === n.QuoteRequest.swapType.EXACT_INPUT ? e.input.amountIn : e.input.amountOut,
                    swapType: e.input.swapType,
                    slippageBasisPoints: e.input.slippageBasisPoints,
                    defuseUserId: e.input.defuseUserId,
                    deadline: e.input.deadline,
                    userAddress: e.input.userAddress,
                    userChainType: e.input.userChainType,
                    isAuthenticated: !0,
                  },
                  tokenInAssetId: t,
                  tokenOutAssetId: r,
                },
              });
            }
          },
          requestPriceChangeConfirmation: ({ context: e }, t) => {
            e.input.parentRef?.send({ type: "PRICE_CHANGE_CONFIRMATION_REQUEST", params: t });
          },
        },
        actors: {
          fetch1csQuoteActor: (0, m.fromPromise)(async ({ input: e }) => {
            let t = e.quoteClient ?? en,
              r = {
                dry: !1,
                slippageTolerance: Math.round(e.slippageBasisPoints / 100),
                originAsset: e.tokenIn.defuseAssetId,
                destinationAsset: e.tokenOut.defuseAssetId,
                amount: (e.swapType === n.QuoteRequest.swapType.EXACT_INPUT ? e.amountIn.amount : e.amountOut.amount).toString(),
                deadline: e.deadline,
                userAddress: e.userAddress,
                authMethod: e.userChainType,
                swapType: e.swapType,
                isConfidential: e.isConfidential,
                isAuthenticated: !0,
              };
            return (0, Z.verifyQuoteResult)(
              await (function (e, ...t) {
                return (0, er.withTimeout)(() => e(...t), { timeout: 2e4 });
              })(t, r),
            );
          }),
          createTransferMessageActor: (0, m.fromPromise)(async ({ input: e }) => {
            let { nonce: t, deadline: n } = await el.bridgeSDK.intentBuilder().setDeadline(new Date(e.deadline)).build();
            return (0, ed.createTransferMessage)([[e.tokenIn.defuseAssetId, e.amountIn.amount]], {
              signerId: e.defuseUserId,
              receiverId: e.depositAddress,
              deadlineTimestamp: Date.parse(n),
              nonce: Y.base64.decode(t),
            });
          }),
          verifySignatureActor: (0, m.fromPromise)(({ input: e }) => (0, eg.verifyWalletSignature)(e.signature, e.userAddress)),
          publicKeyVerifierActor: eI.publicKeyVerifierMachine,
          signMessage: (0, m.fromPromise)(({ input: t }) => e.signMessage(t)),
          broadcastMessage: (0, m.fromPromise)(async ({ input: e }) =>
            (0, z.solverRelayPublishIntent)({
              multiPayload: $.prepareBroadcastRequest.prepareSwapSignedData(e.signatureData, e.userInfo),
              quoteHashes: [],
            }).then(ep.convertPublishIntentToLegacyFormat),
          ),
          confidentialSwapActor: t,
        },
        guards: {
          isTrue: (e, t) => t,
          isOk: (e, t) => "ok" === t.tag,
          isConfidential: ({ context: e }) => !0 === e.input.isConfidential,
          isQuoteSuccess: ({ context: e }) => null != e.quote1csResult && "ok" in e.quote1csResult && null != e.quote1csResult.ok.quote.depositAddress,
          rwaMinimumNotMet: ({ context: e }) =>
            null != e.quote1csResult &&
            "ok" in e.quote1csResult &&
            f({
              isRwaInput: !0 === e.input.isRwaInput,
              isRwaOutput: !0 === e.input.isRwaOutput,
              amountInUsd: e.quote1csResult.ok.quote.amountInUsd,
              amountOutUsd: e.quote1csResult.ok.quote.amountOutUsd,
              failOnMissing: !0,
            }),
          insufficientBalanceForExactOutQuote: ({ context: e }) =>
            e.input.swapType !== n.QuoteRequest.swapType.EXACT_INPUT &&
            null != e.quote1csResult &&
            "ok" in e.quote1csResult &&
            null != e.quote1csResult.ok.quote.amountIn &&
            BigInt(e.quote1csResult.ok.quote.amountIn) > e.input.amountInTokenBalance,
          isWorseThanPrevious: ({ context: t }) =>
            (function (e, t) {
              let r = e.input.previousOppositeAmount;
              if (
                null == e.quote1csResult ||
                !("ok" in e.quote1csResult) ||
                null == e.quote1csResult.ok.quote.amountOut ||
                null == e.quote1csResult.ok.quote.amountIn ||
                null == e.quote1csResult.ok.quote.depositAddress
              )
                return !1;
              let s = e.input.swapType === n.QuoteRequest.swapType.EXACT_INPUT,
                o = BigInt(s ? e.quote1csResult.ok.quote.amountOut : e.quote1csResult.ok.quote.amountIn);
              return !!(s ? o < r.amount : o > r.amount) && (!s || eR(r, o, t?.minPercentChange));
            })(t, { ...(null != e.minPercentChange ? { minPercentChange: e.minPercentChange } : {}) }),
        },
      }).createMachine({
        id: "swap-intent-1cs",
        context: ({ input: e }) => ({
          input: e,
          userAddress: e.userAddress,
          userChainType: e.userChainType,
          nearClient: e.nearClient,
          quote1csResult: null,
          walletMessage: null,
          signature: null,
          intentHash: null,
          pendingPriceChange: null,
          signatureCheck: null,
          error: null,
          submissionUnconfirmed: !1,
        }),
        initial: "Routing",
        output: ({ context: e }) => {
          if (null != e.intentHash || e.submissionUnconfirmed)
            return (
              (0, s.assert)(
                null != e.quote1csResult && "ok" in e.quote1csResult && null != e.quote1csResult.ok.quote.depositAddress,
                "Deposit address must be set when intent hash is available",
              ),
              {
                tag: "ok",
                value: {
                  intentHash: e.intentHash,
                  ...(e.submissionUnconfirmed ? { submissionUnconfirmed: !0 } : {}),
                  depositAddress: e.quote1csResult.ok.quote.depositAddress,
                  ...(null != e.quote1csResult.ok.quote.depositMemo ? { depositMemo: e.quote1csResult.ok.quote.depositMemo } : {}),
                  accountId: e.userAddress,
                  tokenOut: e.input.tokenOut,
                  intentDescription: {
                    type: "swap",
                    totalAmountIn: { amount: BigInt(e.quote1csResult.ok.quote.amountIn ?? "0"), decimals: e.input.tokenIn.decimals },
                    totalAmountOut: { amount: BigInt(e.quote1csResult.ok.quote.amountOut ?? "0"), decimals: e.input.tokenOut.decimals },
                    depositAddress: e.quote1csResult.ok.quote.depositAddress,
                  },
                },
              }
            );
          if (null != e.error) return e.error;
          throw Error("Unexpected output state");
        },
        states: {
          Routing: { always: [{ target: "Confidential", guard: "isConfidential" }, { target: "Fetching1csQuote" }] },
          Confidential: {
            type: "parallel",
            on: {
              CONFIDENTIAL_QUOTE: { actions: [{ type: "set1csQuoteResult", params: ({ event: e }) => e.result }, "notifyQuoteResult"] },
              CONFIDENTIAL_PRICE_CHANGE_REQUESTED: {
                actions: [
                  (0, c.assign)({ pendingPriceChange: ({ event: e }) => e.request }),
                  {
                    type: "requestPriceChangeConfirmation",
                    params: ({ event: e }) => ({ newOppositeAmount: e.request.newOppositeAmount, previousOppositeAmount: e.request.previousOppositeAmount }),
                  },
                ],
              },
              PRICE_CHANGE_CONFIRMED: {
                guard: ({ context: e }) => null != e.pendingPriceChange,
                actions: [
                  (0, eu.sendTo)("confidentialSwapRef", ({ context: e }) => ({
                    type: "PRICE_CHANGE_CONFIRMED",
                    quoteSignature: e.pendingPriceChange?.quoteSignature ?? "",
                  })),
                  (0, c.assign)({ pendingPriceChange: null }),
                ],
              },
              PRICE_CHANGE_CANCELLED: { actions: (0, eu.sendTo)("confidentialSwapRef", { type: "PRICE_CHANGE_CANCELLED" }) },
            },
            states: {
              Execution: {
                invoke: {
                  id: "confidentialSwapRef",
                  src: "confidentialSwapActor",
                  input: ({ context: t, self: r }) => {
                    var s, o;
                    let a = t.input,
                      i = a.swapType === n.QuoteRequest.swapType.EXACT_INPUT;
                    return {
                      api: ey,
                      signer:
                        ((s = e.signMessage),
                        (o = (e) => new Promise((t) => r.send({ type: "CHECK_CONFIDENTIAL_SIGNATURE", signature: e, settle: t }))),
                        {
                          async signIntent({ intent: e, quote: t, userAddress: n, authMethod: r, assertStillValid: a }) {
                            let i, u;
                            try {
                              i = (0, ed.wrapPayloadAsWalletMessage)((0, ed.toWalletIntentPayload)(e));
                            } catch (e) {
                              throw new y("ERR_FAILED_TO_PREPARE_MESSAGE_TO_SIGN", e);
                            }
                            a();
                            try {
                              u = await s(i);
                            } catch (e) {
                              throw new y((0, eE.extractWalletErrorCode)(e, "ERR_USER_DIDNT_SIGN"), e);
                            }
                            if (((0, es.saveQuoteFromResult)({ ok: t }), null == u)) throw new y("ERR_USER_DIDNT_SIGN");
                            let l = await o(u);
                            if ("err" === l.tag) throw new y(l.reason, l.error);
                            return $.prepareBroadcastRequest.prepareSwapSignedData(u, { userAddress: n, userChainType: r });
                          },
                        }),
                      observer: {
                        onQuote: (e) => r.send({ type: "CONFIDENTIAL_QUOTE", result: e }),
                        onPriceChangeConfirmationRequest: (e) => r.send({ type: "CONFIDENTIAL_PRICE_CHANGE_REQUESTED", request: e }),
                      },
                      tokenIn: a.tokenIn,
                      tokenOut: a.tokenOut,
                      swapType: i ? "EXACT_INPUT" : "EXACT_OUTPUT",
                      amount: i ? a.amountIn.amount : a.amountOut.amount,
                      slippageTolerance: Math.round(a.slippageBasisPoints / 100),
                      deadline: a.deadline,
                      userAddress: a.userAddress,
                      authMethod: a.userChainType,
                      signerId: a.defuseUserId,
                      balance: a.amountInTokenBalance,
                      isRwaInput: !0 === a.isRwaInput,
                      isRwaOutput: !0 === a.isRwaOutput,
                      previousOppositeAmount: a.previousOppositeAmount,
                      priceChange: "await-confirmation",
                      verifyingContract: eo.CONFIDENTIAL_INTENTS_CONTRACT,
                      ...(a.quoteClient?.confidentialPurpose != null ? { quotePurpose: a.quoteClient.confidentialPurpose } : {}),
                      idempotencyKey: crypto.randomUUID(),
                    };
                  },
                  onDone: [
                    {
                      target: "#swap-intent-1cs.Completed",
                      guard: ({ event: e }) => "ok" === e.output.tag,
                      actions: [
                        (0, ei.log)("Intent submitted via 1-Click API"),
                        { type: "setIntentHash", params: ({ event: e }) => ((0, s.assert)("ok" === e.output.tag), e.output.value.intentHash) },
                      ],
                    },
                    {
                      target: "#swap-intent-1cs.Completed",
                      guard: ({ event: e }) => "err" === e.output.tag && "ERR_SUBMISSION_UNCERTAIN" === e.output.value.reason,
                      actions: [(0, ei.log)("Intent submission unconfirmed; tracking deposit"), (0, c.assign)({ submissionUnconfirmed: !0 })],
                    },
                    {
                      target: "#swap-intent-1cs.Error",
                      actions: {
                        type: "setError",
                        params: ({ event: e }) => {
                          let t = e.output;
                          (0, s.assert)("err" === t.tag);
                          let { reason: n } = t.value;
                          (0, s.assert)("ERR_SUBMISSION_UNCERTAIN" !== n);
                          var r = { ...t.value, reason: n };
                          if ("ERR_SIGNING_FAILED" === r.reason) {
                            let e = r.signerReason;
                            return { reason: ef.swapErrorCodes.find((t) => t === e) ?? "ERR_USER_DIDNT_SIGN", error: r.error };
                          }
                          return { reason: e_[r.reason], error: r.error };
                        },
                      },
                    },
                  ],
                  onError: {
                    target: "#swap-intent-1cs.Error",
                    actions: [
                      { type: "logError", params: ({ event: e }) => ({ error: e.error }) },
                      { type: "setError", params: ({ event: e }) => ({ reason: "ERR_1CS_QUOTE_FAILED", error: J.errors.toError(e.error) }) },
                    ],
                  },
                },
              },
              SignatureChecks: {
                initial: "Idle",
                states: {
                  Idle: {
                    on: {
                      CHECK_CONFIDENTIAL_SIGNATURE: {
                        target: "VerifyingSignature",
                        actions: (0, c.assign)({
                          signatureCheck: ({ event: e }) => ({ signature: e.signature, settle: e.settle }),
                          signature: ({ event: e }) => e.signature,
                        }),
                      },
                    },
                  },
                  VerifyingSignature: {
                    invoke: {
                      src: "verifySignatureActor",
                      input: ({ context: e }) => (
                        (0, s.assert)(null != e.signature, "Signature is not set"), { signature: e.signature, userAddress: e.userAddress }
                      ),
                      onDone: [
                        { target: "VerifyingPublicKeyPresence", guard: { type: "isTrue", params: ({ event: e }) => e.output } },
                        {
                          target: "Idle",
                          actions: {
                            type: "settleSignatureCheck",
                            params: { tag: "err", reason: "ERR_SIGNED_DIFFERENT_ACCOUNT", error: Error("Signed with different account") },
                          },
                        },
                      ],
                      onError: {
                        target: "Idle",
                        actions: {
                          type: "settleSignatureCheck",
                          params: ({ event: e }) => ({ tag: "err", reason: "ERR_CANNOT_VERIFY_SIGNATURE", error: J.errors.toError(e.error) }),
                        },
                      },
                    },
                  },
                  VerifyingPublicKeyPresence: {
                    invoke: {
                      id: "publicKeyVerifierRef",
                      src: "publicKeyVerifierActor",
                      input: ({ context: e }) => (
                        (0, s.assert)(null != e.signature, "Signature is not set"),
                        { nearAccount: "NEP413" === e.signature.type ? e.signature.signatureData : null, nearClient: e.nearClient }
                      ),
                      onDone: {
                        target: "Idle",
                        actions: {
                          type: "settleSignatureCheck",
                          params: ({ event: e }) =>
                            "ok" === e.output.tag
                              ? { tag: "ok" }
                              : { tag: "err", reason: e.output.value, error: Error(`Public key verification failed: ${e.output.value}`) },
                        },
                      },
                      onError: {
                        target: "Idle",
                        actions: {
                          type: "settleSignatureCheck",
                          params: ({ event: e }) => ({ tag: "err", reason: "ERR_PUBKEY_EXCEPTION", error: J.errors.toError(e.error) }),
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          Fetching1csQuote: {
            invoke: {
              src: "fetch1csQuoteActor",
              input: ({ context: e }) => e.input,
              onDone: { target: "ValidatingQuote", actions: [{ type: "set1csQuoteResult", params: ({ event: e }) => e.output }, "notifyQuoteResult"] },
              onError: {
                target: "Error",
                actions: [
                  { type: "logError", params: ({ event: e }) => ({ error: e.error }) },
                  {
                    type: "setError",
                    params: ({ event: e }) => ({ reason: "ERR_1CS_QUOTE_FAILED", error: e.error instanceof Error ? e.error : Error(String(e.error)) }),
                  },
                ],
              },
            },
          },
          ValidatingQuote: {
            always: [
              {
                target: "Error",
                guard: "rwaMinimumNotMet",
                actions: [{ type: "setError", params: () => ({ reason: "ERR_RWA_MINIMUM_NOT_MET", error: Error(I) }) }],
              },
              {
                target: "Error",
                guard: { type: "insufficientBalanceForExactOutQuote" },
                actions: [
                  { type: "logError", params: () => ({ error: Error("1CS quote succeeded but new amount in exceeds user token in balance") }) },
                  {
                    type: "setError",
                    params: () => ({
                      reason: "ERR_AMOUNT_IN_BALANCE_INSUFFICIENT_AFTER_NEW_1CS_QUOTE",
                      error: Error("1CS quote succeeded but new amount in exceeds user token in balance"),
                    }),
                  },
                ],
              },
              { target: "AwaitingPriceChangeConfirmation", guard: { type: "isWorseThanPrevious" } },
              { target: "CreatingTransferMessage", guard: { type: "isQuoteSuccess" } },
              {
                target: "Error",
                actions: [
                  {
                    type: "logError",
                    params: ({ context: e }) => ({
                      error:
                        !e.quote1csResult || "err" in e.quote1csResult
                          ? (e.quote1csResult ?? Error("No quote result"))
                          : Error("1CS quote succeeded but no deposit address provided"),
                    }),
                  },
                  {
                    type: "setError",
                    params: ({ context: e }) => {
                      if (!e.quote1csResult || "err" in e.quote1csResult) {
                        let t = e.quote1csResult && "err" in e.quote1csResult ? e.quote1csResult.err : "Unknown quote error";
                        return { reason: (0, Z.isQuoteSignatureError)(t) ? "ERR_QUOTE_SIGNATURE_INVALID" : "ERR_1CS_QUOTE_FAILED", error: Error(t) };
                      }
                      return { reason: "ERR_NO_DEPOSIT_ADDRESS", error: Error("1CS quote succeeded but no deposit address provided") };
                    },
                  },
                ],
              },
            ],
          },
          AwaitingPriceChangeConfirmation: {
            entry: {
              type: "requestPriceChangeConfirmation",
              params: ({ context: e }) => (
                (0, s.assert)(null != e.quote1csResult && "ok" in e.quote1csResult),
                {
                  newOppositeAmount:
                    e.input.swapType === n.QuoteRequest.swapType.EXACT_INPUT
                      ? { amount: BigInt(e.quote1csResult.ok.quote.amountOut), decimals: e.input.tokenOut.decimals }
                      : { amount: BigInt(e.quote1csResult.ok.quote.amountIn), decimals: e.input.tokenIn.decimals },
                  previousOppositeAmount: e.input.previousOppositeAmount,
                }
              ),
            },
            on: {
              PRICE_CHANGE_CONFIRMED: { target: "CreatingTransferMessage" },
              PRICE_CHANGE_CANCELLED: { target: "Error", actions: { type: "setError", params: { reason: "ERR_PRICE_CHANGE_CANCELLED", error: null } } },
            },
          },
          CreatingTransferMessage: {
            invoke: {
              src: "createTransferMessageActor",
              input: ({ context: e }) => {
                (0, s.assert)(null != e.quote1csResult && "ok" in e.quote1csResult), (0, s.assert)(null != e.quote1csResult.ok.quote.depositAddress);
                let t = e.input.swapType === n.QuoteRequest.swapType.EXACT_INPUT,
                  r = BigInt((t ? e.input.amountIn.amount : e.quote1csResult.ok.quote.amountIn) ?? "0");
                return (
                  (0, s.assert)(r > 0n, t ? "Invalid input amount, must be greater than 0" : "Quote missing amountIn or amountIn is 0 for exact-out swap"),
                  {
                    tokenIn: e.input.tokenIn,
                    amountIn: { amount: r, decimals: e.input.tokenIn.decimals },
                    depositAddress: e.quote1csResult.ok.quote.depositAddress,
                    defuseUserId: e.input.defuseUserId,
                    deadline: e.input.deadline,
                  }
                );
              },
              onDone: { target: "Signing", actions: { type: "setWalletMessage", params: ({ event: e }) => e.output } },
              onError: {
                target: "Error",
                actions: [
                  { type: "logError", params: ({ event: e }) => ({ error: e.error }) },
                  {
                    type: "setError",
                    params: ({ event: e }) => ({ reason: "ERR_TRANSFER_MESSAGE_FAILED", error: e.error instanceof Error ? e.error : Error(String(e.error)) }),
                  },
                ],
              },
            },
          },
          Signing: {
            invoke: {
              id: "signMessage",
              src: "signMessage",
              input: ({ context: e }) => ((0, s.assert)(null != e.walletMessage, "Wallet message is not set"), e.walletMessage),
              onDone: { target: "VerifyingSignature", actions: [{ type: "setSignature", params: ({ event: e }) => e.output }, "saveOneClickQuote"] },
              onError: {
                target: "Error",
                actions: [
                  { type: "logError", params: ({ event: e }) => ({ error: e.error }) },
                  {
                    type: "setError",
                    params: ({ event: e }) => ({ reason: (0, eE.extractWalletErrorCode)(e.error, "ERR_USER_DIDNT_SIGN"), error: J.errors.toError(e.error) }),
                  },
                ],
              },
            },
          },
          VerifyingSignature: {
            invoke: {
              src: "verifySignatureActor",
              input: ({ context: e }) => ((0, s.assert)(null != e.signature, "Signature is not set"), { signature: e.signature, userAddress: e.userAddress }),
              onDone: [
                { target: "VerifyingPublicKeyPresence", guard: { type: "isTrue", params: ({ event: e }) => e.output } },
                {
                  target: "Error",
                  actions: [
                    { type: "logError", params: { error: Error("Signed with different account") } },
                    { type: "setError", params: { reason: "ERR_SIGNED_DIFFERENT_ACCOUNT", error: null } },
                  ],
                },
              ],
              onError: {
                target: "Error",
                actions: [
                  { type: "logError", params: ({ event: e }) => ({ error: e.error }) },
                  { type: "setError", params: ({ event: e }) => ({ reason: "ERR_CANNOT_VERIFY_SIGNATURE", error: J.errors.toError(e.error) }) },
                ],
              },
            },
          },
          VerifyingPublicKeyPresence: {
            invoke: {
              id: "publicKeyVerifierRef",
              src: "publicKeyVerifierActor",
              input: ({ context: e }) => (
                (0, s.assert)(null != e.signature, "Signature is not set"),
                { nearAccount: "NEP413" === e.signature.type ? e.signature.signatureData : null, nearClient: e.nearClient }
              ),
              onDone: [
                { target: "BroadcastingIntent", guard: { type: "isOk", params: ({ event: e }) => e.output } },
                {
                  target: "Error",
                  actions: [
                    {
                      type: "logError",
                      params: ({ event: e }) => ({
                        error: Error(
                          "err" === e.output.tag ? `Public key verification failed: ${e.output.value}` : "Unexpected non-error output in error path",
                        ),
                      }),
                    },
                    {
                      type: "setError",
                      params: ({ event: e }) => ((0, s.assert)("err" === e.output.tag, "Expected error"), { reason: e.output.value, error: null }),
                    },
                  ],
                },
              ],
              onError: {
                target: "Error",
                actions: [
                  { type: "logError", params: ({ event: e }) => ({ error: e.error }) },
                  { type: "setError", params: ({ event: e }) => ({ reason: "ERR_PUBKEY_EXCEPTION", error: J.errors.toError(e.error) }) },
                ],
              },
            },
          },
          BroadcastingIntent: {
            invoke: {
              src: "broadcastMessage",
              input: ({ context: e }) => (
                (0, s.assert)(null != e.signature, "Signature is not set"),
                { signatureData: e.signature, userInfo: { userAddress: e.userAddress, userChainType: e.userChainType } }
              ),
              onDone: [
                {
                  target: "Completed",
                  guard: { type: "isOk", params: ({ event: e }) => e.output },
                  actions: [
                    (0, ei.log)("Intent published"),
                    { type: "setIntentHash", params: ({ event: e }) => ((0, s.assert)("ok" === e.output.tag), e.output.value) },
                  ],
                },
                {
                  target: "Error",
                  actions: [
                    {
                      type: "logError",
                      params: ({ event: e }) => ({
                        error: Error("err" === e.output.tag ? `Intent rejected: ${e.output.value.reason}` : "Unexpected non-error output in error path"),
                      }),
                    },
                    {
                      type: "setError",
                      params: ({ event: e }) => (
                        (0, s.assert)("err" === e.output.tag), { reason: "ERR_CANNOT_PUBLISH_INTENT", server_reason: e.output.value.reason }
                      ),
                    },
                  ],
                },
              ],
              onError: {
                target: "Error",
                actions: [
                  { type: "logError", params: ({ event: e }) => ({ error: e.error }) },
                  { type: "setError", params: ({ event: e }) => ({ reason: "ERR_CANNOT_PUBLISH_INTENT", error: J.errors.toError(e.error) }) },
                ],
              },
            },
          },
          Completed: { type: "final" },
          Error: { type: "final", entry: ["emitSwapFailed"] },
        },
      });
    }
    let eA = eT({
      signMessage: async () => {
        throw Error("signMessage must be provided by the parent");
      },
    });
    e.s(["createSwapIntent1csMachine", 0, eT, "swapIntent1csMachine", 0, eA], 6661);
    var eC = e.i(162452),
      eN = e.i(120993),
      ek = e.i(502217),
      eh = e.i(564264),
      eS = e.i(166786),
      ew = e.i(753416),
      eO = e.i(915365),
      eP = e.i(626531),
      eq = e.i(827391),
      eb = e.i(989299),
      eb = eb,
      eU = e.i(651235),
      eQ = e.i(230903),
      ev = e.i(945878);
    function eD(e, t) {
      let n = Math.max(e, t ?? 0);
      return new Date(Date.now() + n).toISOString();
    }
    e.s(["getMinDeadlineMs", 0, eD], 32491);
    var eF = e.i(298270),
      eV = e.i(67781),
      eM = e.i(658077);
    function eB(e, t) {
      return "err" in t && (0, ek.isNoLiquidityQuoteError)(t.err) && e.slippageBasisPoints < 3e4;
    }
    function eL(e, t) {
      return "err" in t && (0, ek.isNoLiquidityQuoteError)(t.err) && null != e.amountProbe && e.amountProbe.amount > e.amount.amount;
    }
    let eH = (0, m.fromCallback)(({ receive: e, input: t, emit: n }) => {
      let r = 0,
        s = t.quoteClient ?? en;
      return (
        e((e) => {
          let o = e.type;
          switch (o) {
            case "PAUSE":
              r++;
              return;
            case "NEW_QUOTE_INPUT":
              var a;
              let i;
              (a = e.params),
                (i = ++r),
                eG(a, s, (e, o, u) => {
                  var l, d;
                  let p;
                  if (i !== r) return;
                  let c = { type: "NEW_1CS_QUOTE", params: { quoteInput: a, result: e, tokenInAssetId: o, tokenOutAssetId: u } };
                  t.parentRef.send(c),
                    n(c),
                    eB(a, e) &&
                      ((l = a),
                      (d = i),
                      eG((p = { ...l, slippageBasisPoints: 3e4 }), s, (e, s, o) => {
                        if (d !== r) return;
                        let a = { type: "NEW_1CS_SLIPPAGE_PROBE", params: { quoteInput: p, result: e, tokenInAssetId: s, tokenOutAssetId: o } };
                        t.parentRef.send(a), n(a);
                      })),
                    eL(a, e) &&
                      (function (e, o) {
                        let a = e.amountProbe;
                        if (null == a) return;
                        let i = { ...e, amount: a };
                        eG(i, s, (e, s, a) => {
                          if (o !== r) return;
                          let u = { type: "NEW_1CS_AMOUNT_PROBE", params: { quoteInput: i, result: e, tokenInAssetId: s, tokenOutAssetId: a } };
                          t.parentRef.send(u), n(u);
                        });
                      })(a, i);
                });
              break;
            default:
              ea.logger.warn("Unhandled event type", { eventType: o });
          }
        }),
        () => r++
      );
    });
    async function eG(e, t, n) {
      let r = e.tokenIn.defuseAssetId,
        s = e.tokenOut.defuseAssetId;
      try {
        let o = await t({
          dry: !0,
          slippageTolerance: Math.round(e.slippageBasisPoints / 100),
          originAsset: r,
          destinationAsset: s,
          amount: e.amount.amount.toString(),
          deadline: e.deadline,
          userAddress: e.userAddress,
          authMethod: e.userChainType,
          swapType: e.swapType,
          isConfidential: e.isConfidential,
          isAuthenticated: e.isAuthenticated ?? !1,
        });
        n(o, r, s);
      } catch (e) {
        ea.logger.error(e), n({ err: "Quote request failed" }, r, s);
      }
    }
    var eW = e.i(657585);
    e.i(484236);
    var ex = e.i(402967);
    function eX(e) {
      let t = e.toString().match(/^(\d+)(?:\.(\d+))?(?:e([+-]?\d+))?$/i);
      if (null == t) return null;
      let [, n, r = "", s = "0"] = t;
      return { coefficient: BigInt(`${n}${r}`), exponent: Number(s) - r.length };
    }
    function ej(e, t, n) {
      let r = (0, ex.priceLookupAssetIds)(e.defuseAssetId)
        .map((e) => t[e])
        .find((e) => null != e && Number.isFinite(e) && e > 0);
      if (null == r) return;
      let s = Number((0, eq.formatUnits)(n.amount, n.decimals)) * r;
      if (!Number.isFinite(s) || s <= 0) return;
      let o = (function (e, t, n) {
        let r = eX(e),
          s = eX(t);
        if (null == r || null == s) return null;
        let o = r.exponent - s.exponent + n,
          [a, i] = o >= 0 ? [r.coefficient * 10n ** BigInt(o), s.coefficient] : [r.coefficient, s.coefficient * 10n ** BigInt(-o)];
        return (a + i / 2n) / i;
      })(Math.max(100, 2 * s), r, e.decimals);
      if (null != o) return o > 0n ? { amount: o, decimals: e.decimals } : void 0;
    }
    function eK(e) {
      return (0, o.isBaseToken)(e) ? e.decimals : e.groupedTokens[0].decimals;
    }
    function eJ(e, t) {
      let r = e.formValues.swapType === n.QuoteRequest.swapType.EXACT_INPUT,
        s = r ? e.parsedFormValues.tokenIn : e.parsedFormValues.tokenOut,
        o = r ? e.parsedFormValues.amountIn : e.parsedFormValues.amountOut;
      if (null == o) return !1;
      let a = ej(s, t, o);
      return null != a && a.amount > o.amount;
    }
    let e$ = (0, g.setup)({
      types: { input: {}, context: {}, events: {}, emitted: {}, children: {} },
      actors: { background1csQuoterActor: eH, depositedBalanceActor: eW.depositedBalanceMachine, swap1csActor: eA },
      actions: {
        setUser: (0, c.assign)({ user: (e, t) => t }),
        setFormValues: (0, c.assign)({ formValues: ({ context: e }, { data: t }) => ({ ...e.formValues, ...t }) }),
        resetFormValueAmounts: (0, c.assign)({ formValues: ({ context: e }) => ({ ...e.formValues, amountIn: "", amountOut: "" }) }),
        resetParsedFormValueAmounts: (0, c.assign)({ parsedFormValues: ({ context: e }) => ({ ...e.parsedFormValues, amountIn: null, amountOut: null }) }),
        parseFormValues: (0, c.assign)({
          parsedFormValues: ({ context: e }) => {
            let t = (0, eV.getAnyBaseTokenInfo)(e.formValues.tokenIn),
              n = (0, eV.getAnyBaseTokenInfo)(e.formValues.tokenOut);
            try {
              let r = eK(e.formValues.tokenIn),
                s = eK(e.formValues.tokenOut);
              return {
                tokenIn: t,
                tokenOut: n,
                amountIn:
                  "" === e.formValues.amountIn || Number.isNaN(+e.formValues.amountIn)
                    ? null
                    : { amount: (0, eF.parseUnits)(e.formValues.amountIn, r), decimals: r },
                amountOut:
                  "" === e.formValues.amountOut || Number.isNaN(+e.formValues.amountOut)
                    ? null
                    : { amount: (0, eF.parseUnits)(e.formValues.amountOut, s), decimals: s },
              };
            } catch {
              return { tokenIn: t, tokenOut: n, amountIn: null, amountOut: null };
            }
          },
        }),
        updateFormValuesWithQuoteData: (0, c.assign)({
          formValues: ({ context: e }) => {
            let t = e.quote,
              r = e.formValues.swapType === n.QuoteRequest.swapType.EXACT_INPUT,
              s = r ? "amountOut" : "amountIn";
            if (null === t || "err" === t.tag) return { ...e.formValues, ...{ [s]: "" } };
            let o = t.value.tokenDeltas;
            if ((0, eV.hasMatchingTokenKeys)(o)) {
              let t = r ? o[1][1] : o[0][1];
              return { ...e.formValues, ...{ [s]: (0, eq.formatUnits)(t < 0n ? -t : t, e.parsedFormValues.tokenIn.decimals) } };
            }
            let a = (0, eV.computeTotalDeltaDifferentDecimals)([r ? e.parsedFormValues.tokenOut : e.parsedFormValues.tokenIn], t.value.tokenDeltas);
            return { ...e.formValues, ...{ [s]: (0, eq.formatUnits)(a.amount < 0n ? -a.amount : a.amount, a.decimals) } };
          },
        }),
        updateUIAmount: () => {
          throw Error("not implemented");
        },
        clearQuote: (0, c.assign)({ quote: null }),
        clearError: (0, c.assign)({ error: null }),
        clear1csError: (0, c.assign)({ quote1csError: null }),
        resetLiquidityProbeStatuses: (0, c.assign)({ slippageProbeStatus: "idle", amountProbeStatus: "idle" }),
        markAmountProbePending: (0, c.assign)({ amountProbeStatus: "pending" }),
        processSlippageProbe: (0, c.assign)({
          slippageProbeStatus: ({ event: e, context: t }) =>
            "NEW_1CS_SLIPPAGE_PROBE" !== e.type ? t.slippageProbeStatus : "ok" in e.params.result ? "available" : "unavailable",
        }),
        processAmountProbe: (0, c.assign)({
          amountProbeStatus: ({ event: e, context: t }) =>
            "NEW_1CS_AMOUNT_PROBE" !== e.type ? t.amountProbeStatus : "ok" in e.params.result ? "available" : "unavailable",
        }),
        setTokenPrices: (0, c.assign)({ tokenPrices: (e, t) => t.tokenPrices }),
        setSlippage: (0, c.assign)({ slippageBasisPoints: (e, t) => t.slippageBasisPoints }),
        setIntentCreationResult: (0, c.assign)({ intentCreationResult: (e, t) => t }),
        clearIntentCreationResult: (0, c.assign)({ intentCreationResult: null }),
        clearSwapJourney: (0, c.assign)({ swapJourney: null }),
        captureSubmission: (0, c.assign)(({ context: e, event: t }) => {
          (0, g.assertEvent)(t, "submit");
          let n = t.params.route ?? null,
            r =
              null == t.params.analytics
                ? null
                : (function (e, t, n) {
                    if (null == e.parsedFormValues.amountIn || null == e.parsedFormValues.amountOut) return null;
                    let { tokenIn: r, amountIn: s } = e.parsedFormValues,
                      o = n?.tokenOut ?? e.parsedFormValues.tokenOut,
                      a = n?.amountOut ?? e.parsedFormValues.amountOut,
                      i =
                        "number" == typeof t && Number.isFinite(t) && t >= 0
                          ? { valueUsd: t, valueQuality: "estimated" }
                          : { valueUsd: null, valueQuality: "unavailable" };
                    return {
                      journey: { journeyId: eh.journeyAnalytics.newId(), flow: "swap", privacy: (0, eP.getPrivacyMode)(e.isConfidential), valuation: i },
                      surface: "swap",
                      input_asset_id: r.defuseAssetId,
                      input_asset_symbol: r.symbol,
                      output_asset_id: o.defuseAssetId,
                      output_asset_symbol: o.symbol,
                      amount_in: (0, eq.formatUnits)(s.amount, s.decimals),
                      amount_out: (0, eq.formatUnits)(a.amount, a.decimals),
                      source_chain: r.originChainName,
                      destination_chain: o.originChainName,
                    };
                  })(e, t.params.analytics.valueUsd, n);
          return { submissionRoute: n, swapJourney: r };
        }),
        clearSubmissionRoute: (0, c.assign)({ submissionRoute: null }),
        emitSwapJourneyError: ({ context: e }, t) => {
          null != e.swapJourney &&
            eh.journeyAnalytics.error({ ...e.swapJourney, reason: t.reason, ...(void 0 !== t.server_reason ? { server_reason: t.server_reason } : {}) });
        },
        emitSwapJourneyStarted: ({ context: e }) => {
          null != e.swapJourney && eh.journeyAnalytics.started(e.swapJourney);
        },
        openPriceChangeDialog: (0, c.assign)({
          priceChangeDialog: (e, t) => ({ pendingNewOppositeAmount: t.newOppositeAmount, previousOppositeAmount: t.previousOppositeAmount }),
        }),
        closePriceChangeDialog: (0, c.assign)({ priceChangeDialog: null }),
        sendToSwapRef1csConfirm: (0, eu.sendTo)("swapRef1cs", () => ({ type: "PRICE_CHANGE_CONFIRMED" })),
        sendToSwapRef1csCancel: (0, eu.sendTo)("swapRef1cs", () => ({ type: "PRICE_CHANGE_CANCELLED" })),
        passthroughEvent: (0, eU.emit)((e, t) => t),
        spawnBackground1csQuoterRef: (0, eQ.spawnChild)("background1csQuoterActor", {
          id: "background1csQuoterRef",
          input: ({ self: e, context: t }) => ({ parentRef: e, quoteClient: t.quoteClient }),
        }),
        sendToBackground1csQuoterRefNewQuoteInput: (0, eu.sendTo)(
          "background1csQuoterRef",
          ({ context: e }) => {
            let t = e.formValues.swapType === n.QuoteRequest.swapType.EXACT_INPUT ? e.parsedFormValues.amountIn : e.parsedFormValues.amountOut;
            (0, s.assert)(null !== t, "amount not set");
            let r = null != e.user,
              o = e.user ?? { identifier: "check-price", method: eC.AuthMethod.Near },
              a = e.formValues.swapType === n.QuoteRequest.swapType.EXACT_INPUT ? e.parsedFormValues.tokenIn : e.parsedFormValues.tokenOut;
            return {
              type: "NEW_QUOTE_INPUT",
              params: {
                tokenIn: e.parsedFormValues.tokenIn,
                tokenOut: e.parsedFormValues.tokenOut,
                amount: t,
                amountProbe: ej(a, e.tokenPrices, t),
                swapType: e.formValues.swapType,
                slippageBasisPoints: e.slippageBasisPoints,
                defuseUserId: eN.authIdentity.authHandleToIntentsUserId(o.identifier, o.method),
                deadline: eD(ev.settings.dryQuoteDeadlineMs),
                userAddress: o.identifier,
                userChainType: o.method,
                isConfidential: e.isConfidential,
                isAuthenticated: r,
              },
            };
          },
          { id: "sendToBackground1csQuoterRefNewQuoteInputRequest", delay: 500 },
        ),
        cancelSendToBackground1csQuoterRefNewQuoteInput: (0, eb.f)("sendToBackground1csQuoterRefNewQuoteInputRequest"),
        sendToBackground1csQuoterRefPause: (0, eu.sendTo)("background1csQuoterRef", { type: "PAUSE" }),
        spawnDepositedBalanceRef: (0, eQ.spawnChild)("depositedBalanceActor", {
          id: "depositedBalanceRef",
          input: ({ self: e, context: t }) => ({ parentRef: e, tokenList: t.tokenList, isConfidential: t.isConfidential }),
        }),
        relayToDepositedBalanceRef: (0, eu.sendTo)("depositedBalanceRef", (e, t) => t),
        sendToDepositedBalanceRefRefresh: (0, eu.sendTo)("depositedBalanceRef", (e) => ({ type: "REQUEST_BALANCE_REFRESH" })),
        sendToDepositedBalanceRefRemoveAccount: (0, eu.sendTo)("depositedBalanceRef", (e, t) => ({
          type: "REMOVE_ACCOUNT",
          params: { accountId: eN.authIdentity.authHandleToIntentsUserId(t.depositAddress, "near") },
        })),
        emitEventIntentPublished: (0, eU.emit)(() => ({ type: "INTENT_PUBLISHED" })),
        log1csNoLiquidity: ({ self: e, event: t }) => {
          if (
            "NEW_1CS_QUOTE" !== t.type ||
            !("err" in t.params.result) ||
            "Failed to get quote" !== t.params.result.err ||
            void 0 === t.params.result.originalRequest
          )
            return;
          let n = e.getSnapshot().children.depositedBalanceRef,
            r = (0, eW.balancesSelector)(n?.getSnapshot());
          if (!r) return;
          let s = (0, eM.computeTotalBalanceDifferentDecimals)(t.params.quoteInput.tokenIn, r);
          s &&
            -1 !== (0, eV.compareAmounts)(s, t.params.quoteInput.amount) &&
            (0, eO.logNoLiquidity)({
              tokenIn: t.params.quoteInput.tokenIn,
              tokenOut: t.params.quoteInput.tokenOut,
              amount: (0, eq.formatUnits)(t.params.quoteInput.amount.amount, t.params.quoteInput.amount.decimals),
              contexts: { originalRequest: t.params.result.originalRequest },
            });
        },
        emitSwapQuoteRequested: ({ context: e }) => {
          e.quote?.tag === "ok" &&
            (0, ec.emitEvent)("swap_quote_requested", { token_from: e.parsedFormValues.tokenIn.symbol, token_to: e.parsedFormValues.tokenOut.symbol });
        },
        emitSwapAbandoned: ({ context: e }) => {
          null != e.quote &&
            (0, ec.emitEvent)("swap_abandoned", {
              token_from: e.parsedFormValues.tokenIn.symbol,
              token_to: e.parsedFormValues.tokenOut.symbol,
              stage: "review",
            });
        },
        emitSwapQuoteRejected: ({ context: e }) => {
          e.quote?.tag === "ok" &&
            (0, ec.emitEvent)("swap_quote_rejected", { token_from: e.parsedFormValues.tokenIn.symbol, token_to: e.parsedFormValues.tokenOut.symbol });
        },
        process1csQuote: (0, c.assign)({
          quote: ({ event: e }) => {
            if ("NEW_1CS_QUOTE" !== e.type) return null;
            let { result: t, tokenInAssetId: n, tokenOutAssetId: r } = e.params;
            return "ok" in t
              ? {
                  tag: "ok",
                  value: {
                    quoteHashes: [],
                    expirationTime: new Date(0).toISOString(),
                    tokenDeltas: [
                      [n, -BigInt(t.ok.quote.amountIn)],
                      [r, BigInt(t.ok.quote.amountOut)],
                    ],
                    appFee: t.ok.appFee,
                    timeEstimate: t.ok.quote.timeEstimate,
                  },
                }
              : { tag: "err", value: { reason: "ERR_NO_QUOTES_1CS" } };
          },
          quote1csError: ({ event: e }) => {
            if ("NEW_1CS_QUOTE" !== e.type) return null;
            let { result: t } = e.params;
            return "ok" in t
              ? null
              : (ea.logger.error("1cs quote error", {
                  err: t.err,
                  correlationId: "correlationId" in t ? t.correlationId : void 0,
                  originalRequest: "originalRequest" in t ? t.originalRequest : void 0,
                }),
                t.err);
          },
          slippageProbeStatus: ({ event: e }) => ("NEW_1CS_QUOTE" === e.type && eB(e.params.quoteInput, e.params.result) ? "pending" : "idle"),
          amountProbeStatus: ({ event: e }) => ("NEW_1CS_QUOTE" === e.type && eL(e.params.quoteInput, e.params.result) ? "pending" : "idle"),
        }),
      },
      guards: {
        isOk: (e, t) => "ok" === t.tag,
        shouldRetryAfterPricesUpdated: ({ context: e, event: t }) =>
          "SET_TOKEN_PRICES" === t.type &&
          null != e.quote1csError &&
          (0, ek.isNoLiquidityQuoteError)(e.quote1csError) &&
          "idle" === e.amountProbeStatus &&
          eJ(e, t.params.tokenPrices),
        shouldRetryQuoteWithAmountProbe: ({ context: e, event: t }) =>
          "NEW_1CS_QUOTE" === t.type &&
          null == t.params.quoteInput.amountProbe &&
          "err" in t.params.result &&
          (0, ek.isNoLiquidityQuoteError)(t.params.result.err) &&
          eJ(e, e.tokenPrices),
        isFormValid: ({ context: e }) => {
          let t = e.formValues.swapType === n.QuoteRequest.swapType.EXACT_INPUT ? e.parsedFormValues.amountIn : e.parsedFormValues.amountOut;
          return null !== t && t.amount > 0n;
        },
        canReview: ({ context: e }) =>
          e.quote?.tag === "ok" &&
          null != e.parsedFormValues.amountIn &&
          e.parsedFormValues.amountIn.amount > 0n &&
          null != e.parsedFormValues.amountOut &&
          e.parsedFormValues.amountOut.amount > 0n,
        canSubmit: ({ context: e, event: t }) => {
          if ("submit" !== t.type) return !1;
          let r = e.formValues.swapType === n.QuoteRequest.swapType.EXACT_INPUT ? e.parsedFormValues.amountIn : e.parsedFormValues.amountOut;
          if (
            null == r ||
            r.amount <= 0n ||
            null == e.parsedFormValues.amountIn ||
            e.parsedFormValues.amountIn.amount <= 0n ||
            null == e.parsedFormValues.amountOut ||
            e.parsedFormValues.amountOut.amount <= 0n ||
            e.quote?.tag !== "ok"
          )
            return !1;
          let s = t.params.route;
          if (null == s) return !0;
          if (
            null == e.user ||
            s.amountOut.amount <= 0n ||
            s.minAmountOut.amount <= 0n ||
            s.minAmountOut.amount > s.amountOut.amount ||
            !Number.isFinite(s.amountOutUsd) ||
            s.amountOutUsd <= 0 ||
            s.amountIn.decimals !== s.tokenIn.decimals ||
            s.amountOut.decimals !== s.tokenOut.decimals ||
            s.minAmountOut.decimals !== s.tokenOut.decimals ||
            !(0, eS.isEarnDestinationForReviewedToken)(s.tokenOut, e.formValues.tokenOut)
          )
            return !1;
          let a = eN.authIdentity.authHandleToIntentsUserId(e.user.identifier, e.user.method),
            i = eN.authIdentity.authHandleToIntentsUserId(t.params.userAddress, t.params.userChainType),
            u = e.parsedFormValues.amountIn;
          return (
            s.ownerIntentsUserId === a &&
            s.ownerIntentsUserId === i &&
            s.source === (e.isConfidential ? "confidential" : "main") &&
            s.tokenIn.defuseAssetId === e.parsedFormValues.tokenIn.defuseAssetId &&
            s.amountIn.amount === u.amount &&
            s.amountIn.decimals === u.decimals &&
            s.reviewedTokenOutId === (0, o.getTokenId)(e.formValues.tokenOut) &&
            s.swapType === e.formValues.swapType &&
            s.slippageBasisPoints === e.slippageBasisPoints
          );
        },
        isQuoteForCurrentForm: ({ context: e, event: t }) =>
          "NEW_1CS_QUOTE" === t.type &&
          t.params.tokenInAssetId === e.parsedFormValues.tokenIn.defuseAssetId &&
          t.params.tokenOutAssetId === e.parsedFormValues.tokenOut.defuseAssetId,
      },
    }).createMachine({
      id: "swap-ui",
      context: ({ input: e }) => ({
        user: null,
        error: null,
        quote: null,
        quote1csError: null,
        slippageProbeStatus: "idle",
        amountProbeStatus: "idle",
        tokenPrices: {},
        formValues: { tokenIn: e.tokenIn, tokenOut: e.tokenOut, amountIn: "", amountOut: "", swapType: n.QuoteRequest.swapType.EXACT_INPUT },
        parsedFormValues: {
          tokenIn: (0, eV.getAnyBaseTokenInfo)(e.tokenIn),
          tokenOut: (0, eV.getAnyBaseTokenInfo)(e.tokenOut),
          amountIn: null,
          amountOut: null,
        },
        intentCreationResult: null,
        tokenList: e.tokenList,
        referral: e.referral,
        slippageBasisPoints: e.slippageBasisPoints,
        isConfidential: e.isConfidential,
        appFeeRecipient: e.appFeeRecipient,
        priceChangeDialog: null,
        quoteClient: e.quoteClient ?? en,
        swapJourney: null,
        submissionRoute: null,
      }),
      entry: ["spawnBackground1csQuoterRef", "spawnDepositedBalanceRef"],
      on: {
        INTENT_SETTLED: { actions: [{ type: "passthroughEvent", params: ({ event: e }) => e }, "sendToDepositedBalanceRefRefresh"] },
        ONE_CLICK_SETTLED: {
          actions: [
            { type: "passthroughEvent", params: ({ event: e }) => e },
            "sendToDepositedBalanceRefRefresh",
            { type: "sendToDepositedBalanceRefRemoveAccount", params: ({ event: e }) => ({ depositAddress: e.data.depositAddress }) },
          ],
        },
        SET_TOKEN_PRICES: [
          {
            guard: "shouldRetryAfterPricesUpdated",
            actions: [
              { type: "setTokenPrices", params: ({ event: e }) => e.params },
              "resetLiquidityProbeStatuses",
              "markAmountProbePending",
              "sendToBackground1csQuoterRefNewQuoteInput",
            ],
          },
          { actions: { type: "setTokenPrices", params: ({ event: e }) => e.params } },
        ],
        BALANCE_CHANGED: { guard: "isFormValid", actions: ["resetLiquidityProbeStatuses", "sendToBackground1csQuoterRefNewQuoteInput"] },
        LOGIN: {
          actions: [
            { type: "relayToDepositedBalanceRef", params: ({ event: e }) => e },
            { type: "setUser", params: ({ event: e }) => ({ identifier: e.params.userAddress, method: e.params.userChainType }) },
          ],
        },
        LOGOUT: { actions: [{ type: "relayToDepositedBalanceRef", params: ({ event: e }) => e }, { type: "setUser", params: null }, "clearSubmissionRoute"] },
        PRICE_CHANGE_CONFIRMATION_REQUEST: {
          actions: {
            type: "openPriceChangeDialog",
            params: ({ event: e }) => ({ newOppositeAmount: e.params.newOppositeAmount, previousOppositeAmount: e.params.previousOppositeAmount }),
          },
        },
        PRICE_CHANGE_CONFIRMED: { actions: [{ type: "closePriceChangeDialog" }, { type: "sendToSwapRef1csConfirm" }] },
        PRICE_CHANGE_CANCELLED: { actions: [{ type: "closePriceChangeDialog" }, { type: "sendToSwapRef1csCancel" }] },
        SET_SLIPPAGE: { actions: { type: "setSlippage", params: ({ event: e }) => ({ slippageBasisPoints: e.params.slippageBasisPoints }) } },
        START_NEW_SWAP: {
          actions: [
            "sendToBackground1csQuoterRefPause",
            "cancelSendToBackground1csQuoterRefNewQuoteInput",
            "clearError",
            "clear1csError",
            "resetLiquidityProbeStatuses",
            "clearQuote",
            "clearIntentCreationResult",
            "clearSwapJourney",
            "clearSubmissionRoute",
            "closePriceChangeDialog",
            "resetFormValueAmounts",
            "resetParsedFormValueAmounts",
          ],
        },
      },
      states: {
        editing: {
          on: {
            REQUEST_REVIEW: { target: ".reviewing", guard: "canReview" },
            CANCEL_REVIEW: {
              target: ".validating",
              actions: [
                "emitSwapAbandoned",
                "clearError",
                "clear1csError",
                "clearQuote",
                "clearIntentCreationResult",
                "clearSubmissionRoute",
                "closePriceChangeDialog",
              ],
            },
            submit: {
              target: "submitting_1cs",
              guard: "canSubmit",
              actions: [
                "parseFormValues",
                "captureSubmission",
                "emitSwapJourneyStarted",
                "clearIntentCreationResult",
                "sendToBackground1csQuoterRefPause",
                "cancelSendToBackground1csQuoterRefNewQuoteInput",
              ],
            },
            input: {
              target: ".validating",
              actions: [
                "sendToBackground1csQuoterRefPause",
                "cancelSendToBackground1csQuoterRefNewQuoteInput",
                "emitSwapQuoteRejected",
                "clearQuote",
                "clearError",
                "clear1csError",
                "resetLiquidityProbeStatuses",
                "clearSubmissionRoute",
                { type: "setFormValues", params: ({ event: e }) => ({ data: e.params }) },
                "parseFormValues",
              ],
            },
            NEW_1CS_QUOTE: [
              {
                guard: "shouldRetryQuoteWithAmountProbe",
                actions: [
                  "process1csQuote",
                  "updateFormValuesWithQuoteData",
                  "parseFormValues",
                  "updateUIAmount",
                  "log1csNoLiquidity",
                  "resetLiquidityProbeStatuses",
                  "markAmountProbePending",
                  "sendToBackground1csQuoterRefNewQuoteInput",
                ],
              },
              { actions: ["process1csQuote", "updateFormValuesWithQuoteData", "parseFormValues", "updateUIAmount", "log1csNoLiquidity"] },
            ],
            NEW_1CS_SLIPPAGE_PROBE: { actions: "processSlippageProbe" },
            NEW_1CS_AMOUNT_PROBE: { actions: "processAmountProbe" },
            SET_SLIPPAGE: [
              {
                guard: "isFormValid",
                target: ".waiting_quote",
                actions: [
                  { type: "setSlippage", params: ({ event: e }) => ({ slippageBasisPoints: e.params.slippageBasisPoints }) },
                  "sendToBackground1csQuoterRefPause",
                  "cancelSendToBackground1csQuoterRefNewQuoteInput",
                  "clearQuote",
                  "clearSubmissionRoute",
                  "clearError",
                  "clear1csError",
                  { type: "updateFormValuesWithQuoteData" },
                  "parseFormValues",
                  "updateUIAmount",
                  "resetLiquidityProbeStatuses",
                  "sendToBackground1csQuoterRefNewQuoteInput",
                ],
              },
              { actions: { type: "setSlippage", params: ({ event: e }) => ({ slippageBasisPoints: e.params.slippageBasisPoints }) } },
            ],
            REFRESH_QUOTE: [
              {
                guard: "isFormValid",
                target: ".waiting_quote",
                actions: [
                  "sendToBackground1csQuoterRefPause",
                  "cancelSendToBackground1csQuoterRefNewQuoteInput",
                  "clearQuote",
                  "clearError",
                  "clear1csError",
                  { type: "updateFormValuesWithQuoteData" },
                  "parseFormValues",
                  "updateUIAmount",
                  "resetLiquidityProbeStatuses",
                  "sendToBackground1csQuoterRefNewQuoteInput",
                ],
              },
            ],
          },
          states: {
            idle: {},
            validating: {
              always: [
                { target: "waiting_quote", guard: "isFormValid", actions: ["resetLiquidityProbeStatuses", "sendToBackground1csQuoterRefNewQuoteInput"] },
                "idle",
              ],
            },
            waiting_quote: {
              on: {
                NEW_1CS_QUOTE: [
                  {
                    guard: "shouldRetryQuoteWithAmountProbe",
                    actions: [
                      "process1csQuote",
                      "updateFormValuesWithQuoteData",
                      "parseFormValues",
                      "updateUIAmount",
                      "log1csNoLiquidity",
                      "emitSwapQuoteRequested",
                      "resetLiquidityProbeStatuses",
                      "markAmountProbePending",
                      "sendToBackground1csQuoterRefNewQuoteInput",
                    ],
                  },
                  {
                    target: "idle",
                    actions: [
                      "process1csQuote",
                      "updateFormValuesWithQuoteData",
                      "parseFormValues",
                      "updateUIAmount",
                      "log1csNoLiquidity",
                      "emitSwapQuoteRequested",
                    ],
                  },
                ],
              },
            },
            reviewing: {},
          },
          initial: "idle",
        },
        submitting_1cs: {
          invoke: {
            id: "swapRef1cs",
            src: "swap1csActor",
            input: ({ context: e, event: t, self: r }) => {
              (0, g.assertEvent)(t, "submit"),
                (0, s.assert)(
                  null != e.parsedFormValues.amountIn &&
                    e.parsedFormValues.amountIn.amount > 0n &&
                    null != e.parsedFormValues.amountOut &&
                    e.parsedFormValues.amountOut.amount > 0n &&
                    e.quote &&
                    "ok" === e.quote.tag,
                  "Invalid input for submitting_1cs",
                ),
                (0, s.assert)(e.user?.identifier != null, "user address is not set"),
                (0, s.assert)(e.user?.method != null, "user chain type is not set");
              let o = e.submissionRoute,
                a = o?.tokenIn ?? e.parsedFormValues.tokenIn,
                i = o?.amountIn ?? e.parsedFormValues.amountIn,
                u = o?.tokenOut ?? e.parsedFormValues.tokenOut,
                l = o?.amountOut ?? e.parsedFormValues.amountOut,
                d = o?.swapType ?? e.formValues.swapType,
                p = d === n.QuoteRequest.swapType.EXACT_INPUT,
                c = r.getSnapshot().children.depositedBalanceRef,
                m = (0, eW.balancesSelector)(c?.getSnapshot())[a.defuseAssetId];
              return (
                (0, s.assert)(null != m, "amountInTokenBalance is invalid"),
                {
                  tokenIn: a,
                  tokenOut: u,
                  isRwaInput: (0, ew.isRwaToken)(a),
                  isRwaOutput: (0, ew.isRwaToken)(u),
                  amountIn: i,
                  amountOut: l,
                  amountInTokenBalance: m,
                  swapType: d,
                  slippageBasisPoints: o?.slippageBasisPoints ?? e.slippageBasisPoints,
                  defuseUserId: o?.ownerIntentsUserId ?? eN.authIdentity.authHandleToIntentsUserId(e.user.identifier, e.user.method),
                  deadline: eD(6e5, (e.quote.value.timeEstimate ?? 0) * 1e3),
                  referral: e.referral,
                  userAddress: t.params.userAddress,
                  userChainType: t.params.userChainType,
                  nearClient: t.params.nearClient,
                  isConfidential: null == o ? e.isConfidential : "confidential" === o.source,
                  previousOppositeAmount: {
                    amount: BigInt(p ? (o?.amountOut.amount ?? e.quote.value.tokenDeltas[1][1]) : -e.quote.value.tokenDeltas[0][1]),
                    decimals: p ? u.decimals : a.decimals,
                  },
                  parentRef: r,
                  quoteClient: o?.quoteClient ?? e.quoteClient,
                }
              );
            },
            onDone: [
              {
                target: "editing",
                guard: { type: "isOk", params: ({ event: e }) => e.output },
                actions: [
                  "sendToBackground1csQuoterRefPause",
                  "cancelSendToBackground1csQuoterRefNewQuoteInput",
                  "resetParsedFormValueAmounts",
                  "resetFormValueAmounts",
                  "clearQuote",
                  "resetLiquidityProbeStatuses",
                  "clearSubmissionRoute",
                  { type: "setIntentCreationResult", params: ({ event: e }) => e.output },
                  (0, eu.sendTo)("depositedBalanceRef", ({ event: e }) => {
                    if (((0, s.assert)("ok" === e.output.tag), null != e.output.value.depositAddress))
                      return { type: "ADD_ACCOUNT", params: { accountId: eN.authIdentity.authHandleToIntentsUserId(e.output.value.depositAddress, "near") } };
                  }),
                  "emitEventIntentPublished",
                ],
              },
              {
                target: "editing.reviewing",
                actions: [
                  { type: "emitSwapJourneyError", params: ({ event: e }) => ({ ...("err" === e.output.tag ? e.output.value : { reason: "unknown" }) }) },
                  "clearSubmissionRoute",
                  { type: "setIntentCreationResult", params: ({ event: e }) => e.output },
                ],
              },
            ],
            onError: {
              target: "editing",
              actions: [
                { type: "emitSwapJourneyError", params: { reason: "unknown" } },
                "clearSubmissionRoute",
                ({ event: e }) => {
                  ea.logger.error(e.error);
                },
              ],
            },
          },
          on: {
            NEW_1CS_QUOTE: {
              guard: "isQuoteForCurrentForm",
              actions: ["process1csQuote", "updateFormValuesWithQuoteData", "updateUIAmount", "log1csNoLiquidity"],
            },
          },
        },
      },
      initial: "editing",
    });
    e.s(["swapUIMachine", 0, e$], 144045);
    let eY = (0, l.createActorContext)(e$);
    function ez({ tokenPrices: e }) {
      let t = eY.useActorRef();
      return (
        (0, d.useEffect)(() => {
          t.send({ type: "SET_TOKEN_PRICES", params: { tokenPrices: e } });
        }, [t, e]),
        null
      );
    }
    e.s(
      [
        "SwapUIMachineContext",
        0,
        eY,
        "SwapUIMachineProvider",
        0,
        function ({ children: e, initialTokenIn: l, initialTokenOut: c, tokenList: m, signMessage: g, referral: E, tokenPriceOverrides: I }) {
          let { setValue: f } = (0, p.useFormContext)(),
            R = (0, u.getAppFeeRecipient)(),
            y = l || m[0],
            _ = (0, o.resolveSwapOutputToken)({ tokenIn: y, tokenOut: c ?? m[1], tokenList: m }),
            T = (0, a.usePrivateModeStore)((e) => e.isPrivateModeEnabled),
            A = (0, i.useSlippageStore)((e) => (0, i.percentToSlippageBasisPoints)(e.slippagePercent)),
            { data: C } = (0, r.useTokensUsdPrices)(),
            N = (0, d.useMemo)(() => ({ ...(0, r.toTokenPrices)(C), ...I }), [I, C]);
          return (
            (0, s.assert)(y && _, "TokenIn and TokenOut must be defined"),
            (0, t.jsxs)(
              eY.Provider,
              {
                options: { input: { tokenIn: y, tokenOut: _, tokenList: m, referral: E, slippageBasisPoints: A, isConfidential: T, appFeeRecipient: R } },
                logic: e$.provide({
                  actions: {
                    updateUIAmount: ({ context: e }) => {
                      let t = e.quote,
                        r = e.formValues.swapType === n.QuoteRequest.swapType.EXACT_INPUT ? "amountOut" : "amountIn";
                      null === t || "err" === t.tag
                        ? f(r, e.formValues[r], { shouldValidate: !1 })
                        : ("" !== e.formValues.amountIn || "" !== e.formValues.amountOut) && f(r, e.formValues[r], { shouldValidate: !0 });
                    },
                  },
                  actors: { swap1csActor: eT({ signMessage: g }) },
                }),
                children: [(0, t.jsx)(ez, { tokenPrices: N }), e],
              },
              T ? "confidential" : "public",
            )
          );
        },
      ],
      654409,
    );
    let eZ = (0, ee.createServerReference)("408af42c3ad9dd1d45ffb8aa03aa4a9ce31c8a2b1e", ee.callServer, void 0, ee.findSourceMapURL, "getEarnQuote");
    e.s(
      [
        "createEarnQuoteClient",
        0,
        function (e = {}) {
          return Object.assign(
            (t) => {
              let { isAuthenticated: n, ...r } = t;
              return eZ(e.landInConfidential ? { ...r, landInConfidential: !0 } : r);
            },
            { confidentialPurpose: "earn" },
          );
        },
      ],
      641395,
    );
  },
]);

//# debugId=0fccf545-9fb7-09c7-93a1-87c84be2c9a7
//# sourceMappingURL=0lbg4u13abiux.js.map
