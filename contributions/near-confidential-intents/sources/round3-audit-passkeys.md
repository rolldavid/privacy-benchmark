The Bedrock of Security
Aurora
NEAR Intents Passkeys Pull Request Security Review
Lead Security Engineer: Timur Guvenkaya
Date of Engagement: 6th February 2025 - 10th February 2025
Visit: www.guvenkaya.co
Aurora/ NEAR Intents Passkeys Pull Request Security Review
Contents
About Us 01
About Aurora 01
Audit Results 02
.1 Project Scope 02
.2 Out of Scope 03
.3 Timeline 03
Methodology 04
Severity Breakdown 05
.1 Likelihood Ratings 05
.2 Impact 05
.3 Severity Ratings 05
.4 Likelihood Matrix 06
.5 Likelihood/Impact Matrix 06
Findings Summary 07
Findings Details 09
.1 GUV-1 Potential DoS of The Main Functionality Through Malicious Solvers - Medium 09
.2 GUV-2 Anyone Can Fake The Passkey Signature For Their Own Account - Informational 11
.3 GUV-3 Unsafe Callback URL Validation - Informational 12
.4 GUV-4 Insucient Nonce Entropy Validation - Informational 14
.5 GUV-5 Dierent Signature Malleability For Each Curve - Informational 15
The Bedrock of Security
Aurora/ NEAR Intents Passkeys Pull Request Security Review
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
Aurora/ NEAR Intents Passkeys Pull Request Security Review
Audit Results
Guvenkaya conducted a security assessment of the NEAR Intents Passkeys Pull Request from
6th February 2025 to 10th February 2025. During this engagement, a total of 5 ndings were
reported. 1 of the ndings was medium and the remaining were informational severity. All issues were
either xed, acknowledged, or scheduled per the remediation status.
Project Scope
Files Link
Passkeys Pull
Request https://github.com/near/intents/pull/43
The Bedrock of Security 02
Aurora/ NEAR Intents Passkeys Pull Request Security Review
Out of Scope
The audit will include reviewing the code for security vulnerabilities. The audit does not include a
review of the tests and dependencies.
Timeline
Start of the audit
6th February 2025
Draft report
10th February 2025
Final report
6th March 2025
The Bedrock of Security 03
Aurora/ NEAR Intents Passkeys Pull Request Security Review
Methodology
RESEARCH INTO PROJECT ARCHITECTURE
PREPARING ATTACK VECTORS
SETTING UP AN ENVIRONMENT
MANUAL CODE REVIEW OF THE CODE
ASSESSMENT OF RUST SECURITY ISSUES
ASSESSMENT OF NEAR SECURITY ISSUES
ASSESSMENT OF ARITHMETIC ISSUES
BUSINESS LOGIC VULNERABILITY ASSESSMENT
ONCHAIN TESTING USING NEAR WORKSPACES
BEST PRACTICES AND CODE QUALITY
CHECKING FOR CODE REFACTORING/SIMPLIFICATION POSSIBILITIES
ARCHITECTURE IMPROVEMENT SUGGESTIONS
PREPARING POCS AND/OR TESTS FOR EACH CRITICAL/HIGH/MEDIUM ISSUES
The Bedrock of Security 04
Aurora/ NEAR Intents Passkeys Pull Request Security Review
Severity Breakdown
01. Likelihood Ratings
