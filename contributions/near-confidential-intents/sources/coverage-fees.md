> ## Documentation Index
> Fetch the complete documentation index at: https://docs.near-intents.org/llms.txt
> Use this file to discover all available pages before exploring further.

# Fees

> All fees that apply to NEAR Intents transactions and integrations

## Protocol Fee

* **0.0001% (1 pip)** per transaction
* Collected on-chain by the [`intents.near`](https://nearblocks.io/address/intents.near) smart contract
* Applies to every transfer, swap, or transaction
* Fees are sent to the [`fee_collector`](https://near-intents.org/account?user=near:7066024d3f20f94de601c003163367873cca78507eeca4df66d9be645f197f05)

## Near-Intents.org Fee

* **0.2%** fee on swaps executed through [near-intents.org](https://near-intents.org)
* Collected by the proprietary distribution channel in addition to the protocol fee
* Fees are sent to [`fefundsadmin.sputnik-dao.near`](https://nearblocks.io/address/fefundsadmin.sputnik-dao.near)

## Withdrawal Fees

* **0.1%** fee for **NEAR**, **ZEC**, and **STRK** tokens withdrawn to the **Solana** network

## 1Click Swap API Fees

These platform fees are charged **in addition to** the 0.0001% on-chain protocol fee. They are **not** applied to `ANY_INPUT` quotes.

| Request | Default |
| - | - |
| **Without API key** | Additional **0.25% (25 bps)** on every non-`ANY_INPUT` quote. Submitted `appFees` are kept, and 25 bps is added on top. |
| **With API key, no `appFees`** | **0.20% (20 bps)** normally; **0.01% (1 bp)** for stablecoin pairs (USDC, USDT, DAI) and same-asset multichain routes |
| **With API key and `appFees`** | Split 50/50, with 1Click keeping at least **20 bps** (or **1 bp** on stablecoin / same-asset multichain routes), subject to partner-specific configuration |

<Tip>
  [Apply for an API key](https://partners.near-intents.org/) to use the authenticated fee schedule instead of the extra 25 bps unauthenticated fee.
</Tip>

<Info>
  Better fee sharing and custom conditions are available. Reach out through the [Partner Portal](https://partners.near-intents.org/) to discuss an agreement.
</Info>

### Quote improvement fee (1Click / NEAR Intents)

**Definition:** If a swap execution gets **filled at a better price than the quoted price**, that difference is split **50/50** between you and the protocol.

**Eligible orders:** Real cross-asset swaps (not same-token moves). Only applies while the quote is still **fresh—within about 30 minutes** of when it was issued.

**Fee calculation:** **Direct 50/50 split** of the measured improvement, or **zero** if execution did not beat the quote.

### Distribution Channel Fees

Developers and distribution channels can add their own fees using the [`appFees`](/integration/distribution-channels/1click-api/fee-config) parameter when requesting quotes.

```json theme={null}
{
  "appFees": [{
    "recipient": "your-wallet.near",
    "fee": 50
  }]
}
```

This example requests a 0.5% fee (50 basis points) from the input token. How that 50 bps is split depends on authentication and your fee policy — see [Fee Configuration](/integration/distribution-channels/1click-api/fee-config).

### Revenue Share

Authenticated partners on the **generic policy** get a **50/50 revenue share** by default. 1Click's **half** has a **20 bps** minimum (or **1 bp** on stablecoin and same-asset multichain routes). Any `fee` below **40** is charged as your half plus 20.

That split is the default, not a universal rule. Exceptions and custom agreements exist.

For example, `"fee": 21` → 11 bps to you and 20 bps to 1Click (31 charged): half of 21 is 11, which is still under 20. `"fee": 40` stays 20 and 20.

<Card title="Fee Configuration Guide" icon="wallet" href="/integration/distribution-channels/1click-api/fee-config">
  Learn how to configure and collect fees from your integration
</Card>


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.
