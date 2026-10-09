> ## Documentation Index
> Fetch the complete documentation index at: https://docs.business.near.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Confidential Treasuries

> Manage assets and payroll without exposing your financial data

NEAR Business treasuries are **confidential**, meaning all financial data is
**visible only to team members**: all transactions and actions remain private.

<img src="https://mintcdn.com/near-business/RQGaNGJh6rapp-9Y/assets/docs/confidential/ui.png?fit=max&auto=format&n=RQGaNGJh6rapp-9Y&q=85&s=a5b48409ac7c5f054362bae8f2528c96" alt="Confidential treasury interface" width="1164" height="604" data-path="assets/docs/confidential/ui.png" />

***

## How Do Confidential Treasuries Work?

Confidential treasuries are multisig wallet smart contracts deployed on a **private shard** on NEAR Protocol. This allows them to combine the security of battle-tested multisig smart contracts on NEAR with the privacy of confidential transaction processing.

<img src="https://mintcdn.com/near-business/RQGaNGJh6rapp-9Y/assets/docs/confidential/diagram.png?fit=max&auto=format&n=RQGaNGJh6rapp-9Y&q=85&s=abe74bf8f49ed936b54357a1b3a69504" alt="Confidential treasury architecture" width="1502" height="956" data-path="assets/docs/confidential/diagram.png" />

<Accordion title="What is a private shard?">
  While NEAR Protocol is a single blockchain, it is actually composed of small chain instances called shards. Each shard executes in parallel, handling transactions for a set of accounts and contracts.

  In NEAR, all shards are public by default, meaning that anyone can see all their transactions. However, NEAR allows having private shards, which use the same technology as the public ones, but with the main difference of **not exposing any data to the public**.

  This makes private shards an ideal solution for confidential treasuries, as they provide all the security and functionality of a public shard, but with the added privacy of not exposing any financial data to the public.
</Accordion>

***

## Deposits

Because confidential treasuries run on a private shard, funding them and paying from them requires moving funds between the private shard and public blockchains.

There are two ways to do this, depending on how your team wants to operate.

<div style={{height: "10px"}} />

### Automatic Bridging

Your treasury can receive funds from public blockchains through a temporary account and automatically bridge them to the private shard.

Furthermore, using a unique deposit address for each transfer makes it harder for external observers to link multiple deposits, wallets, or counterparties to the same treasury, which provides additional privacy.

<img src="https://mintcdn.com/near-business/RQGaNGJh6rapp-9Y/assets/docs/confidential/single-use-address.webp?fit=max&auto=format&n=RQGaNGJh6rapp-9Y&q=85&s=df2c3ed36a725aa88806d701c4426898" alt="Deposit through a temporary address" width="1600" height="910" data-path="assets/docs/confidential/single-use-address.webp" />

<Warning>
  Temporary deposit addresses are single-use and remain valid for 14 days. If the address expires, create a new one before sending funds.
</Warning>

<div style={{height: "10px"}} />

### Using near.com

If your team already uses a confidential account on [near.com](https://near.com/), you can fund the treasury by transferring assets directly to the treasury account ID.

<Tip>
  Read the detailed guide on how to [**fund confidential treasuries through near.com**](/guides/funding-confidential-treasuries).
</Tip>

***

## Proposals

In a confidential treasury, external actors can see that a *proposal exists* and how members voted,
but **only team members can see the proposal details**.

For example, if a team member creates a proposal to pay `10 USDC` to `alice.near`, the public can see
that a proposal was created and whether it was approved or rejected, but **only team members can see**
that it was a *payment* proposal, as well as **the amount, token, and recipient**.

***

## Payments

Confidential treasuries can create payments in all supported assets, and the recipient can be **either** a **confidential [near.com](https://near.com/) account** or a **public wallet address**.

Payments to [near.com](https://near.com/) confidential accounts will be executed within the private shard, so the recipient will need to log in to [near.com](https://near.com/) to access and withdraw the funds.

When making payments to public wallets, NEAR Business **automatically bridges** the funds from the private shard
to the recipient's address on the selected chain. In this case, the public recipient will see the funds arriving
from the *near.com settlement account*, as that is the account used to bridge funds from the private shard to the
destination blockchain.

***

## Frequently Asked Questions

<Accordion title="Can I create a public treasury?">
  No, all treasuries created through NEAR Business are confidential.
</Accordion>

<Accordion title="A Private Shard on NEAR?">
  While NEAR Protocol is a single blockchain, it is actually composed of multiple small chain instances called shards, which run in parallel. Each shard is in charge of certain accounts and smart contracts and operates in parallel, with all shards aggregating to form the NEAR blockchain.

  Almost all shards on NEAR are public, which means that anyone can see all the funds and transactions happening on them. However, NEAR also allows the creation of private shards, which run on the same technology as the public ones, but with the added security of being private and encrypted.

  This is how confidential treasuries work: they are deployed on their own private shard, which is not accessible to anyone outside the team, thus keeping all financial data private.
</Accordion>

<Accordion title="How do I fund a confidential treasury?">
  To deposit funds into a confidential treasury, you can either use [**near.com**](https://near.com/) and [fund the treasury's account](/guides/funding-confidential-treasuries) through a confidential account there, or let NEAR Business generate a temporary deposit address and bridge the funds for you.
</Accordion>

<Accordion title="Are payments from a confidential treasury private?">
  Yes, all payments from a confidential treasury are private, as they are executed within the private shard. This means that the details of the payment, such as the amount, recipient, and token, are only visible to team members and not to the public.

  Recipients of confidential payments can either [receive the funds in a near.com confidential account](/guides/confidential-payments) or receive them directly in their public wallet.

  For recipients who receive payments directly in their public wallet, the sender will appear as the general NEAR Intents account.
</Accordion>

<Accordion title="Are swaps from a confidential treasury private?">
  Yes, all swaps from a confidential treasury are private, as they are executed within the private shard. This means that the details of the swap, such as the amount, tokens involved, and exchange rate, are only visible to team members and not to the public.
</Accordion>

***

## Ready to Get Started?

[Create your treasury now](https://business.near.com/) and start managing your team's crypto assets securely and collaboratively!


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.
