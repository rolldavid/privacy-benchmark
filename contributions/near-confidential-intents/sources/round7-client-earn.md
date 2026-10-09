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
    n && ((e._debugIds || (e._debugIds = {}))[n] = "26f91606-2e71-0c0d-3b4a-842a32e9a19b");
  } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  192580,
  (e) => {
    "use strict";
    function t(e, t, n) {
      return e <= 0 ? 0 : e * (1 + t / 100) ** n;
    }
    function n(e) {
      return 1.08 * Math.max(...e, 1);
    }
    function a(e, t, n, a, s, l) {
      let i = Math.max(s - l.top - l.bottom, 1);
      return { x: (n / 20) * a, y: l.top + (1 - e / t) * i };
    }
    e.s([
      "DEFAULT_PROJECTION_PRINCIPAL",
      0,
      1e3,
      "buildProjectionSeries",
      0,
      function (e, n, a = 20, s = 80) {
        return Array.from({ length: s + 1 }, (l, i) => t(e, n, (a * i) / s));
      },
      "formatProjectionAmount",
      0,
      function (e) {
        return new Intl.NumberFormat("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(e);
      },
      "formatProjectionAxisAmount",
      0,
      function (e) {
        return new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 1 }).format(e);
      },
      "projectValue",
      0,
      t,
      "projectionAxisTicks",
      0,
      function (e, t = 6) {
        if (!(e > 0)) return [0];
        let n = e / Math.max(t - 1, 1),
          a = 10 ** Math.floor(Math.log10(n)),
          s = n / a,
          l = (s >= Math.sqrt(50) ? 10 : s >= Math.sqrt(10) ? 5 : s >= Math.sqrt(2) ? 2 : 1) * a,
          i = [];
        for (let t = 0; t <= e + 0.01 * l; t += l) i.push(Number(t.toPrecision(12)));
        return i;
      },
      "projectionChartPaths",
      0,
      function (e, t, s, l) {
        if (e.length < 2) return { line: "", area: "" };
        let i = n(e),
          o = e.map((n, o) => a(n, i, (o / (e.length - 1)) * 20, t, s, l)),
          r = o[0],
          u = o.at(-1);
        if (null == r || null == u) return { line: "", area: "" };
        let d = o.map((e, t) => `${0 === t ? "M" : "L"} ${e.x.toFixed(2)} ${e.y.toFixed(2)}`).join(" "),
          c = s - l.bottom,
          m = `${d} L ${u.x.toFixed(2)} ${c.toFixed(2)} L ${r.x.toFixed(2)} ${c.toFixed(2)} Z`;
        return { line: d, area: m };
      },
      "projectionHorizonYears",
      0,
      function (e) {
        return [e, e + 10, e + 20];
      },
      "projectionHoverLabel",
      0,
      function (e, t) {
        return t <= 0 ? "Now" : `Year ${e + t}`;
      },
      "projectionPlotPoint",
      0,
      a,
      "projectionScaleMax",
      0,
      n,
      "resolveProjectionPrincipal",
      0,
      function (e, t = null) {
        let n = (function (e) {
          let t = e.trim().replace(/,/g, "");
          if ("" === t) return null;
          let n = Number(t);
          return !Number.isFinite(n) || n <= 0 ? null : n;
        })(e);
        return null != n ? n : null != t && Number.isFinite(t) && t > 0 ? t : 1e3;
      },
      "snapProjectionYear",
      0,
      function (e) {
        return Number.isFinite(e) ? Math.min(20, Math.max(0, Math.round(20 * e))) : 0;
      },
    ]);
  },
  127247,
  (e) => {
    "use strict";
    var t = e.i(789477),
      n = e.i(696150);
    e.s([
      "EARN_PROJECTION_INSET",
      0,
      { top: 8, bottom: 0 },
      "EARN_PROJECTION_VIEWBOX_HEIGHT",
      0,
      100,
      "EARN_PROJECTION_VIEWBOX_WIDTH",
      0,
      100,
      "EarnProjectionPlot",
      0,
      function ({ line: e, area: a }) {
        let s = (0, n.useId)().replaceAll(":", ""),
          l = `earn-projection-fill-${s}`,
          i = `earn-projection-hatch-${s}`,
          o = `earn-projection-shape-${s}`,
          r = `earn-projection-fade-${s}`,
          u = `earn-projection-fade-mask-${s}`,
          d =
            "" === a
              ? ""
              : `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"><path fill="white" d="${a}"/></svg>`)}`;
        return (0, t.jsxs)("div", {
          className: "pointer-events-none absolute inset-0 text-green-700 dark:text-green-500",
          children: [
            (0, t.jsxs)("svg", {
              viewBox: "0 0 100 100",
              preserveAspectRatio: "none",
              className: "absolute inset-0 size-full",
              "aria-hidden": "true",
              focusable: "false",
              children: [
                (0, t.jsx)("defs", {
                  children: (0, t.jsxs)("linearGradient", {
                    id: l,
                    x1: "0",
                    y1: "0",
                    x2: "0",
                    y2: "1",
                    children: [
                      (0, t.jsx)("stop", { offset: "0%", stopColor: "currentColor", stopOpacity: 0.24 }),
                      (0, t.jsx)("stop", { offset: "100%", stopColor: "currentColor", stopOpacity: 0.04 }),
                    ],
                  }),
                }),
                (0, t.jsx)("path", { d: a, fill: `url(#${l})` }),
                (0, t.jsx)("path", {
                  d: e,
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: 3,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  vectorEffect: "non-scaling-stroke",
                }),
              ],
            }),
            "" === d
              ? null
              : (0, t.jsxs)("svg", {
                  className: "absolute inset-0 size-full",
                  "aria-hidden": "true",
                  focusable: "false",
                  children: [
                    (0, t.jsxs)("defs", {
                      children: [
                        (0, t.jsx)("pattern", {
                          id: i,
                          width: 6,
                          height: 6,
                          patternUnits: "userSpaceOnUse",
                          children: (0, t.jsx)("path", { d: "M5 0h1L0 6V5zM6 5v1H5z", fill: "currentColor", fillRule: "evenodd" }),
                        }),
                        (0, t.jsx)("mask", { id: o, children: (0, t.jsx)("image", { href: d, width: "100%", height: "100%", preserveAspectRatio: "none" }) }),
                        (0, t.jsxs)("linearGradient", {
                          id: r,
                          x1: "0",
                          y1: "0",
                          x2: "0",
                          y2: "1",
                          children: [
                            (0, t.jsx)("stop", { offset: "0%", stopColor: "#ffffff" }),
                            (0, t.jsx)("stop", { offset: "40%", stopColor: "#ffffff" }),
                            (0, t.jsx)("stop", { offset: "100%", stopColor: "#000000" }),
                          ],
                        }),
                        (0, t.jsx)("mask", {
                          id: u,
                          maskContentUnits: "objectBoundingBox",
                          children: (0, t.jsx)("rect", { width: "1", height: "1", fill: `url(#${r})` }),
                        }),
                      ],
                    }),
                    (0, t.jsx)("g", {
                      mask: `url(#${o})`,
                      children: (0, t.jsx)("rect", { width: "100%", height: "100%", fill: `url(#${i})`, mask: `url(#${u})`, opacity: 0.28 }),
                    }),
                  ],
                }),
          ],
        });
      },
    ]);
  },
  623278,
  23632,
  (e) => {
    "use strict";
    var t = e.i(789477);
    let n = {
      "kV-gtSOLb": (0, t.jsxs)(t.Fragment, {
        children: [
          "This yield vault is managed by the",
          " ",
          (0, t.jsx)("a", {
            href: "https://www.gauntlet.xyz",
            target: "_blank",
            rel: "noreferrer",
            className: "text-gray-900 underline dark:text-white",
            children: "Gauntlet",
          }),
          " ",
          "team and is built on Solana. Deposit and withdraw in SOL, with a $25 minimum for each. Your balance is shown as a USDC estimate and changes with the SOL price and vault yield.",
        ],
      }),
      gtUSDCp: (0, t.jsxs)(t.Fragment, {
        children: [
          "This yield vault is managed by the",
          " ",
          (0, t.jsx)("a", {
            href: "https://www.gauntlet.xyz",
            target: "_blank",
            rel: "noreferrer",
            className: "text-gray-900 underline dark:text-white",
            children: "Gauntlet",
          }),
          " ",
          "team and is built on the Base blockchain.",
        ],
      }),
      TLO: (0, t.jsxs)(t.Fragment, {
        children: [
          "This yield vault is provided by Taler, a NEAR ecosystem company, and managed by the",
          " ",
          (0, t.jsx)("a", {
            href: "https://www.628labs.xyz",
            target: "_blank",
            rel: "noreferrer",
            className: "text-gray-900 underline dark:text-white",
            children: "TAU Labs",
          }),
          " ",
          "team, and is built on Ethereum.",
        ],
      }),
    };
    e.s(["VAULT_INFO_BY_SYMBOL", 0, n], 623278);
    var a = e.i(155978),
      s = e.i(328283),
      l = e.i(711776),
      i = e.i(67781),
      o = e.i(493266),
      r = e.i(966321),
      u = e.i(696150),
      d = e.i(268514),
      c = e.i(962595),
      m = e.i(120993),
      p = e.i(565982),
      f = e.i(723980),
      h = e.i(833118),
      x = e.i(634181);
    function g({ vault: e, userAddress: n, userChainType: a }) {
      let s = (0, u.useRef)(null),
        l = null != n && null != a ? m.authIdentity.authHandleToIntentsUserId(n, a) : null,
        i = `${l ?? ""}:${e.vaultToken.defuseAssetId}`,
        { balances: o } = (0, x.useVaultDepositedBalances)([e], n ?? null, a ?? null, { isConfidential: !0 }),
        r = o.get(e.vaultToken.defuseAssetId),
        d = r?.hasBalance ?? !1,
        c = d ? (r?.usdcValue != null ? `~${(0, h.formatValueAmount)(r.usdcValue)} USDC` : "Loading") : "0 USDC",
        y = null != e.apr ? `${e.apr.toFixed(2)}%` : "—",
        k = e.metadata?.rateType ?? "APR",
        b = e.metadata?.tvlUsd != null ? (0, f.formatUsdAmount)(e.metadata.tvlUsd) : "—",
        v = e.metadata?.displayFees ?? [];
      return (
        (0, u.useEffect)(() => {
          d && "Loading" !== c && (s.current = { key: i, label: c });
        }, [i, d, c]),
        (0, t.jsxs)("dl", {
          className: "divide-y divide-gray-200 pt-2 xl:pt-0 dark:divide-white/10",
          children: [
            (0, t.jsxs)("div", {
              className: "grid grid-cols-2 gap-5 pb-6",
              children: [
                (0, t.jsxs)("div", {
                  className: "flex flex-col items-start gap-1.5",
                  children: [
                    (0, t.jsx)("dt", { className: "font-medium text-gray-500 text-sm/5 dark:text-gray-400", children: k }),
                    (0, t.jsx)("dd", { className: "font-semibold text-gray-900 text-xl/6 tracking-tight dark:text-white", children: y }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: "flex flex-col items-start gap-1.5",
                  children: [
                    (0, t.jsx)("dt", { className: "font-medium text-gray-500 text-sm/5 dark:text-gray-400", children: "TVL" }),
                    (0, t.jsx)("dd", { className: "font-semibold text-gray-900 text-xl/6 tracking-tight dark:text-white", children: b }),
                  ],
                }),
              ],
            }),
            (0, t.jsx)("div", {
              className: "space-y-4 pt-6 pb-3",
              children: v.map((e) =>
                (0, t.jsxs)(
                  "div",
                  {
                    className: "grid grid-cols-2 items-baseline gap-5",
                    children: [
                      (0, t.jsxs)("dt", {
                        className: "flex flex-col items-start gap-1 font-medium text-gray-500 text-sm/5 dark:text-gray-400",
                        children: [
                          (0, t.jsx)("span", { children: e.label }),
                          null != e.badge && (0, t.jsx)(p.default, { variant: "info", size: "sm", hideIcon: !0, children: e.badge }),
                        ],
                      }),
                      (0, t.jsxs)("dd", {
                        className: "font-semibold text-gray-900 text-sm/5 tracking-tight dark:text-white",
                        children: [
                          e.value,
                          null != e.description &&
                            (0, t.jsxs)("span", { className: "font-medium text-gray-500 tracking-normal dark:text-gray-400", children: [" ", e.description] }),
                        ],
                      }),
                    ],
                  },
                  e.label,
                ),
              ),
            }),
          ],
        })
      );
    }
    var y = e.i(657585),
      k = e.i(654409),
      b = e.i(18578),
      v = e.i(382075);
    function w({ paymentToken: e, prefetchedBalances: t = null, lockToPaymentFamily: n = !1 }) {
      let a = k.SwapUIMachineContext.useActorRef(),
        s = (0, v.useSelector)(a, (e) => e.children.depositedBalanceRef),
        i = (0, v.useSelector)(s, y.balancesSelector),
        o = (0, v.useSelector)(s, y.isBalancesLoadedSelector) ? i : (t ?? i),
        r = k.SwapUIMachineContext.useSelector((e) => e.context.parsedFormValues.amountIn),
        d = k.SwapUIMachineContext.useSelector((e) => e.context.formValues.tokenIn),
        m = (0, u.useMemo)(() => (n ? [e] : (0, c.getEarnPaymentTokens)(e)), [n, e]),
        p = (0, u.useMemo)(
          () => (null == o ? null : (0, c.resolveEarnDepositTokenIn)(e, m, o, r, n && !(0, l.isSamePaymentFamily)(e, d) ? void 0 : d)),
          [o, d, n, r, e, m],
        );
      return (
        (0, u.useEffect)(() => {
          if (null == p) return;
          let e = a.getSnapshot(),
            t = e.context.formValues.tokenIn;
          if ((0, b.getDefuseAssetId)(t) === p.defuseAssetId) return;
          let { amountIn: n, amountOut: s, tokenOut: l, swapType: i } = e.context.formValues;
          a.send({ type: "input", params: { tokenIn: p, tokenOut: l, amountIn: n, amountOut: s, swapType: i } });
        }, [d, p, a]),
        null
      );
    }
    var C = e.i(735645),
      T = e.i(528973),
      j = e.i(75175);
    e.i(984705);
    var S = e.i(32796),
      I = e.i(557518),
      E = e.i(333432),
      A = e.i(475317),
      N = e.i(786491),
      P = e.i(973736),
      M = e.i(881287),
      U = e.i(494438),
      V = e.i(895756),
      L = e.i(266437);
    e.i(484236);
    var D = e.i(49076),
      F = e.i(658077),
      R = e.i(684158),
      O = e.i(2358),
      $ = e.i(610901),
      _ = e.i(593562),
      B = e.i(241258),
      q = e.i(377589),
      H = e.i(484776),
      z = e.i(6661),
      W = e.i(144045),
      G = e.i(517494),
      Q = e.i(515725),
      Y = e.i(482810),
      X = e.i(718183),
      J = e.i(925419),
      K = e.i(641395),
      Z = e.i(166786);
    let ee = (0, Y.percentToSlippageBasisPoints)(0.1),
      et = (0, u.createContext)({ onSubmit: () => {}, isEarnDisabled: !0 });
    function en({
      children: e,
      mode: n,
      paymentToken: a,
      tokenIn: s,
      tokenOut: l,
      tokenList: i,
      signMessage: o,
      userAddress: r,
      userChainType: m,
      quickEarn: p,
    }) {
      let { setValue: f } = (0, d.useFormContext)(),
        h = (0, X.getAppFeeRecipient)(),
        x = (0, _.usePrivateModeStore)((e) => e.isPrivateModeEnabled);
      (0, G.assert)(s && l, "TokenIn and TokenOut must be defined");
      let g = "deposit" === n && p?.source === "main",
        y = (0, u.useMemo)(() => (0, K.createEarnQuoteClient)({ landInConfidential: g }), [g]);
      return (0, t.jsxs)(
        k.SwapUIMachineContext.Provider,
        {
          options: { input: { tokenIn: s, tokenOut: l, tokenList: i, slippageBasisPoints: ee, isConfidential: x, appFeeRecipient: h, quoteClient: y } },
          logic: W.swapUIMachine.provide({
            actions: {
              updateUIAmount: ({ context: e }) => {
                let t = e.quote,
                  n = e.formValues.swapType === I.QuoteRequest.swapType.EXACT_INPUT ? "amountOut" : "amountIn";
                null === t || "err" === t.tag
                  ? f(n, e.formValues[n], { shouldValidate: !1 })
                  : ("" !== e.formValues.amountIn || "" !== e.formValues.amountOut) && f(n, e.formValues[n], { shouldValidate: !0 });
              },
            },
            actors: { swap1csActor: (0, z.createSwapIntent1csMachine)({ signMessage: o, minPercentChange: c.EARN_ESTIMATE_CHANGE_THRESHOLD_PERCENT }) },
          }),
          children: [
            (0, t.jsx)(ea, { userAddress: r, userChainType: m }),
            (0, t.jsx)(es, {}),
            (0, t.jsx)(el, { mode: n, paymentToken: a, userAddress: r, userChainType: m, lockToPaymentFamily: null != p, children: e }),
          ],
        },
        `${n}-${x ? "confidential" : "public"}-${g ? "land-conf" : "land-same"}`,
      );
    }
    function ea({ userAddress: e, userChainType: t }) {
      let n = k.SwapUIMachineContext.useActorRef();
      return (
        (0, u.useEffect)(() => {
          null == e || null == t ? n.send({ type: "LOGOUT" }) : n.send({ type: "LOGIN", params: { userAddress: e, userChainType: t } });
        }, [n, e, t]),
        null
      );
    }
    function es() {
      let e = k.SwapUIMachineContext.useActorRef(),
        { registerSwap: t, hasActiveSwap: n } = (0, O.useSwapTrackerMachine)();
      return (
        (0, u.useEffect)(() => {
          let a = e.on("*", (a) => {
            if ("INTENT_PUBLISHED" === a.type) {
              (0, V.invalidateBalanceQueries)();
              let a = e.getSnapshot(),
                s = a.context.intentCreationResult,
                { tokenIn: l, tokenOut: i } = a.context.formValues,
                o = a.context.isConfidential;
              if (s?.tag === "ok") {
                let { intentHash: e, intentDescription: a } = s.value,
                  r = "depositAddress" in s.value ? s.value.depositAddress : void 0,
                  u = "depositMemo" in s.value ? s.value.depositMemo : void 0,
                  d = (0, R.getSwapTrackerId)({ intentHash: e, depositAddress: r, depositMemo: u });
                null == d ||
                  n(d) ||
                  t({ intentHash: e, depositAddress: r, depositMemo: u, tokenIn: l, tokenOut: i, intentDescription: a, is1cs: !0, isConfidential: o });
              }
            }
            "INTENT_SETTLED" === a.type && (0, V.invalidateBalanceQueries)();
          });
          return () => {
            a.unsubscribe();
          };
        }, [e, t, n]),
        null
      );
    }
    function el({ children: e, mode: n, paymentToken: a, userAddress: s, userChainType: i, lockToPaymentFamily: o }) {
      let r = k.SwapUIMachineContext.useActorRef(),
        { isEarnDisabled: d } = (0, u.useContext)(Q.FeatureFlagsContext);
      return (0, t.jsx)(et.Provider, {
        value: {
          onSubmit: () =>
            (function ({ actorRef: e, mode: t, paymentToken: n, userAddress: a, userChainType: s, lockToPaymentFamily: i, isEarnDisabled: o }) {
              if (o) return;
              if (null == a || null == s) return void B.logger.warn("No user address provided");
              let r = e.getSnapshot().context.formValues.tokenIn,
                u = !0 === i ? (0, l.isSamePaymentFamily)(n, r) : (0, Z.isSupportedEarnPaymentToken)(n, r);
              "deposit" !== t || u
                ? (e.getSnapshot().context.isConfidential ||
                    (0, J.trackEvent)("deposit" === t ? "earn_vault_deposit_requested" : "earn_vault_withdraw_requested"),
                  e.send({ type: "submit", params: { userAddress: a, userChainType: s, nearClient: H.nearClient } }))
                : B.logger.error(Error("Earn deposit submission rejected for unsupported token"), {
                    paymentTokenId: (0, b.getTokenId)(n),
                    tokenInId: (0, b.getTokenId)(r),
                  });
            })({ actorRef: r, mode: n, paymentToken: a, userAddress: s, userChainType: i, lockToPaymentFamily: o, isEarnDisabled: d }),
          isEarnDisabled: d,
        },
        children: e,
      });
    }
    let ei = ["confirm", "process", "complete"];
    var eo = e.i(780545);
    function er(e) {
      return e.context.formValues;
    }
    var eu = e.i(150788),
      ed = e.i(958115),
      ec = e.i(384681),
      em = e.i(470733);
    function ep({
      inputId: e,
      symbol: n,
      icon: a,
      value: s,
      onChange: l,
      onMax: i,
      max: o,
      maxLabel: r,
      usdValue: u,
      disabled: d = !1,
      exceedsBalance: c,
      errorMessage: m,
      tokenSelector: p,
    }) {
      return (0, t.jsxs)("div", {
        className: (0, em.default)(
          "-outline-offset-1 flex w-full flex-col overflow-hidden rounded-2xl bg-white outline dark:bg-white/3",
          c || null != m
            ? "-outline-offset-2 outline-2 outline-red-500 dark:outline-red-500/50 dark:focus-within:outline-red-500"
            : "has-[input:focus]:-outline-offset-2 outline-gray-200 has-[input:focus]:outline-2 has-[input:focus]:outline-gray-400 dark:outline-white/5",
        ),
        children: [
          (0, t.jsxs)("label", {
            htmlFor: e,
            className: "relative flex w-full flex-1 cursor-text flex-col items-center justify-center px-0.5 pt-10 pb-7",
            children: [
              (0, t.jsxs)("span", { className: "sr-only", children: ["Enter amount ", n] }),
              (0, t.jsxs)("div", {
                className: "flex max-w-full items-baseline justify-center gap-1",
                children: [
                  (0, t.jsx)("input", {
                    ...ed.drawerSwipeIgnoreProps,
                    id: e,
                    type: "text",
                    inputMode: "decimal",
                    pattern: "[0-9]*[.]?[0-9]*",
                    autoComplete: "off",
                    placeholder: "0",
                    disabled: d,
                    value: s,
                    onChange: (e) => {
                      let t = e.target.value.replace(",", ".").replace(/[^0-9.]/g, ""),
                        n = t.split(".");
                      l(n.length > 2 ? `${n[0]}.${n.slice(1).join("")}` : t);
                    },
                    className: (0, em.default)(
                      "field-sizing-content min-h-11 min-w-0 max-w-full appearance-none bg-transparent text-center font-semibold text-gray-900 tracking-tight outline-none dark:text-white",
                      "placeholder:font-semibold placeholder:text-gray-300 placeholder:tracking-tight dark:placeholder:text-gray-500",
                      s.length >= 15 && "text-2xl/none",
                      s.length >= 8 && s.length < 15 && "text-3xl/none",
                      s.length < 8 && "text-4xl/none",
                      d && "opacity-50",
                    ),
                  }),
                  (0, t.jsx)("span", { className: "shrink-0 font-semibold text-2xl/none text-gray-300 tracking-tight dark:text-gray-500", children: n }),
                ],
              }),
              (0, t.jsx)("div", {
                className: "mt-0.5",
                children: c
                  ? (0, t.jsx)(ec.default, { className: "text-center", children: "Amount is higher than your available balance." })
                  : null != m
                    ? (0, t.jsx)(ec.default, { className: "text-center", children: m })
                    : (0, t.jsx)("div", {
                        className: "text-center font-semibold text-base/5 text-gray-500 dark:text-gray-400",
                        children: (0, f.formatUsdAmount)(u ?? 0),
                      }),
              }),
            ],
          }),
          (0, t.jsxs)("div", {
            className: "flex items-center justify-between gap-2 px-3 pb-3",
            children: [
              (0, t.jsxs)("div", {
                className: "flex min-w-0 flex-1 items-center gap-2",
                children: [
                  p ?? (0, t.jsx)(eu.default, { icon: a, sizeClassName: "size-9" }),
                  (0, t.jsxs)("span", {
                    className: "flex min-w-0 flex-col items-start gap-1",
                    children: [
                      (0, t.jsx)("span", {
                        className: "font-medium text-gray-500 text-sm/none dark:text-gray-400",
                        children: null != p ? "Pay with" : "Available",
                      }),
                      (0, t.jsx)("span", {
                        className: "block max-w-full truncate font-semibold text-gray-700 text-sm/none min-[400px]:text-base/none dark:text-white",
                        "data-testid": "earn-available-amount",
                        children: r,
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsx)(T.default, { variant: "secondary", onClick: i, disabled: d || 0n === o, children: "Use max" }),
            ],
          }),
        ],
      });
    }
    var ef = e.i(971754),
      eh = e.i(336865),
      ex = e.i(145803),
      eg = e.i(511764),
      ey = e.i(757668),
      ek = e.i(162831);
    function eb({
      mode: e,
      amountIn: n,
      inputSymbol: a,
      stage: s,
      done: l,
      isError: i = !1,
      intentHash: o,
      txHash: r,
      priceChangeDialog: u,
      onPriceChangeConfirm: d,
      onPriceChangeCancel: m,
      onDone: p,
      onVisitEarn: h,
    }) {
      let x = null != r ? (0, eh.blockExplorerTxLinkFactory)("near", r) : null,
        g = i ? "failed" : l ? "success" : "processing";
      return (0, t.jsxs)("div", {
        "data-testid": "earn-status",
        "data-earn-status": g,
        className:
          "-outline-offset-1 flex w-full flex-col space-y-4 overflow-hidden rounded-2xl bg-white p-5 outline outline-gray-200 dark:bg-gray-850 dark:outline-white/5",
        children: [
          (0, t.jsxs)("h3", {
            className: "font-semibold text-gray-900 text-xl/7 tracking-tight dark:text-white",
            children: ["deposit" === e ? "Depositing" : "Withdrawing", " ", (0, f.formatDisplayAmount)(n), " ", a],
          }),
          (0, t.jsx)(ex.ProgressSteps, {
            stages: ei,
            stageLabels:
              "deposit" === e
                ? { confirm: "Confirm in wallet", process: "Depositing", complete: "Deposited" }
                : { confirm: "Confirm in wallet", process: "Starting withdrawal", complete: "Withdrawal requested" },
            displayStage: s,
            displayIndex: ei.indexOf(s),
            isError: i,
            isSuccess: l,
            size: "md",
          }),
          null != u &&
            (0, t.jsxs)("div", {
              className: "space-y-3",
              children: [
                (0, t.jsxs)(C.default, {
                  variant: "warning",
                  children: [
                    "Due to transaction mechanics, your",
                    " ",
                    "deposit" === e ? "deposit" : "withdrawal",
                    " will have a maximum fee of ",
                    (0, c.formatEstimateChangePercent)(u.previousOppositeAmount, u.pendingNewOppositeAmount),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: "grid grid-cols-2 gap-1.5",
                  children: [
                    (0, t.jsx)(T.default, { type: "button", variant: "secondary", size: "xl", onClick: m, children: "Cancel" }),
                    (0, t.jsx)(T.default, { type: "button", size: "xl", onClick: d, "data-testid": "confirm-new-price-button", children: "Accept" }),
                  ],
                }),
              ],
            }),
          null != o &&
            (0, t.jsxs)(eg.default, {
              children: [
                (0, t.jsxs)(eg.default.Row, {
                  label: "Reference ID",
                  children: [(0, ey.midTruncate)(o), (0, t.jsx)(ef.CopyButton, { text: o, ariaLabel: "Copy reference ID" })],
                }),
                null != x &&
                  null != r &&
                  (0, t.jsxs)(eg.default.Row, {
                    label: "Transaction hash",
                    children: [(0, ey.midTruncate)(r), (0, t.jsx)(ef.CopyButton, { text: r, ariaLabel: "Copy transaction hash" })],
                  }),
              ],
            }),
          (l || i) &&
            (0, t.jsxs)("div", {
              className: "space-y-3",
              children: [
                (0, t.jsx)(T.default, { size: "xl", fullWidth: !0, onClick: p, children: "Close" }),
                l &&
                  !i &&
                  h &&
                  (0, t.jsx)("div", {
                    className: "text-center",
                    children: (0, t.jsx)(ek.default, {
                      href: "/earn",
                      onClick: h,
                      className:
                        "inline-block font-medium text-gray-500 text-sm/5 hover:text-gray-900 hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-gray-500 focus-visible:outline-offset-2 dark:text-gray-400 dark:hover:text-white",
                      children: "View in Earn →",
                    }),
                  }),
              ],
            }),
        ],
      });
    }
    function ev(e) {
      let {
        inFlight: n,
        statusView: a,
        amountCard: s,
        isLoadingQuote: o,
        submitState: r,
        leftoverWarning: m,
        onSubmit: p,
        intentCreationResult: x,
      } = (function ({
        mode: e,
        balanceToken: n,
        displayToken: a,
        onInFlightChange: s,
        onComplete: o,
        availableBalanceCache: r,
        onAvailableBalanceChange: m,
        prefetchedPaymentBalances: p = null,
        minimumDepositUsdc: x,
        quickEarn: g,
      }) {
        var w;
        let { setValue: C, watch: T } = (0, d.useFormContext)(),
          j = k.SwapUIMachineContext.useActorRef(),
          H = k.SwapUIMachineContext.useSelector((e) => e),
          z = H.context.intentCreationResult,
          W = H.context.priceChangeDialog,
          { data: G } = (0, U.useTokensUsdPrices)(),
          { setModalType: Q } = (0, M.useModalController)(L.ModalType.MODAL_SELECT_ASSETS),
          { tokenIn: Y } = k.SwapUIMachineContext.useSelector(er),
          X = n ?? Y,
          J = T("amountIn"),
          K = T("amountOut"),
          [ee, en] = (0, u.useState)(""),
          ea = k.SwapUIMachineContext.useSelector((e) => e.context.quote?.tag === "err"),
          es = k.SwapUIMachineContext.useSelector((e) => null == e.context.user),
          { onSubmit: el, isEarnDisabled: ei } = (0, u.useContext)(et),
          eu = H.matches("submitting_1cs"),
          ed = H.matches({ editing: "waiting_quote" }),
          ec = (0, v.useSelector)(j, (e) => (e.matches("submitting_1cs") ? e.children.swapRef1cs : void 0)),
          em = (0, v.useSelector)(ec, (e) => e?.children.confidentialSwapRef),
          ep = (0, v.useSelector)(em, (e) => (e ? (0, S.getConfidentialSwapStage)(e.value) : null)),
          ef = (0, v.useSelector)(ec, (e) =>
            e
              ? (function (e, t) {
                  if (null == e) return null;
                  if ("object" == typeof e && "Confidential" in e) {
                    let n = e.Confidential,
                      a = "object" == typeof n && null != n && "SignatureChecks" in n ? n.SignatureChecks : null;
                    return ("string" == typeof a && "Idle" !== a) || "submit" === t || "submitted" === t ? "process" : "confirm";
                  }
                  switch ((0, N.extractStateValue)(e)) {
                    case "Fetching1csQuote":
                    case "ValidatingQuote":
                    case "AwaitingPriceChangeConfirmation":
                    case "CreatingTransferMessage":
                    case "Signing":
                    default:
                      return "confirm";
                    case "VerifyingSignature":
                    case "VerifyingPublicKeyPresence":
                    case "BroadcastingIntent":
                    case "Completed":
                      return "process";
                  }
                })(e.value, ep)
              : null,
          ),
          eh = z?.tag === "ok" ? z.value.intentHash : null,
          ex = z?.tag === "ok" && "depositAddress" in z.value ? z.value.depositAddress : void 0,
          eg = z?.tag === "ok" && "depositMemo" in z.value ? z.value.depositMemo : void 0,
          ey = (0, R.getSwapTrackerId)({ intentHash: eh, depositAddress: ex, depositMemo: eg }),
          { trackedSwaps: ek } = (0, O.useSwapTrackerMachine)(),
          eb = null == ey ? void 0 : ek.find((e) => e.id === ey),
          ev = (0, v.useSelector)(eb?.actorRef, (e) => {
            if (null == e) return null;
            let t = e.context;
            return { stateValue: (0, N.extractStateValue)(e.value), status: t.status ?? null, txHash: t.txHash ?? null };
          }),
          ew = null != ex,
          eC = (0, q.useQuery)({
            queryKey: ["earn-intent-settlement", eh],
            queryFn: () => {
              if (null == eh) throw Error("intentHash is required");
              return (0, E.solverRelayWaitForSettlement)({ intentHash: eh });
            },
            enabled: null != eh && !eu && !ew,
          }),
          eT = ew ? (0, P.is1csSuccess)(ev?.status) : null != eb ? (0, P.isIntentSuccess)(ev?.stateValue ?? "") : eC.isSuccess,
          ej = ew ? (0, P.is1csError)(ev?.status) : null != eb ? (0, P.isIntentError)(ev?.stateValue ?? "") : eC.isError,
          eS = ev?.txHash ?? eC.data?.txHash ?? null,
          eI = null != eh || null != ex,
          eE = eu || (eI && !eu),
          eA = (w = { isSubmitting: eu, swapStage: ef, submitted: eI, settled: eT }).settled
            ? "complete"
            : w.submitted
              ? "process"
              : w.isSubmitting && null != w.swapStage
                ? w.swapStage
                : "confirm";
        (0, u.useEffect)(() => {
          s?.(eE);
        }, [eE, s]);
        let eN = (0, u.useRef)(g?.onDepositComplete);
        eN.current = g?.onDepositComplete;
        let eP = (0, u.useRef)(!1);
        (0, u.useEffect)(() => {
          !eT || ((0, V.invalidateBalanceQueries)(), "deposit" !== e || ej || eP.current || ((eP.current = !0), eN.current?.()));
        }, [eT, ej, e]);
        let eM = (0, v.useSelector)(j, (e) => e.children.depositedBalanceRef),
          eU = (0, v.useSelector)(eM, y.balancesSelector),
          eV = (0, v.useSelector)(eM, y.isBalancesLoadedSelector),
          eL = eV ? eU : p,
          eD = (0, v.useSelector)(eM, (0, y.balanceSelector)(Y)),
          eF = (0, u.useMemo)(() => (null == p ? null : (0, F.computeTotalBalanceDifferentDecimals)(Y, p)), [p, Y]),
          eR = (0, _.usePrivateModeStore)((e) => e.isPrivateModeEnabled),
          eO = `${e}:${eR ? "confidential" : "public"}:${(0, b.getTokenId)(Y)}`,
          e$ = (eV ? eD : null) ?? eF ?? r?.get(eO);
        (0, u.useEffect)(() => {
          null != eD && m?.(eO, eD);
        }, [eO, m, eD]);
        let e_ = null != e$ && null != H.context.parsedFormValues.amountIn && -1 === (0, i.compareAmounts)(e$, H.context.parsedFormValues.amountIn),
          eB = (0, u.useMemo)(
            () =>
              "deposit" !== e || null == n || null == eL
                ? []
                : (function (e, t) {
                    let n = [],
                      a = new Set();
                    for (let s of e) {
                      if ((0, b.isBaseToken)(s)) {
                        if ((t[s.defuseAssetId] ?? 0n) <= 0n || a.has(s.defuseAssetId)) continue;
                        a.add(s.defuseAssetId), n.push(s);
                        continue;
                      }
                      if (!(0, b.isUnifiedToken)(s)) continue;
                      let e = s.groupedTokens.filter((e) => (t[e.defuseAssetId] ?? 0n) > 0n);
                      if (0 !== e.length) {
                        if (1 === e.length) {
                          let t = e[0];
                          if (null == t || a.has(t.defuseAssetId) || a.has(s.unifiedAssetId)) continue;
                          a.add(s.unifiedAssetId), a.add(t.defuseAssetId), n.push(s);
                          continue;
                        }
                        for (let t of e) a.has(t.defuseAssetId) || (a.add(t.defuseAssetId), n.push(t));
                      }
                    }
                    return n;
                  })((0, c.getEarnPaymentTokens)(n), eL),
            [e, n, eL],
          ),
          eq = "deposit" === e && null == g && eB.length > 1,
          eH = "deposit" === e && !eq && null != n && (0, l.isSamePaymentFamily)(n, Y) ? n : Y,
          ez = (0, u.useCallback)(() => {
            eB.length < 2 ||
              Q(L.ModalType.MODAL_SELECT_ASSETS, {
                fieldName: "paymentToken",
                paymentToken: eH,
                isHoldingsEnabled: !0,
                ...(null != eL ? { balances: eL } : {}),
                chainIconMode: "always",
                subtitle: "chainName",
                tokenList: eB,
                onConfirm: (e) => {
                  let t = e.paymentToken;
                  if (null == t || null == n || !(0, Z.isSupportedEarnPaymentToken)(n, t))
                    return void B.logger.warn("Earn payment token selection rejected", {
                      paymentTokenId: null == n ? null : (0, b.getTokenId)(n),
                      selectedTokenId: null == t ? null : (0, b.getTokenId)(t),
                    });
                  let a = (0, l.resolveBaseTokenForPayment)(t, eL),
                    { tokenOut: s, swapType: i } = j.getSnapshot().context.formValues;
                  C("amountIn", ""),
                    C("amountOut", ""),
                    j.send({ type: "input", params: { tokenIn: a, tokenOut: s, amountIn: "", amountOut: "", swapType: i } });
                },
              });
          }, [eL, n, eH, eB, Q, C, j]),
          eW = eq
            ? (0, t.jsx)(A.default, {
                selected: eH,
                handleSelect: ez,
                tokens: eB,
                "aria-label": (0, b.isBaseToken)(eH) ? `Pay with ${eH.symbol} on ${eH.originChainName}` : `Pay with ${eH.symbol}`,
                dataTestId: "earn-pay-with-pill",
              })
            : void 0,
          eG = (0, D.default)(J, "deposit" === e ? Y : X, G),
          eQ = "withdraw" === e && null != a,
          eY = eQ ? (0, eo.resolveVaultSharePriceInPaymentToken)({ vaultToken: Y, paymentToken: a, tokensUsdPriceData: G }) : null,
          eX = null != eY && eY > 0,
          eJ = eQ ? a : eH,
          eK = (0, u.useMemo)(() => (eQ ? ("" !== ee ? ee : "" !== J && null != eY ? (0, h.tokenAmountToValueInput)(J, eY) : "") : J), [eQ, ee, J, eY]),
          eZ = (0, u.useCallback)(() => {
            if (null == e$) return;
            let e = (0, f.formatTokenValue)(e$.amount, e$.decimals);
            eX && null != eY && en((0, h.tokenAmountToValueInput)(e, eY)),
              C("amountIn", e),
              C("amountOut", ""),
              j.send({ type: "input", params: { amountIn: e, amountOut: "", swapType: I.QuoteRequest.swapType.EXACT_INPUT } });
          }, [eX, e$, eY, C, j]),
          e0 = (0, u.useRef)(!1);
        (0, u.useEffect)(() => {
          if (null != g && !e0.current && null != e$ && !(e$.amount <= 0n)) {
            if ("" !== J) {
              e0.current = !0;
              return;
            }
            (e0.current = !0), eZ();
          }
        }, [g, e$]);
        let e1 = (0, u.useCallback)(
            (e) => {
              let t = eX && null != eY ? (0, h.valueInputToTokenAmount)(e, Y, eY) : e;
              eQ && en(e),
                C("amountIn", t),
                C("amountOut", ""),
                j.send({ type: "input", params: { swapType: I.QuoteRequest.swapType.EXACT_INPUT, amountIn: t, amountOut: "" } });
            },
            [eX, Y, eY, eQ, C, j],
          ),
          e5 = (0, u.useCallback)(() => {
            j.send({ type: "START_NEW_SWAP" }), C("amountIn", ""), C("amountOut", ""), en(""), o?.();
          }, [j, C, o]),
          e2 = e$?.amount ?? 0n,
          e3 = "" === eK || "" === J,
          e6 = "" === K,
          e7 = null != e$ ? (0, f.formatTokenValue)(e2, e$.decimals, { fractionDigits: 4 }) : "0",
          e8 = eX && null != eY ? (0, h.parseDisplayNumber)(e7) * eY : null,
          e4 = eQ
            ? null != e$ && 0n === e2
              ? `0 ${(0, $.getTokenLabel)(eJ)}`
              : null != e8
                ? `~${(0, h.formatValueAmount)(e8)} ${(0, $.getTokenLabel)(eJ)}`
                : "Loading price"
            : null != e$
              ? `${(0, f.formatTokenValue)(e2, e$.decimals, { fractionDigits: 2 })} ${(0, $.getTokenLabel)(eJ)}`
              : `0 ${(0, $.getTokenLabel)(eJ)}`,
          e9 = "deposit" === e ? "Deposit" : "Withdraw",
          te = "deposit" === e ? H.context.formValues.tokenOut : Y,
          tt = "USDC" === (0, Z.getEarnVaultUsdUnitSymbol)(te),
          tn =
            "deposit" !== e || (null != n && (0, Z.isSupportedEarnPaymentToken)(n, Y))
              ? null
              : tt
                ? "A supported stablecoin is required"
                : `Only ${n?.symbol ?? "the configured token"} is supported`,
          ta =
            "deposit" === e && tt && null != n && "" !== K
              ? (0, eo.resolveVaultSharePriceInPaymentToken)({ vaultToken: te, paymentToken: n, tokensUsdPriceData: G })
              : null,
          ts = null == ta ? null : (0, h.parseDisplayNumber)(K) * ta,
          tl = "deposit" === e && "" !== K ? (0, eo.resolveVaultSharePriceUsd)({ vaultToken: te, tokensUsdPriceData: G }) : null,
          ti = null == tl ? null : (0, h.parseDisplayNumber)(K) * tl,
          to = (0, c.getEarnMinimumAmountError)({
            mode: e,
            minimumDepositUsdc: x,
            amountIn: eK,
            amountUsd: eG,
            quotedAmountUsdc: ts,
            quotedAmountUsd: ti,
            tokenIn: Y,
            paymentToken: "deposit" === e ? n : a,
            vaultToken: te,
          }),
          tr = tt ? e8 : (0, D.default)(e7, Y, G),
          tu = eQ && "" !== eK ? (tt ? (0, h.parseDisplayNumber)(eK) : eG) : null,
          td =
            "withdraw" === e
              ? (0, c.getVaultUnspendableLeftoverWarning)({ token: Y, balanceUsdc: tr, spendUsdc: tu, minimumDepositUsdc: x, valueUnit: tt ? "USDC" : "USD" })
              : null,
          tc = (0, u.useMemo)(
            () =>
              (0, c.getEarnSubmitState)({
                isLoggedOut: es,
                amountInEmpty: e3,
                amountOutEmpty: e6,
                isLoadingQuote: ed,
                needsWithdrawPrice: eQ && !eX,
                balanceInsufficient: e_,
                validationError: tn ?? to,
                failedToGetAQuote: ea,
                quoteError: H.context.quote1csError,
                modeLabel: e9,
              }),
            [es, e3, e6, ed, eQ, eX, e_, tn, to, ea, H.context.quote1csError, e9],
          ),
          tm = "deposit" === e ? "earn-deposit-amount" : "earn-withdraw-amount",
          tp = (0, u.useMemo)(
            () => (eQ ? (0, $.getTokenLabel)(a ?? X) : "deposit" === e ? (0, $.getTokenLabel)(eH) : (0, $.getTokenLabel)(Y)),
            [eQ, a, e, X, eH, Y],
          );
        return {
          inFlight: eE,
          statusView: {
            mode: e,
            amountIn: eK,
            inputSymbol: tp,
            stage: eA,
            done: eT,
            isError: ej,
            intentHash: eh,
            txHash: eS,
            priceChangeDialog: W,
            onPriceChangeConfirm: () => j.send({ type: "PRICE_CHANGE_CONFIRMED" }),
            onPriceChangeCancel: () => j.send({ type: "PRICE_CHANGE_CANCELLED" }),
            onDone: e5,
          },
          amountCard: {
            inputId: tm,
            symbol: (0, $.getTokenLabel)(eJ),
            icon: eJ.icon,
            value: eK,
            onChange: e1,
            onMax: eZ,
            max: e2,
            maxLabel: e4,
            usdValue: eG,
            disabled: eQ && !eX,
            exceedsBalance: e_,
            errorMessage: tn ?? to ?? tc.errorMessage,
            tokenSelector: eW,
          },
          isLoadingQuote: ed,
          submitState: ei ? { disabled: !0, label: "Earn is temporarily unavailable" } : tc,
          leftoverWarning: td,
          onSubmit: el,
          intentCreationResult: z,
        };
      })(e);
      if (
        ((0, u.useEffect)(() => {
          e.onAmountChange?.(s.value);
        }, [s.value, e.onAmountChange]),
        n)
      )
        return (0, t.jsx)(eb, { ...a, onVisitEarn: e.quickEarn ? e.onComplete : void 0 });
      let g = (0, t.jsxs)(t.Fragment, {
        children: [
          e.children,
          (0, t.jsx)(ep, { ...s }),
          null != m && "" !== m && (0, t.jsx)(C.default, { variant: "warning", className: "page" === e.variant ? void 0 : "mt-3", children: m }),
        ],
      });
      return (0, t.jsxs)("form", {
        onSubmit: (e) => {
          e.preventDefault(), p();
        },
        children: [
          "page" === e.variant ? (0, t.jsx)("div", { className: "flex flex-col gap-3", children: g }) : g,
          (0, t.jsx)(T.default, {
            "data-testid": "earn-submit",
            className: "page" === e.variant ? "mt-6" : "mt-3",
            type: "submit",
            size: "xl",
            fullWidth: !0,
            loading: !e.paused && o,
            disabled: e.paused || r.disabled,
            children: e.paused ? ("deposit" === e.mode ? "Deposits paused" : "Withdrawals paused") : r.label,
          }),
          (0, t.jsx)(j.default, { intentCreationResult: x }),
        ],
      });
    }
    function ew({
      mode: e,
      vault: n,
      inFlight: a,
      onInFlightChange: l,
      onModeChange: i,
      onComplete: o,
      onAmountChange: r,
      signMessage: d,
      userAddress: m,
      userChainType: p,
      prefetchedPaymentBalances: f,
      quickEarn: h,
      showBalanceSummary: x,
      variant: y,
    }) {
      let k = (0, u.useMemo)(() => (0, c.getEarnTokenList)(n), [n]),
        [b, v] = (0, u.useState)(() => new Map()),
        w = (0, u.useCallback)((e, t) => {
          v((n) => {
            let a = n.get(e);
            if (a?.amount === t.amount && a.decimals === t.decimals) return n;
            let s = new Map(n);
            return s.set(e, t), s;
          });
        }, []);
      return (0, t.jsxs)(s.SwapWidgetProvider, {
        children: [
          x && (0, t.jsx)(g, { vault: n, userAddress: m, userChainType: p }),
          (0, t.jsx)(
            eC,
            {
              mode: e,
              vault: n,
              tokenList: k,
              inFlight: a,
              onInFlightChange: l,
              onModeChange: i,
              onComplete: o,
              onAmountChange: r,
              signMessage: d,
              userAddress: m,
              userChainType: p,
              availableBalanceCache: b,
              onAvailableBalanceChange: w,
              prefetchedPaymentBalances: f,
              quickEarn: h,
              compact: !x,
              variant: y,
            },
            e,
          ),
        ],
      });
    }
    function eC({
      mode: e,
      vault: n,
      tokenList: s,
      inFlight: u,
      onInFlightChange: c,
      onModeChange: m,
      onComplete: p,
      onAmountChange: f,
      signMessage: h,
      userAddress: x,
      userChainType: g,
      availableBalanceCache: y,
      onAvailableBalanceChange: k,
      prefetchedPaymentBalances: b,
      quickEarn: v,
      compact: C,
      variant: T,
    }) {
      let j = "deposit" === e,
        S = v?.token ?? n.paymentToken,
        I = j ? (0, l.resolveBaseTokenForPayment)(S, b) : n.vaultToken,
        E = j ? n.vaultToken : (0, i.getAnyBaseTokenInfo)(S),
        A = (0, d.useForm)({ mode: "onSubmit", reValidateMode: "onChange", defaultValues: { amountIn: "", amountOut: "" } }),
        N =
          u || null != v
            ? null
            : (0, t.jsx)(o.default, {
                tabs: [
                  { label: "Deposit", selected: "deposit" === e, onClick: () => m("deposit") },
                  { label: "Withdraw", selected: "withdraw" === e, onClick: () => m("withdraw") },
                ],
              });
      return (0, t.jsx)(d.FormProvider, {
        ...A,
        children: (0, t.jsxs)(en, {
          mode: e,
          paymentToken: S,
          tokenIn: I,
          tokenOut: E,
          tokenList: s,
          signMessage: h,
          userAddress: x,
          userChainType: g,
          quickEarn: v,
          children: [
            j && (0, t.jsx)(w, { paymentToken: S, prefetchedBalances: b, lockToPaymentFamily: null != v }),
            (0, t.jsx)(r.MeasuredHeightTransition, {
              view: u ? "status" : "form",
              children: (0, t.jsxs)("div", {
                className: "page" === T ? void 0 : C ? "space-y-3" : "space-y-3 pt-6",
                children: [
                  "page" !== T && N,
                  (0, t.jsx)(a.TokenListUpdater, { tokenList: s }),
                  (0, t.jsx)(ev, {
                    variant: T,
                    mode: e,
                    balanceToken: j ? S : void 0,
                    displayToken: S,
                    onInFlightChange: c,
                    onComplete: p,
                    onAmountChange: f,
                    availableBalanceCache: y,
                    onAvailableBalanceChange: k,
                    prefetchedPaymentBalances: b,
                    minimumDepositUsdc: n.minimumDepositUsdc,
                    quickEarn: v,
                    paused: j ? n.status?.enter === !1 : n.status?.exit === !1,
                    children: "page" === T ? N : null,
                  }),
                ],
              }),
            }),
          ],
        }),
      });
    }
    e.s(
      [
        "EarnVaultPanel",
        0,
        function ({
          vault: e,
          signMessage: n,
          userAddress: a,
          userChainType: s,
          prefetchedPaymentBalances: l = null,
          quickEarn: i,
          showBalanceSummary: o = !1,
          variant: r = "dialog",
          initialMode: d = "deposit",
          onComplete: c,
          onAmountChange: m,
          onInFlightChange: p,
        }) {
          let [f, h] = (0, u.useState)(d),
            [x, g] = (0, u.useState)(!1);
          return (
            (0, u.useEffect)(() => {
              if (x && null != p) return p(!0), () => p(!1);
            }, [x, p]),
            (0, t.jsx)(ew, {
              mode: i ? "deposit" : f,
              vault: e,
              inFlight: x,
              onInFlightChange: g,
              onModeChange: (e) => {
                i || x || e === f || h(e);
              },
              onComplete: () => {
                g(!1), c?.();
              },
              onAmountChange: m,
              signMessage: n,
              userAddress: a,
              userChainType: s,
              prefetchedPaymentBalances: l,
              quickEarn: i,
              showBalanceSummary: o,
              variant: r,
            })
          );
        },
      ],
      23632,
    );
  },
]);

//# debugId=26f91606-2e71-0c0d-3b4a-842a32e9a19b
//# sourceMappingURL=0p.~_rfbyxlie.js.map
