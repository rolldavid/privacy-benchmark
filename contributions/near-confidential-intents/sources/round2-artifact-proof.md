# Artifact verification

Scope: public intents.near. The official GitHub ZIP digest and deployed WASM digest were independently recomputed; code was not executed. FAR artifact availability is not a FAR deployment match.

{
  "origin": "https://api.github.com/repos/near/intents/actions/runs/37009701681/artifacts",
  "downloadVia": "https://nightly.link/near/intents/actions/runs/37009701681/res_reproducible.zip",
  "githubArtifactDigest": "sha256:b6e491e7702552a2e0218130d8aeb6645986acbcbac9377ed76fbe8055f77f89",
  "zipSha256": "b6e491e7702552a2e0218130d8aeb6645986acbcbac9377ed76fbe8055f77f89",
  "zipMatchesGithubDigest": true,
  "workflowHeadSha": "a2dd140892b68140bf7e70814604d3ba074d656c",
  "matches": [
    {
      "file": "defuse.wasm",
      "sha256": "c55fbf3ee278b54c499c0084e42b57fc802e9887f125d2e4eb43efd837d9310e",
      "matchesDeployed": true
    }
  ]
}
