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
    n && ((e._debugIds || (e._debugIds = {}))[n] = "dea68fc8-260f-889c-3dbc-e875d3518690");
  } catch (e) {}
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  955211,
  (e) => {
    "use strict";
    var a = e.i(696150);
    let t = a.forwardRef(function ({ title: e, titleId: t, ...l }, n) {
      return a.createElement(
        "svg",
        Object.assign(
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 16 16",
            fill: "currentColor",
            "aria-hidden": "true",
            "data-slot": "icon",
            ref: n,
            "aria-labelledby": t,
          },
          l,
        ),
        e ? a.createElement("title", { id: t }, e) : null,
        a.createElement("path", {
          fillRule: "evenodd",
          d: "M6.701 2.25c.577-1 2.02-1 2.598 0l5.196 9a1.5 1.5 0 0 1-1.299 2.25H2.804a1.5 1.5 0 0 1-1.3-2.25l5.197-9ZM8 4a.75.75 0 0 1 .75.75v3a.75.75 0 1 1-1.5 0v-3A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
          clipRule: "evenodd",
        }),
      );
    });
    e.s(["ExclamationTriangleIcon", 0, t], 955211);
  },
  565982,
  392136,
  (e) => {
    "use strict";
    var a = e.i(789477),
      t = e.i(431799),
      l = e.i(696150);
    let n = l.forwardRef(function ({ title: e, titleId: a, ...t }, n) {
      return l.createElement(
        "svg",
        Object.assign(
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 16 16",
            fill: "currentColor",
            "aria-hidden": "true",
            "data-slot": "icon",
            ref: n,
            "aria-labelledby": a,
          },
          t,
        ),
        e ? l.createElement("title", { id: a }, e) : null,
        l.createElement("path", {
          fillRule: "evenodd",
          d: "M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8Zm7.75-4.25a.75.75 0 0 0-1.5 0V8c0 .414.336.75.75.75h3.25a.75.75 0 0 0 0-1.5h-2.5v-3.5Z",
          clipRule: "evenodd",
        }),
      );
    });
    e.s(["ClockIcon", 0, n], 392136);
    var s = e.i(955211),
      r = e.i(758733),
      i = e.i(470733);
    e.s(
      [
        "default",
        0,
        ({ variant: e, size: l = "md", className: d, children: o, hideIcon: u = !1 }) =>
          (0, a.jsxs)("div", {
            className: (0, i.default)(
              "-outline-offset-1 flex items-center gap-x-1 whitespace-nowrap font-semibold text-xs/none outline outline-transparent",
              {
                "rounded-md px-1.5 py-1": "sm" === l,
                "rounded-lg px-2 py-1.5": "md" === l,
                "bg-red-500/15 text-red-700 dark:text-red-400": "error" === e,
                "bg-blue-500/15 text-blue-700 dark:text-blue-300": "info" === e,
                "bg-green-600/15 text-green-800 dark:text-green-500": "success" === e,
                "bg-yellow-200/50 text-yellow-800 dark:bg-yellow-500/10 dark:text-yellow-200 dark:outline-yellow-500/10": "warning" === e,
                "bg-gray-150 text-gray-700 dark:bg-gray-700 dark:text-gray-300": "neutral" === e,
              },
              d,
            ),
            children: [
              !u && "error" === e && (0, a.jsx)(r.XCircleIcon, { className: "size-3 text-red-500 dark:text-red-400" }),
              !u && "info" === e && (0, a.jsx)(n, { className: "size-3 text-blue-500 dark:text-blue-400" }),
              !u && "success" === e && (0, a.jsx)(t.CheckCircleIcon, { className: "size-3 text-green-700 dark:text-green-500" }),
              !u && "warning" === e && (0, a.jsx)(s.ExclamationTriangleIcon, { className: "size-3 text-yellow-600 dark:text-yellow-500" }),
              o,
            ],
          }),
      ],
      565982,
    );
  },
  634181,
  974575,
  780545,
  (e) => {
    "use strict";
    var a = e.i(236398),
      t = e.i(402967),
      l = e.i(120993),
      n = e.i(494438),
      s = e.i(723980),
      r = e.i(18578),
      i = e.i(67781),
      d = e.i(658077),
      o = e.i(25548),
      u = e.i(314418),
      c = e.i(895756),
      m = e.i(377589);
    function p({ userId: e, custody: a, tokenIds: t, enabled: l = !0 }) {
      return (0, m.useQuery)(
        "confidential" === a
          ? (0, u.createPrivateBalanceQueryOptions)({ userId: e }, l)
          : null == t
            ? (0, c.createAllDepositedBalancesQueryOptions)({ userId: e }, l)
            : (0, c.createDepositedBalanceQueryOptions)({ userId: e, tokenIds: t }, l && t.length > 0),
      );
    }
    e.s(["useTokenBalances", 0, p], 974575);
    var h = e.i(610901),
      f = e.i(696150);
    function E(e) {
      return (0, t.getTokenPrice)(e.vaultToken, e.tokensUsdPriceData);
    }
    e.s(
      [
        "resolveVaultSharePriceInPaymentToken",
        0,
        function (e) {
          let l = (0, t.getTokenPrice)(e.vaultToken, e.tokensUsdPriceData),
            n = (0, t.getTokenPrice)(e.paymentToken, e.tokensUsdPriceData);
          return (0, a.resolveSharePriceInPaymentToken)(l, n);
        },
        "resolveVaultSharePriceUsd",
        0,
        E,
      ],
      780545,
    );
    let x = (0, e.i(962595).findUnifiedUsdc)(o.LIST_TOKENS);
    e.s(
      [
        "useVaultDepositedBalances",
        0,
        function (e, o, u, c) {
          let m = null != o && null != u ? l.authIdentity.authHandleToIntentsUserId(o, u) : null,
            { isConfidential: g } = c,
            k = p({
              userId: m,
              tokenIds: (0, f.useMemo)(() => e.flatMap((e) => (0, i.getUnderlyingBaseTokenInfos)(e.vaultToken)).map(r.getTokenId), [e]),
              custody: g ? "confidential" : "public",
            }),
            { data: A, isPending: b } = (0, n.useTokensUsdPrices)(),
            T = null != m && null == k.data;
          return {
            balances: (0, f.useMemo)(() => {
              let l = k.data ?? {},
                n = new Map();
              for (let r of e) {
                let e = (0, d.computeTotalBalanceDifferentDecimals)(r.vaultToken, l, { strict: !1 }),
                  i = E({ vaultToken: r.vaultToken, tokensUsdPriceData: A }),
                  o = (0, a.valueVaultBalance)(e ?? { amount: 0n, decimals: r.vaultToken.decimals }, i, (0, t.getTokenPrice)(x ?? null, A)),
                  u =
                    null == e || 0n === e.amount
                      ? "0"
                      : `${(0, s.formatTokenValue)(e.amount, e.decimals, { fractionDigits: 4 })} ${(0, h.getTokenLabel)(r.vaultToken)}`;
                n.set(r.vaultToken.defuseAssetId, {
                  amountLabel: u,
                  usdcPrice: o.sharePriceUsdc,
                  usdcValue: o.usdcValue,
                  usdPrice: i,
                  usdValue: o.usdValue,
                  hasBalance: o.hasBalance,
                });
              }
              return n;
            }, [e, k.data, A]),
            isLoading: T || b,
          };
        },
      ],
      634181,
    );
  },
  889710,
  (e) => {
    "use strict";
    var a = e.i(696150);
    let t = new Set();
    function l(e) {
      return (
        t.add(e),
        () => {
          t.delete(e);
        }
      );
    }
    e.s([
      "isAnyExploreValue",
      0,
      function (e) {
        return "" !== e;
      },
      "useExploreSessionState",
      0,
      function (e, n, s) {
        let r = (0, a.useSyncExternalStore)(
          l,
          () =>
            (function (e) {
              try {
                return window.sessionStorage.getItem(e);
              } catch {
                return null;
              }
            })(e),
          () => null,
        );
        return [
          null != r && s(r) ? r : n,
          (0, a.useCallback)(
            (a) => {
              try {
                window.sessionStorage.setItem(e, a);
              } catch {}
              for (let e of t) e();
            },
            [e],
          ),
        ];
      },
    ]);
  },
  542163,
  (e) => {
    "use strict";
    var a = e.i(789477),
      t = e.i(315285);
    e.s(["default", 0, ({ className: e, children: l }) => (0, a.jsx)("div", { className: (0, t.cn)("mx-auto max-w-[464px]", e), children: l })]);
  },
  862728,
  506953,
  (e) => {
    "use strict";
    e.i(684772), e.s([], 862728);
    var a = e.i(180472),
      t = e.i(302227);
    e.s(
      [
        "getWithdrawalTrancheRows",
        0,
        function (e, l) {
          return e.tranches
            .map((e, n) => {
              let s,
                r,
                i,
                d = (0, t.formatNear)(e.amount),
                o = `${e.unstakeEpoch}:${n}`;
              if (null == l)
                return { ...e, rowId: o, amountLabel: d, statusLabel: "Estimating...", badgeVariant: "neutral", readyRank: 0, sortKey: e.unstakeEpoch };
              let u = (0, a.isTrancheReady)(e.unstakeEpoch, l),
                c = (0, a.getTrancheReadyAtMs)(e.unstakeEpoch, l),
                m = Math.max(0, c - l.nowMs);
              return {
                ...e,
                rowId: o,
                amountLabel: d,
                statusLabel: u
                  ? "Ready"
                  : 0 === m
                    ? "soon"
                    : `${((r = Math.floor((s = Math.max(1, Math.ceil(m / 36e5))) / 24)), (i = s % 24), 0 === r ? `~${s}h` : 0 === i ? `~${r}d` : `~${r}d ${i}h`)} left`,
                badgeVariant: u ? "success" : "info",
                readyRank: u ? -1 : 1,
                sortKey: c,
              };
            })
            .sort((e, a) => (e.readyRank !== a.readyRank ? e.readyRank - a.readyRank : e.sortKey - a.sortKey))
            .map(({ readyRank: e, sortKey: a, ...t }) => t);
        },
      ],
      506953,
    );
  },
  29723,
  (e) => {
    "use strict";
    var a = e.i(789477),
      t = e.i(735645);
    e.s([
      "EarnApiUnavailable",
      0,
      function () {
        return (0, a.jsx)(t.default, {
          variant: "warning",
          "data-testid": "earn-api-unavailable",
          className: "mt-5",
          children: "Earn vaults are temporarily unavailable. Please try again later.",
        });
      },
    ]);
  },
  987796,
  716445,
  (e) => {
    "use strict";
    var a = e.i(789477);
    e.s(
      [
        "EarnRate",
        0,
        function ({ rate: e, rateType: t }) {
          return null == e
            ? "—"
            : (0, a.jsxs)(a.Fragment, { children: [e, (0, a.jsx)("span", { className: "text-gray-500 dark:text-gray-400", children: ` ${t}` })] });
        },
      ],
      987796,
    );
    var t = e.i(120993);
    e.i(862728);
    var l = e.i(684772),
      n = e.i(506953),
      s = e.i(470012),
      r = e.i(241475),
      i = e.i(978247),
      d = e.i(696150),
      o = e.i(833118),
      u = e.i(263925),
      c = e.i(420731);
    function m(e, a) {
      return (a.balanceUsd ?? 0) - (e.balanceUsd ?? 0);
    }
    var p = e.i(317824),
      h = e.i(163930),
      f = e.i(634181);
    e.s(
      [
        "useEarnPortfolioPositions",
        0,
        function () {
          let { state: e } = (0, r.useConnectWallet)(),
            a = e.isAuthorized ? (e.address ?? null) : null,
            E = e.chainType ?? null,
            x = null != a && null != E ? t.authIdentity.authHandleToIntentsUserId(a, E) : null,
            { isConfidentialOnly: g } = (0, i.useConfidentialMode)(),
            k = (0, l.useNearStakingPosition)(x, g),
            { vaults: A } = (0, h.useCuratedEarnVaults)(),
            { balances: b, isLoading: T } = (0, f.useVaultDepositedBalances)(A, a, E, { isConfidential: !0 }),
            y = (0, d.useMemo)(
              () =>
                (function ({ staking: e, vaults: a }) {
                  let t = [];
                  for (let n of ((e.stakedNear > 0n || e.pendingWithdrawalNear > 0n) &&
                    t.push({
                      id: `staking:${u.NEAR_STAKING_SYMBOL}`,
                      href: (0, u.earnProductHref)({ kind: "staking", symbol: u.NEAR_STAKING_SYMBOL }),
                      name: u.NEAR_STAKING_NAME,
                      kind: "staking",
                      kindLabel: "Staking",
                      icon: e.icon,
                      rateLabel: e.aprLabel,
                      rateType: "APR",
                      balanceUsd: e.stakingBalanceUsd,
                      balanceTokenLabel: `${e.stakingBalanceNearLabel} ${u.NEAR_STAKING_SYMBOL}`,
                      claimReady: e.claimReady,
                    }),
                  a)) {
                    var l;
                    n.hasBalance &&
                      t.push({
                        id: n.defuseAssetId,
                        href: (0, u.earnProductHref)({ kind: "vault", tokenSymbol: n.tokenSymbol }),
                        name: n.displayName,
                        kind: "vault",
                        kindLabel: "Vault",
                        icon: n.icon,
                        rateLabel: null != n.apr && Number.isFinite(n.apr) ? (0, c.formatApy)(n.apr) : "—",
                        rateType: n.rateType ?? "APY",
                        balanceUsd: n.usdValue,
                        balanceTokenLabel:
                          null != (l = n).usdcValue && Number.isFinite(l.usdcValue) ? `${(0, o.formatValueAmount)(l.usdcValue)} USDC` : l.amountLabel,
                      });
                  }
                  return t.sort(m);
                })({
                  staking: {
                    stakedNear: k.stakedNear,
                    pendingWithdrawalNear: k.pendingWithdrawalNear,
                    stakingBalanceUsd: k.stakingBalanceUsd,
                    stakingBalanceNearLabel: k.stakingBalanceNearLabel,
                    aprLabel: k.aprLabel,
                    icon: s.NEAR_TOKEN_ICON,
                    claimReady:
                      null != k.withdrawalRequest &&
                      (0, n.getWithdrawalTrancheRows)(k.withdrawalRequest, k.currentEpoch).some(({ badgeVariant: e }) => "success" === e),
                  },
                  vaults: A.map((e) => {
                    let a = b.get(e.vaultToken.defuseAssetId);
                    return {
                      defuseAssetId: e.vaultToken.defuseAssetId,
                      tokenSymbol: e.vaultToken.symbol,
                      displayName: (0, p.getEarnVaultDisplayName)(e.vaultToken),
                      icon: e.vaultToken.icon,
                      apr: e.apr,
                      rateType: e.metadata?.rateType,
                      hasBalance: a?.hasBalance ?? !1,
                      usdValue: a?.usdValue ?? null,
                      usdcValue: a?.usdcValue ?? null,
                      amountLabel: a?.amountLabel ?? "",
                    };
                  }),
                }),
              [b, k.aprLabel, k.currentEpoch, k.pendingWithdrawalNear, k.stakedNear, k.stakingBalanceNearLabel, k.stakingBalanceUsd, k.withdrawalRequest, A],
            ),
            L = (0, d.useMemo)(
              () =>
                (function (e) {
                  let a = 0,
                    t = !1;
                  for (let l of e.values())
                    if (l.hasBalance) {
                      if (null == l.usdValue) {
                        t = !0;
                        continue;
                      }
                      a += l.usdValue;
                    }
                  return { valueUsd: t ? null : a };
                })(b),
              [b],
            );
          return {
            positions: y,
            totalValueUsd: (L.valueUsd ?? 0) + (k.stakingBalanceUsd ?? 0),
            loading: T || k.stakingBalanceUsdLoading,
            loadError: (!T && null == L.valueUsd) || k.stakingBalanceUsdLoadError,
          };
        },
      ],
      716445,
    );
  },
  858090,
  (e) => {
    "use strict";
    var a = e.i(789477),
      t = e.i(542163),
      l = e.i(93871),
      n = e.i(889710),
      s = e.i(29723),
      r = e.i(104491),
      i = e.i(565982),
      d = e.i(922278),
      o = e.i(496406),
      u = e.i(96821),
      c = e.i(468689),
      m = e.i(946650),
      p = e.i(594146);
    e.i(788469);
    var h = e.i(165198),
      f = e.i(263925),
      E = e.i(317824),
      x = e.i(962595);
    let g = [
      { id: "staking", label: "Staking" },
      { id: "vault", label: "Vaults" },
    ];
    function k(e, a) {
      let t = (0, f.earnProductHref)(e);
      if ("staking" === e.kind)
        return {
          id: t,
          href: t,
          kind: "staking",
          name: f.NEAR_STAKING_NAME,
          symbol: e.symbol,
          provider: null,
          depositAsset: e.symbol,
          minimumDepositUsd: null,
          ...a,
        };
      let l = h.CURATED_EARN_VAULTS.find((a) => a.tokenSymbol === e.tokenSymbol),
        n = (0, p.buildCuratedEarnVaults)().find((a) => a.vaultToken.symbol === e.tokenSymbol)?.vaultToken;
      return {
        id: t,
        href: t,
        kind: "vault",
        name: null == n ? e.tokenSymbol : (0, E.getEarnVaultDisplayName)(n),
        symbol: e.tokenSymbol,
        provider: l?.providerLabel ?? null,
        depositAsset: l?.baseUnifiedAssetId.toUpperCase() ?? "",
        badge: l?.badge,
        minimumDepositUsd: l?.minimumDepositUsdc ?? null,
        ...a,
      };
    }
    function A(e) {
      return null != e.heldUsd && e.heldUsd > 0;
    }
    var b = e.i(315285),
      T = e.i(987796);
    function y({ rows: e }) {
      return (0, a.jsx)("div", {
        className: "flow-root",
        children: (0, a.jsx)("div", {
          className: (0, b.cn)(d.DATA_TABLE_SHELL_CLASS_NAME, c.EXPLORE_TABLE_MOBILE_SHELL_CLASS_NAME),
          children: (0, a.jsx)("div", {
            className: "w-full overflow-x-auto",
            children: (0, a.jsx)("div", {
              className: "inline-block min-w-full align-middle",
              children: (0, a.jsxs)("table", {
                className: (0, b.cn)(d.DATA_TABLE_CLASS_NAME, "w-full table-fixed"),
                children: [
                  (0, a.jsxs)("colgroup", {
                    children: [
                      (0, a.jsx)("col", { className: "sm:w-[36%]" }),
                      (0, a.jsx)("col", { className: "w-28 sm:w-auto" }),
                      (0, a.jsx)("col", { className: "hidden sm:table-column" }),
                      (0, a.jsx)("col", { className: "hidden md:table-column" }),
                      (0, a.jsx)("col", { className: "hidden lg:table-column" }),
                    ],
                  }),
                  (0, a.jsx)(L, {}),
                  (0, a.jsx)("tbody", { children: e.map((e) => (0, a.jsx)(N, { row: e }, e.id)) }),
                ],
              }),
            }),
          }),
        }),
      });
    }
    function L() {
      return (0, a.jsx)("thead", {
        className: "max-sm:sr-only",
        children: (0, a.jsxs)("tr", {
          children: [
            (0, a.jsx)("th", {
              scope: "col",
              className: (0, b.cn)(d.DATA_TABLE_HEADER_CELL_CLASS_NAME, "min-w-0 pr-3 pl-4 text-left sm:pl-6"),
              children: "Product",
            }),
            (0, a.jsx)("th", { scope: "col", className: (0, b.cn)(d.DATA_TABLE_HEADER_CELL_CLASS_NAME, "pr-4 pl-3 text-right sm:pr-3"), children: "Rate" }),
            (0, a.jsx)("th", {
              scope: "col",
              className: (0, b.cn)(d.DATA_TABLE_HEADER_CELL_CLASS_NAME, "hidden pr-6 pl-3 text-right sm:table-cell md:pr-3"),
              children: "TVL",
            }),
            (0, a.jsx)("th", {
              scope: "col",
              className: (0, b.cn)(d.DATA_TABLE_HEADER_CELL_CLASS_NAME, "hidden pr-6 pl-3 text-right md:table-cell lg:pr-3"),
              children: "Withdrawals",
            }),
            (0, a.jsx)("th", {
              scope: "col",
              className: (0, b.cn)(d.DATA_TABLE_HEADER_CELL_CLASS_NAME, "hidden pr-6 pl-3 text-right lg:table-cell"),
              children: "Min. deposit",
            }),
          ],
        }),
      });
    }
    function N({ row: e }) {
      var t, l;
      let n = null == (t = e.tvlUsd) ? "—" : (0, x.formatTvl)(t);
      return (0, a.jsxs)("tr", {
        className: (0, b.cn)(d.DATA_TABLE_ROW_INTERACTIVE_CLASSES, c.EXPLORE_TABLE_MOBILE_ROW_CLASS_NAME),
        children: [
          (0, a.jsx)("td", {
            className: "h-px min-w-0",
            children: (0, a.jsx)(c.ExploreTableRowLink, {
              href: e.href,
              tabIndex: 0,
              className: "min-w-0 py-3 pr-3 pl-4 sm:py-4 sm:pl-6",
              children: (0, a.jsx)(r.AssetRowIdentity, {
                icon: e.icon,
                title: (0, a.jsxs)("span", {
                  className: "flex min-w-0 items-center gap-2",
                  children: [
                    (0, a.jsx)("span", { className: "truncate", children: e.name }),
                    null == e.badge ? null : (0, a.jsx)(i.default, { variant: "info", size: "sm", hideIcon: !0, children: e.badge }),
                    e.claimReady ? (0, a.jsx)(i.default, { variant: "success", size: "sm", children: "Ready to claim" }) : null,
                  ],
                }),
                subtitle: (0, a.jsxs)("span", {
                  className: "flex min-w-0 items-center gap-1",
                  children: [
                    (0, a.jsx)("span", { className: "truncate", children: "staking" === e.kind ? "Staking" : "Vault" }),
                    (0, a.jsx)(o.ExploreHeldCaption, { usd: e.heldUsd }),
                  ],
                }),
              }),
            }),
          }),
          (0, a.jsx)("td", {
            className: "h-px text-right",
            children: (0, a.jsx)(c.ExploreTableRowLink, {
              href: e.href,
              tabIndex: -1,
              className: "items-center justify-end py-3 pr-4 pl-3 sm:py-4 sm:pr-3",
              children: (0, a.jsx)(r.AssetRowTrailing, {
                className: "min-w-0",
                value:
                  e.metricsLoading && null == e.rate
                    ? (0, a.jsx)(u.PulseText, { size: "base", className: "justify-end" })
                    : (0, a.jsx)(T.EarnRate, { rate: e.rate, rateType: e.rateType }),
              }),
            }),
          }),
          (0, a.jsx)("td", {
            className: (0, b.cn)("hidden h-px text-right sm:table-cell", c.EXPLORE_TABLE_SM_EDGE_CELL_CLASS_NAME),
            children: (0, a.jsx)(c.ExploreTableRowLink, {
              href: e.href,
              tabIndex: -1,
              className: (0, b.cn)(d.DATA_TABLE_VALUE_TEXT_CLASS_NAME, "items-center justify-end py-4 pr-6 pl-3 md:pr-3"),
              children: e.metricsLoading && null == e.tvlUsd ? (0, a.jsx)(u.PulseText, { size: "base", className: "justify-end" }) : n,
            }),
          }),
          (0, a.jsx)("td", {
            className: (0, b.cn)("hidden h-px text-right md:table-cell", c.EXPLORE_TABLE_MD_EDGE_CELL_CLASS_NAME),
            children: (0, a.jsx)(c.ExploreTableRowLink, {
              href: e.href,
              tabIndex: -1,
              className: (0, b.cn)(d.DATA_TABLE_VALUE_TEXT_CLASS_NAME, "items-center justify-end py-4 pr-6 pl-3 lg:pr-3"),
              children: "staking" === e.kind ? "~2 days" : "Instant",
            }),
          }),
          (0, a.jsx)("td", {
            className: "hidden h-px text-right lg:table-cell",
            children: (0, a.jsx)(c.ExploreTableRowLink, {
              href: e.href,
              tabIndex: -1,
              className: (0, b.cn)(d.DATA_TABLE_VALUE_TEXT_CLASS_NAME, "items-center justify-end py-4 pr-6 pl-3"),
              children: null == (l = e.minimumDepositUsd) ? "None" : `$${l}`,
            }),
          }),
        ],
      });
    }
    var _ = e.i(163930);
    e.i(862728);
    var v = e.i(684772),
      S = e.i(302227),
      w = e.i(470012),
      R = e.i(927186),
      j = e.i(420731),
      U = e.i(716445),
      I = e.i(696150);
    e.s(
      [
        "default",
        0,
        function () {
          let e = (function () {
              let { vaults: e, summaryQuery: a } = (0, _.useCuratedEarnVaults)(),
                { positions: t } = (0, U.useEarnPortfolioPositions)(),
                { tvlUsd: l, tvlUsdLoading: n } = (0, v.useNearStakingPosition)(null),
                s = a.isPending && null == a.data,
                r = (0, I.useMemo)(() => {
                  let e = new Map();
                  for (let a of t) null != a.balanceUsd && a.balanceUsd > 0 && e.set(a.href, a.balanceUsd);
                  return e;
                }, [t]),
                i = t.some((e) => "staking" === e.kind && !0 === e.claimReady);
              return (0, I.useMemo)(
                () =>
                  (0, f.listEarnProducts)().map((a) => {
                    let t = r.get((0, f.earnProductHref)(a)) ?? null;
                    if ("staking" === a.kind)
                      return k(a, {
                        icon: w.NEAR_TOKEN_ICON,
                        rate: (0, S.formatBps)(R.NEAR_STAKING_APR_BPS),
                        rateType: "APR",
                        tvlUsd: l,
                        heldUsd: t,
                        metricsLoading: n,
                        claimReady: i,
                      });
                    let d = e.find((e) => e.vaultToken.symbol === a.tokenSymbol);
                    return k(a, {
                      icon: d?.vaultToken.icon,
                      rate: d?.apr != null ? (0, j.formatApy)(d.apr) : null,
                      rateType: d?.metadata?.rateType ?? "APY",
                      tvlUsd: d?.metadata?.tvlUsd ?? null,
                      heldUsd: t,
                      metricsLoading: s,
                    });
                  }),
                [r, i, n, l, e, s],
              );
            })(),
            { summaryQuery: r } = (0, _.useCuratedEarnVaults)(),
            [i, d] = (0, I.useState)(""),
            [o, u] = (0, n.useExploreSessionState)("explore-filter:earn", "all", n.isAnyExploreValue),
            c = (0, I.useMemo)(
              () => [
                { id: "all", label: "All products" },
                ...(e.some(A) ? [m.POSITIONS_EXPLORE_FILTER] : []),
                ...g.filter((a) => e.some((e) => e.kind === a.id)),
              ],
              [e],
            ),
            p = c.some((e) => e.id === o) ? o : "all",
            h = (0, I.useMemo)(
              () =>
                (function (e, { query: a, filter: t }) {
                  let l = a.trim().toLowerCase();
                  return e.filter((e) => {
                    var a;
                    if (t === m.HOLDINGS_EXPLORE_FILTER_ID) {
                      if (!A(e)) return !1;
                    } else if ("all" !== t && e.kind !== t) return !1;
                    return (
                      0 === l.length ||
                      [(a = e).name, a.symbol, a.provider, a.depositAsset, a.kind]
                        .filter((e) => null != e && "" !== e)
                        .map((e) => e.toLowerCase())
                        .some((e) => e.includes(l))
                    );
                  });
                })(e, { query: i, filter: p }),
              [p, i, e],
            ),
            E = i.trim();
          return (0, a.jsx)(t.default, {
            className: "max-w-7xl",
            children: (0, a.jsxs)(l.ExploreShell, {
              title: "Earn",
              searchId: "earn-explore-search",
              searchLabel: "Search earn products",
              searchPlaceholder: "Search name or asset",
              query: i,
              onQueryChange: d,
              allFilterId: "all",
              filters: c,
              filter: p,
              onFilterChange: u,
              children: [
                (r.data?.failed || (r.isError && null == r.data)) && (0, a.jsx)(s.EarnApiUnavailable, {}),
                0 === h.length
                  ? (0, a.jsx)(l.ExploreEmptyState, { children: E.length > 0 ? `No products found for “${E}”` : "No products match that filter." })
                  : (0, a.jsx)(y, { rows: h }),
              ],
            }),
          });
        },
      ],
      858090,
    );
  },
]);

//# debugId=dea68fc8-260f-889c-3dbc-e875d3518690
//# sourceMappingURL=0li6lngy7x22n.js.map
