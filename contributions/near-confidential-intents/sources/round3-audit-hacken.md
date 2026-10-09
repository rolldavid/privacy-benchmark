Smart Contract CodeReview And SecurityAnalysis Report
Customer: Aurora Labs Limited
Date: 27/01/2025

We express our gratitude to the Aurora Labs Limited team for the collaborative engagementthat enabled the execution of this Smart Contract Security Assessment.
NEAR Intents is a protocol for multichain ﬁnancial products built by Aurora.
Document
Name Smart Contract Code Review and Security Analysis Report for Aurora
Labs Limited
Audited ByStepan Chekhovskoi
Approved ByOlesia Bilenka
Website https://aurora.dev
Changelog20/01/2025 - Initial Report
27/01/2025 - Second Report
Platform NEAR
LanguageRust
Tags DeX, DeFi
Methodologyhttps://hackenio.cc/sc_methodology
Review Scope
Repository https://github.com/near/intents
Initial Commit160ba5829fea636283375ec462042d51409a6e66
Second Commit91fee5e119fd74d8de1dbb57d27060873a0ae503
2
Audit Summary
The system users should acknowledge all the risks summed up in the risks section of thereport
5 2 2 1
Total Findings Resolved Accepted Mitigated
Findings by Severity
Severity Count
Critical 0
High 0
Medium 4
Low 1

Vulnerability Severity
F-2025-8337 - Inability to Execute Swap due to Fee Calculation MechanismMedium
F-2025-8338 - Proﬁtable intents Interception due to Front Running Medium
F-2025-8343 - Lack of Full Access Key Veriﬁcation for Fee Update Medium
F-2025-8345 - Native Balance Exhausting due to Unpaid Storage Increase Medium
F-2025-8339 - Lack of Signed Payload Versioning Low
3
Documentation quality
Functional overview is provided.Detailed functional requirements are missing.Technical description is partially provided.
Code quality
Development environment is set up.Code lacks comments essential for complex architecture understanding.Code follows best coding practices.
Test coverage
Code coverage of the project is 22% (region coverage).
