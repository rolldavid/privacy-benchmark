Audit of Rust p256 Crate
Date: April 7th, 2025
2 / 29
Introduction
On April 7th 2025, NEAR requested zkSecurity to perform a security assessment of the Rust p256 crate
(https://crates.io/crates/p256). No major issues were found and the codebase was found to be thoroughly
tested and well-architected.
In-Scope Components
The scope of the audit included:
Elliptic Curve. The p256 elliptic curve group operations, including (de)serialization and exposed
functionnalities relevant to NEAR.
ECDSA. ECDSA-related code, focused on signature verification (as it is NEARʼs main use case).
Field Arithmetic. The internal scalar and base field implementations for the curve, including
dependencies on the crypto-bigint crate (https://github.com/RustCrypto/crypto-bigint).
Out-of-Scope Components
As the usage mainly focused on signature verification on 32-bit machine, the following items were not the
focus of this audit:
Signature generation. The audit focused on signature verification, as this is the main use case for NEAR.
Constant-time code. Due to the previous point, while we did look at the constant-time code to ensure
correctness of implementation, we did not focus on ensuring that the code was indeed constant-time (as
signature verification does not involve secret data).
64-bit specific code. This is important as many algorithms are reimplemented for 32-bit and 64-bit
machines, and thus the lack of bug in the 32-bit implementation might not necessarily mean that the 64-
bit implementation is bug-free.
Unrelated primitives. We did not look at ECDH or Hash-To-Curve implementations, as they are not used
in NEAR.
Code Base Reviewed
Worthy of note: the audit focused on the last commit of the p256 crate which was
32343a78f1522aa5bd856556f114053d4bb938e0 at the time of the audit and integrated changes like the move
from generic-array to hybrid-array (https://github.com/RustCrypto/elliptic-curves/pull/1011) not used in
NEARʼs code. Although we assume that NEAR will update to the latest version.
Reference Integrations Provided by NEAR
In addition, we were provided the following PRs as example usage of NEAR:
usage of the crate example - https://github.com/near/intents/pull/43/files
example of other precompiles implemented in nearcore - https://github.com/near/nearcore/pull/9317
3 / 29
Overview Of The P-256 Crate
The p256 crate implements the NIST P-256 elliptic curve along with a number of cryptographic schemes that
make use of P-256 (ecdsa, ecdh, hash-to-curve). P-256 is a widely used elliptic curve defined over a prime
field and with a prime order. We define the curve later in this document.
Organization Of The Code
The p256 crate is part of the elliptic-curves repository and provides high-level APIs to access primitives (like
