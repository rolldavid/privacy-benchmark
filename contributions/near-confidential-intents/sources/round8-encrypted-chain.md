Confidential Intents is a confidentiality layer built into
NEAR Intents
 that enables users to execute cross-chain transactions without exposing position data to the public chain. Confidential deposits, withdrawals, swaps, and peer-to-peer transfers are now available at

near.com
 through the “Confidential Mode” feature.
Powered by a NEAR private shard, Confidential Intents ensures verifiable settlement while also preventing MEV, frontrunning, and strategy copying that can occur when your order size, token pair, direction, and timing are all visible. These risks around fully transparent public chain transactions have historically pushed institutional capital and traders moving real size toward centralized exchanges, which offer confidential execution by default. Confidential Intents brings that same property to cross-chain DeFi, while ensuring users retain full control of their assets, transactions settle on verifiable infrastructure, and position data stays off the public chain.
Below we explore the importance of confidentiality in both traditional and decentralized financial markets, and walk through Confidential Intents’ underlying privacy architecture and key design decisions.
Confidentiality as Market Infrastructure
Financial institutions have used confidential execution for decades. In traditional equity markets, dark pools were developed nearly half a century ago to enable institutional investors to execute large block trades without signaling intent to the broader market. A fund selling a large equity position on a public exchange risks market signaling before the order completes. Dark pools solve this by keeping pre-trade order flow confidential while maintaining post-trade reporting and regulatory compliance.
This is the structural model behind Confidential Intents. Similar economic dynamics apply in DeFi, where visible onchain order flow can create extractable value. MEV bots can frontrun pending swaps, sandwich attacks can profit from bracketing user orders, and large positions can be copied or targeted for liquidation. These are measurable costs, which have kept institutional-scale capital on centralized venues. Confidential Intents is designed to provide the same execution quality that institutional participants and power users expect from any serious trading venue.
Using Confidential Mode on
near.com
Confidential Mode operates within your existing
 near.com
 account. There is no separate application, no additional wallet, and no new key management.
First, toggle on. Find the Confidential Mode toggle in the sidebar. Authenticate when prompted. The interface switches to a dark theme to confirm you are in the confidential environment.
Your account now has two balances: Main (standard onchain transparency) and Confidential (encrypted onchain, visible only to you). You can move assets between them at any time via the Transfer screen.
From your confidential balance, you can swap tokens, send funds to other near.com accounts, or withdraw to any supported foreign chain. Transaction details, such as amounts, counterparties, and token pairs, stay off the public NEAR blockchain.
Here’s
a full walkthrough
 of the Confidential Swaps flow on
near.com
.
The Private Shard Architecture Underpinning Confidential Intents
Confidential Intents runs on a NEAR private shard, a dedicated execution environment operated by a decentralized set of independent, permissioned validators, connected to NEAR mainnet via a bridge.
Watch Bowen Wang’s
full NEARCON keynote
 on Nightshade 3.0 and the NEAR Protocol private shard.
The private shard is where confidential transactions execute. It functions as a NEAR shard with restricted visibility. Transactions that occur on the private shard are not exposed on the public NEAR blockchain. The private shard has no public RPC endpoint, API, or block explorer. The permissioned validator set uses a Practical Byzantine Fault Tolerance consensus model that provides ~200ms finality. Tokens on the private shard are burned after withdrawal.
The bridge

connects the private shard to NEAR mainnet and handles fund movement between the confidential and public environments while preserving the integrity boundary.
How a Confidential Transaction Executes
Here is the lifecycle of a confidential swap on near.com:
Deposit.
 You move funds from your Main balance to your Confidential balance. This is a transfer from the public NEAR Intents environment to the private shard. Once the transfer completes, those assets are no longer visible on the public chain.
Execution.
 You initiate a swap from your confidential balance. The swap executes on the private shard. Amounts, token pairs, and routing details are not recorded on the public NEAR blockchain.
Settlement or withdrawal.
 You can hold the resulting assets in your confidential balance, move them back to Main, or withdraw directly to any supported foreign chain.
near.com
 also now supports
confidential withdrawals
. The explorer simply shows an anonymous sender.
The user experience is identical to a standard
 near.com
 swap, with the same one-click cross-chain execution powered by NEAR Intents. The confidentiality layer operates underneath without adding client-side complexity, so no ZK-proof generation, state sync, or additional wallet setup.
Selective Disclosure and Integrity at the Boundary
Confidential Intents provides strong privacy while maintaining legal compliance.
Your confidential balance and full transaction history are encrypted onchain using your wallet's private key. You have complete visibility into your own activity. No other user can decrypt your data.
Confidential Intents plans to roll out a selective disclosure feature, where users hold an account-level view key for their confidential data that they can choose to share with an auditor, tax advisor, compliance officer, or any other party for a limited period of time. This is entirely user-initiated with time-scoped access. No one can compel you to share your view key outside of lawful legal process. NEAR Intents’ financial integrity measures are explained in the
Risk & Compliance docs
, as well as the
NEAR Intents privacy policy
. These measures follow the same posture Signal takes on encrypted metadata and Zcash takes on view keys when legally compelled.
Confidential Intents applies comprehensive screening at ingress, before funds enter the confidential environment, a boundary control that is consistent with industry-standard compliance practices. This means funds are checked against known sanctions lists and flagged addresses at the point of deposit so that identified illicit sources are filtered before they enter the private shard. Once assets pass screening and enter the confidential environment, transactions are not continuously monitored or surveilled. This is the same model used by regulated trading venues that verify participant eligibility at onboarding without observing individual order flow in real time.
This design is what separates Confidential Intents from mixing services, which accept funds from any source and rely on pooling and redistribution to obscure origin. Confidential Intents takes the opposite approach: screen at the boundary, protect execution inside.
Architecture Decisions
Confidential Intents reflects a set of deliberate design choices that distinguish it from other approaches to onchain privacy.
Encryption over proof generation.
 ZK-based privacy systems require users to generate client-side cryptographic proofs for each transaction. This adds computational overhead, wallet complexity, and limits the set of supported operations. Confidential Intents provides confidentiality through the private shard execution environment: encrypted onchain data and restricted validator access. The tradeoff is a trust-minimized model rather than a fully trustless one, in exchange for broader functionality and a standard user experience with no client-side burden.
Compliance-aware by design.
 Fully opaque privacy systems offer strong cryptographic guarantees but provide no mechanism for lawful disclosure. Confidential Intents supports selective disclosure to law enforcement, which will only be done in response to the service of valid legal process, because long-term institutional adoption requires an architecture that can operate in a compliant fashion. The goal is durable privacy infrastructure, not temporary opacity.
Individual encryption, not pooled obfuscation.
 Mixing services pool user funds and redistribute them to break the link between source and destination. Confidential Intents encrypts each user's data individually on the private shard. Your assets are not pooled with other users' funds. Your confidentiality does not depend on the size of an anonymity set.
Confidential Intents’ architecture is ultimately designed to sustain institutional-grade confidential execution at scale while remaining operational over time.
Start Using Confidential Intents
Confidential Mode is live. Toggle it on at
 near.com
, move funds into your confidential balance, and execute your first confidential swap.
