The Bedrock of Security
Aurora
NEAR Intents Security Review
Lead Security Engineers: [Timur Guvenkaya, Michal Bajor]
Date of Engagement: 12th February 2025 - 5th March 2025
Visit: www.guvenkaya.co
Aurora/ NEAR Intents Security Review
Contents
About Us 01
About Aurora 01
Audit Results 02
.1 Project Scope 02
.2 Out of Scope 10
.3 Timeline 10
Methodology 11
Severity Breakdown 12
.1 Likelihood Ratings 12
.2 Impact 12
.3 Severity Ratings 12
.4 Likelihood Matrix 13
.5 Likelihood/Impact Matrix 13
Findings Summary 14
Findings Details 16
.1 GUV-1 Potential Funds Stealing From Users Via Repeating Failed Intents - Medium 16
.2 GUV-2 Possible DoS Of Public Keys Viewing Per User - Low 18
.3 GUV-3 Arbitrary Public Key Setting In Privileged Functions - Informational 19
.4 GUV-4 Missing Event Emission For Critical Access Control Operations - Informational 20
The Bedrock of Security
Aurora/ NEAR Intents Security Review
About Us
Guvenkaya is a security research rm specializing in Rust security, Web3
security of Non-EVM protocols, and Web2 security. With our expertise, we
provide both security auditing services and custom security solutions
About Aurora
Aurora is a Virtual Chain built on NEAR. It’s, at the same time, the sandbox
and the proof of the robustness of the parent protocol. It’s a smart contract -
probably the most complex that exists - that is also an Ethereum Virtual
Machine, providing a turn-key solution for developers to operate their apps
on an Ethereum-compatible, high-throughput, scalable and future-safe
platform, with low transaction costs.
The Bedrock of Security 01
Aurora/ NEAR Intents Security Review
Audit Results
Guvenkaya conducted a security assessment of the NEAR Intents from 12th February 2025 to 5th
March 2025. NEAR Intents are a new type of transaction that allow information, requests, assets, and
actions to be exchanged between AI agents, services, and end users. During this engagement, a total
of 4 ndings were reported. 1 of the ndings was medium and the remaining were either low or
informational severity. The Aurora team has not xed the issues yet.
Project Scope
Files Link
Admin Utils Lib https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/admin-utils/src/lib.rs
Full Access
Keys
https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/admin-utils/src/full_access_keys.rs
Bitmap Lib https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/bitmap/src/lib.rs
Borsh Utils Lib https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/borsh-utils/src/lib.rs
Base64 https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/borsh-utils/src/base64.rs
String https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/borsh-utils/src/string.rs
Controller Lib https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/controller/src/lib.rs
Core Lib https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/core/src/lib.rs
Accounts https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/core/src/accounts.rs
Deadline https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/core/src/deadline.rs
The Bedrock of Security 02
Aurora/ NEAR Intents Security Review
Files Link
Engine Mod https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/core/src/engine/mod.rs
Engine
Inspector
https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/core/src/engine/inspector.rs
State Mod https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/core/src/engine/state/mod.rs
State Cached https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/core/src/engine/state/cached.rs
State Deltas https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/core/src/engine/state/deltas.rs
Error https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/core/src/error.rs
Events https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/core/src/events.rs
Fees https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/core/src/fees.rs
Intents Mod https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/core/src/intents/mod.rs
Intent Account https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/core/src/intents/account.rs
Token Di https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/core/src/intents/token_di.rs
Tokens (Intents) https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/core/src/intents/tokens.rs
Nonce https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/core/src/nonce.rs
Payload Mod https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/core/src/payload/mod.rs
The Bedrock of Security 03
Aurora/ NEAR Intents Security Review
Files Link
ERC191 Payload https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/core/src/payload/erc191.rs
Multi Payload https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/core/src/payload/multi.rs
NEP413 Payload https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/core/src/payload/nep413.rs
Raw Payload https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/core/src/payload/raw.rs
WebAuthn
Payload
https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/core/src/payload/webauthn.rs
Tokens (Core) https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/core/src/tokens.rs
Crypto Lib https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/crypto/src/lib.rs
Curve Mod https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/crypto/src/curve/mod.rs
ED25519 https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/crypto/src/curve/ed25519.rs
P256 https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/crypto/src/curve/p256.rs
Secp256k1 https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/crypto/src/curve/secp256k1.rs
Payload (Crypto) https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/crypto/src/payload.rs
Public Key https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/crypto/src/public_key.rs
Serde Mod https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/crypto/src/serde/mod.rs
The Bedrock of Security 04
Aurora/ NEAR Intents Security Review
Files Link
Serde Curve https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/crypto/src/serde/curve.rs
Signature https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/crypto/src/signature.rs
Defuse Lib https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/defuse/src/lib.rs
Accounts
(Defuse)
https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/defuse/src/accounts.rs
Contract Mod https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/defuse/src/contract/mod.rs
ABI https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/defuse/src/contract/abi.rs
Accounts Mod https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/defuse/src/contract/accounts/mod.rs
Account https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/defuse/src/contract/accounts/account.rs
State (Accounts) https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/defuse/src/contract/accounts/state.rs
Admin https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/defuse/src/contract/admin.rs
Cong https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/defuse/src/contract/cong.rs
Events
(Contract)
https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/defuse/src/contract/events.rs
Fees (Contract) https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/defuse/src/contract/fees.rs
Intents Mod
(Contract)
https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/defuse/src/contract/intents/mod.rs
The Bedrock of Security 05
Aurora/ NEAR Intents Security Review
Files Link
Execute https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/defuse/src/contract/intents/execute.rs
Relayer https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/defuse/src/contract/intents/relayer.rs
Simulate https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/defuse/src/contract/intents/simulate.rs
State (Intents) https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/defuse/src/contract/intents/state.rs
State (Contract) https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/defuse/src/contract/state.rs
Tokens Mod
(Contract)
https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/defuse/src/contract/tokens/mod.rs
NEP141 Mod https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/defuse/src/contract/tokens/nep141/mod.rs
NEP141 Deposit https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/defuse/src/contract/tokens/nep141/deposit.rs
NEP141 Native https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/defuse/src/contract/tokens/nep141/native.rs
NEP141
Withdraw
https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/defuse/src/contract/tokens/nep141/withdraw.rs
NEP171 Mod https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/defuse/src/contract/tokens/nep171/mod.rs
NEP171 Deposit https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/defuse/src/contract/tokens/nep171/deposit.rs
NEP171
Withdraw
https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/defuse/src/contract/tokens/nep171/withdraw.rs
NEP245 Mod https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/defuse/src/contract/tokens/nep245/mod.rs
The Bedrock of Security 06
Aurora/ NEAR Intents Security Review
Files Link
NEP245 Core https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/defuse/src/contract/tokens/nep245/core.rs
NEP245
Deposit
https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/defuse/src/contract/tokens/nep245/deposit.rs
NEP245
Resolver
https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/defuse/src/contract/tokens/nep245/resolver.rs
NEP245
Withdraw
https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/defuse/src/contract/tokens/nep245/withdraw.rs
Upgrade https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/defuse/src/contract/upgrade.rs
Fees (Defuse) https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/defuse/src/fees.rs
Intents (Defuse) https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/defuse/src/intents.rs
Tokens Mod
(Defuse)
https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/defuse/src/tokens/mod.rs
NEP141 (Defuse) https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/defuse/src/tokens/nep141.rs
NEP171 (Defuse) https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/defuse/src/tokens/nep171.rs
NEP245
(Defuse)
https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/defuse/src/tokens/nep245.rs
ERC191 Lib https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/erc191/src/lib.rs
Map Utils Lib https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/map-utils/src/lib.rs
BTree Map https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/map-utils/src/btree_map.rs
The Bedrock of Security 07
Aurora/ NEAR Intents Security Review
Files Link
Cleanup https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/map-utils/src/cleanup.rs
Hash Map https://github.com/near/intents/blob/6da9e2b3ab598f277d45fb356aee01a5d8
0ac0a6/map-utils/src/hash_map.rs
