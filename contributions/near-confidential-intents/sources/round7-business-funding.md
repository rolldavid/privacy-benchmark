> ## Documentation Index
> Fetch the complete documentation index at: https://docs.business.near.com/llms.txt
> Use this file to discover all available pages before exploring further.

# Funding Through near.com

> Learn how to fund a confidential treasury using near.com

[Confidential treasuries](/confidential-treasuries) run on a private shard on NEAR, so assets need to be bridged from public blockchains to the private shard through [near.com](https://near.com/).

For teams that want to manage the bridging process themselves, this guide explains how to fund a confidential treasury through [near.com](https://near.com/).

<Tip>
  If you do not want to interact with [near.com](https://near.com/) or manage private accounts, you can use the automatic bridging flow in NEAR Business.

  Use the **`Receive`** button in your confidential treasury's dashboard to generate a temporary deposit address, then send the funds from any external wallet to that address.

  Temporary deposit addresses are single-use and remain valid for 14 days. Create a new one if the address expires before you send the funds.
</Tip>

***

## Get Your Address

Click **`Receive`** in your confidential treasury's [dashboard](https://business.near.com/), then select **`From confidential user`**.

<img src="https://mintcdn.com/near-business/RQGaNGJh6rapp-9Y/assets/docs/confidential/nb-receive.webp?fit=max&auto=format&n=RQGaNGJh6rapp-9Y&q=85&s=5438ae548feee74cbd394b08d90ad975" alt="NEAR Business Receive screen" width="1600" height="910" data-path="assets/docs/confidential/nb-receive.webp" />

You will see a deposit address for your confidential treasury. Copy this address, as you will need it to send funds from your [near.com](https://near.com/) account.

<img src="https://mintcdn.com/near-business/RQGaNGJh6rapp-9Y/assets/docs/confidential/nb-private-address.webp?fit=max&auto=format&n=RQGaNGJh6rapp-9Y&q=85&s=b6579187b103979877de974a2327a4bf" alt="NEAR Business confidential treasury address" width="1600" height="907" data-path="assets/docs/confidential/nb-private-address.webp" />

***

## Deposit Funds in near.com

Navigate to [near.com](https://near.com/) and connect with any of the supported wallets. Once connected, you will see the main dashboard where you can deposit and manage your assets.

Use the **`Receive`** option to deposit funds into your account. You can deposit from any external wallet.

<img src="https://mintcdn.com/near-business/RQGaNGJh6rapp-9Y/assets/docs/confidential/near-com-receive.webp?fit=max&auto=format&n=RQGaNGJh6rapp-9Y&q=85&s=f75a78b1157c714ab215380989dec2f9" alt="Receive funds screen" width="1600" height="901" data-path="assets/docs/confidential/near-com-receive.webp" />

<Check>
  [near.com](https://near.com/) allows you to log in with multiple wallets across different chains and supports multiple popular assets.
</Check>

***

## Transferring to the Treasury

Once the deposit is complete, return to the home screen and send the funds to the treasury. Click **`Send`** and select **`another near.com account`** as the network destination.

<img src="https://mintcdn.com/near-business/RQGaNGJh6rapp-9Y/assets/docs/confidential/near-com-another-near-account.webp?fit=max&auto=format&n=RQGaNGJh6rapp-9Y&q=85&s=75c7223657d70fcc22c296f5133a1e57" alt="Sending funds to another near.com account" width="1600" height="907" data-path="assets/docs/confidential/near-com-another-near-account.webp" />

Select the token you want to send and enter the treasury's account ID as the destination. Once it completes, you will see the funds in your confidential treasury's [dashboard](https://business.near.com), ready to use for payments and swaps.

<Danger>
  Because [confidential treasuries](/confidential-treasuries) are deployed on [near.com](https://near.com/)'s private shard, they are effectively near.com accounts.

  Select **`another near.com account`** on the **`Send`** screen. Funds sent to other networks might be lost, and there is no way to recover them.
</Danger>


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.
