Triage ServicesnewBountiesAudits Login  Contact us  Bug bounty program Triaged by HackenProofNEAR Intents: Smart Contracts: Program infoNEAR Intents: Smart Contracts Company: NearSubmit report KYC required  POC required  $5 submission fee  LiveProgram is active nowProgram infoHackers (185)ReportsNEAR Intents is a smart contract developed for the NEAR blockchain. It facilitates atomic P2P transactions among peers, by allow trustless transactions in the smart contract.
All Scope Focus Area Program Rules Disclosure Guidelines Eligibility and Coordinated Disclosure In scopeTargetTypeSeverityhttps://github.com/near/intentsCopy Copied Smart Contract CriticalTargethttps://github.com/near/intentsCopy Copied TypeSmart ContractSeverity CriticalOut of scopeTargetTypeSeverityhttps://github.com/near/intents/tree/main/escrow-swapCopy Copied Smart Contract CriticalTargethttps://github.com/near/intents/tree/main/escrow-swapCopy Copied TypeSmart ContractSeverity CriticalFocus AreaPlease note that the main smart contract in the repository, under the directory defuse, is referred to as the "Verifier" in the ecosystem. Near Intents contains more components that work in tandem to achieve its purpose. Nevertheless, this smart contract, the Verifier, can be used independently without needing anything else.
Documentation:

For more information on how to use the Intents ecosystem, please refer to the documentation.
For technical information about the Verifier smart contract programming primitives (and other smart contracts here), please refer to the cargo documentation page.

IN-SCOPE VULNERABILITIES
The list is not limited to the following submissions but it gives an overview of what issues we care about:

Stealing or loss of funds
Unauthorized transaction
Transaction manipulation
Price manipulation
Fee payment bypass
Balance manipulation
Contracts execution flows
Cryptographic flaws

OUT-OF-SCOPE VULNERABILITIES

Unbounded gas or storage consumption
Griefing (e.g. no profit motive for an attacker, but damage to the users or the protocol)
Network-level DoS
Vulnerabilities in the protocol that are unrelated to smart contract execution

If an impact can be caused to any other asset or service that isn’t in Scope, you are encouraged to submit it for the consideration by the project.
Program Rules
Make every effort not to damage or restrict the availability of products, services, or infrastructure
Avoid compromising any personal data, interruption, or degradation of any service
Don’t access or modify other user data, localize all tests to your accounts
Perform testing only within the scope
Don’t exploit any DoS/DDoS vulnerabilities, social engineering attacks, or spam
In case you find chain vulnerabilities we’ll pay only for vulnerability with the highest severity.
Don’t break any law and stay in the defined scope
Any details of found vulnerabilities must not be communicated to anyone who is not a HackenProof Team or an authorized employee of this Company without appropriate permission
Please note: company is entitled to make the payment in their native NEAR token vested over 1 year.
In case that your finding is valid you might be asked for extra KYC verification to proceed with payments
Perform testing on a private testnet wherever possible
The total maximum reward for High and Critical severity bugs is capped at 10% of the funds that are practically affected by the discovered vulnerability: maxReward = min(10% TVL, maxSeverityBudget).

All findings are limited by top reward in their severity:

Low - up to $1000
Medium - up to $20 000
High - up to $100 000
Critical - up to $ 300 000

Disclosure Guidelines
Do not discuss this program or any vulnerabilities (even resolved ones) outside of the program without express consent from the organization
No vulnerability disclosure, including partial is allowed for the moment.
Please do NOT publish/discuss bugs

Eligibility and Coordinated DisclosureWe are happy to thank everyone who submits valid reports which help us improve the security. However, only those that meet the following eligibility requirements may receive a monetary reward:

You must be the first reporter of a vulnerability.
The vulnerability must be a qualifying vulnerability
Any vulnerability found must be reported no later than 24 hours after discovery and exclusively through hackenproof.com
You must send a clear textual description of the report along with steps to reproduce the issue, include attachments such as screenshots or proof of concept code as necessary.
ONLY USE YOUR HackenProof ADDRESS (in case of violation, no bounty can be awarded)
Provide detailed but to-the point reproduction steps
Employees, spouses, partners, or families of employees, and former employees of Pagoda, Near, and the Near Foundation, Aurora, Defuse Labs and any subsidiaries or contractors, are not eligible to participate in the Bug Bounty program.

 Rewards Range of bounty$100 - $300,000Severity Critical$100,000 - $300,000 High$20,000 - $100,000 Medium$1,000 - $20,000 Low$100 - $1,000 Stats Scope Review301444Submissions342Total rewards$500,200 Typessmart contractblockchainother LanguagesRustWasm Project typesDEXBridgeExecution environment/enginedApp Hackers (185) View all@InfiniteSeckyc1@fromeo016kyc2@nathan47kyc3@tatsuyakyc4@Eeshan5 SLA (Service Level Agreement) Time within which the program's triage team must respondResponse TypeBusiness daysFirst Response3dTriage Time5dReward Time30dResolution Time90d
