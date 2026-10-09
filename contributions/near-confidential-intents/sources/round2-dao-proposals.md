# Public onchain proposals

Scope: public backing ledger governance; no private FAR governance claim. Read from intents.sputnik-dao.near at block 218948544.

[
  {
    "id": 98,
    "proposer": "8e69c33b572dad1f2da6f744c834705e651d3784af2471b58949f2fefd5b55d3",
    "description": "",
    "kind": {
      "FunctionCall": {
        "receiver_id": "intents.near",
        "actions": [
          {
            "method_name": "pa_unpause_feature",
            "args": "eyJrZXkiOiJBTEwifQ==",
            "deposit": "0",
            "gas": "30000000000000"
          },
          {
            "method_name": "pa_pause_feature",
            "args": "eyJrZXkiOiJtdF9vbl90cmFuc2ZlciJ9",
            "deposit": "0",
            "gas": "30000000000000"
          }
        ]
      }
    },
    "status": "Approved",
    "vote_counts": {
      "council": [
        4,
        0,
        0
      ]
    },
    "votes": {
      "8e69c33b572dad1f2da6f744c834705e651d3784af2471b58949f2fefd5b55d3": "Approve",
      "9600c0ec4de7a77f828965528c8c6028ba3aa430e4537cd25b7865d9430f63ae": "Approve",
      "5024319f62e6f45f1b2364e6b92c58413d5279d20730cb2e616a613967cb692c": "Approve",
      "ac39364aae9f15438b575f677768c2cf4a7cc74b7dcd198980e8618f003ff538": "Approve"
    },
    "submission_time": "1790849584462078280"
  },
  {
    "id": 99,
    "proposer": "8e69c33b572dad1f2da6f744c834705e651d3784af2471b58949f2fefd5b55d3",
    "description": "Verifier contract upgrade to `defuse/v0.4.3` release\nReproducible WASM is taken from https://github.com/near/intents/actions/runs/36928990533",
    "kind": {
      "FunctionCall": {
        "receiver_id": "ctl-intents.near",
        "actions": [
          {
            "method_name": "add_release_info",
            "args": "ewogICJoYXNoIjogImUxZjE3ODYzM2ViMzFiY2QwMDQ5MWVkZWI0NjdmODE3N2IwNTgzN2VlODdhYTU2NGI3MDBjNTIzMjY1MTcwN2IiLAogICJ2ZXJzaW9uIjogIjAuNC4zIiwKICAiaXNfbGF0ZXN0IjogdHJ1ZSwKICAiZG93bmdyYWRlX2hhc2giOiAiZjRiOTA4YjYzMTU2MmQ2MmMxMzNjYzU4YjBhMDUzZGFiNDFkNmUyNDM5OTBjNTQ2OTRhYzQyMjY0Njc5ZjRlYSIKfQ==",
            "deposit": "1",
            "gas": "100000000000000"
          }
        ]
      }
    },
    "status": "Approved",
    "vote_counts": {
      "council": [
        4,
        0,
        0
      ]
    },
    "votes": {
      "8e69c33b572dad1f2da6f744c834705e651d3784af2471b58949f2fefd5b55d3": "Approve",
      "ac39364aae9f15438b575f677768c2cf4a7cc74b7dcd198980e8618f003ff538": "Approve",
      "9600c0ec4de7a77f828965528c8c6028ba3aa430e4537cd25b7865d9430f63ae": "Approve",
      "5024319f62e6f45f1b2364e6b92c58413d5279d20730cb2e616a613967cb692c": "Approve"
    },
    "submission_time": "1790891385029702414"
  },
  {
    "id": 100,
    "proposer": "8e69c33b572dad1f2da6f744c834705e651d3784af2471b58949f2fefd5b55d3",
    "description": "Unpause MT deposits",
    "kind": {
      "FunctionCall": {
        "receiver_id": "intents.near",
        "actions": [
          {
            "method_name": "pa_unpause_feature",
            "args": "eyJrZXkiOiAibXRfb25fdHJhbnNmZXIifQ==",
            "deposit": "0",
            "gas": "50000000000000"
          }
        ]
      }
    },
    "status": "Approved",
    "vote_counts": {
      "council": [
        4,
        0,
        0
      ]
    },
    "votes": {
      "5024319f62e6f45f1b2364e6b92c58413d5279d20730cb2e616a613967cb692c": "Approve",
      "ac39364aae9f15438b575f677768c2cf4a7cc74b7dcd198980e8618f003ff538": "Approve",
      "8e69c33b572dad1f2da6f744c834705e651d3784af2471b58949f2fefd5b55d3": "Approve",
      "9600c0ec4de7a77f828965528c8c6028ba3aa430e4537cd25b7865d9430f63ae": "Approve"
    },
    "submission_time": "1790891499488783586"
  },
  {
    "id": 101,
    "proposer": "8e69c33b572dad1f2da6f744c834705e651d3784af2471b58949f2fefd5b55d3",
    "description": "Follow-up upgrade of verifier contract to `defuse/v0.4.4`.\nReproducible WASM is taken from https://github.com/near/intents/actions/runs/37009701681",
    "kind": {
      "FunctionCall": {
        "receiver_id": "ctl-intents.near",
        "actions": [
          {
            "method_name": "add_release_info",
            "args": "ewogICJoYXNoIjogImM1NWZiZjNlZTI3OGI1NGM0OTljMDA4NGU0MmI1N2ZjODAyZTk4ODdmMTI1ZDJlNGViNDNlZmQ4MzdkOTMxMGUiLAogICJ2ZXJzaW9uIjogIjAuNC40IiwKICAiaXNfbGF0ZXN0IjogdHJ1ZSwKICAiZG93bmdyYWRlX2hhc2giOiAiZTFmMTc4NjMzZWIzMWJjZDAwNDkxZWRlYjQ2N2Y4MTc3YjA1ODM3ZWU4N2FhNTY0YjcwMGM1MjMyNjUxNzA3YiIKfQ==",
            "deposit": "1",
            "gas": "100000000000000"
          }
        ]
      }
    },
    "status": "Approved",
    "vote_counts": {
      "council": [
        4,
        0,
        0
      ]
    },
    "votes": {
      "ac39364aae9f15438b575f677768c2cf4a7cc74b7dcd198980e8618f003ff538": "Approve",
      "5024319f62e6f45f1b2364e6b92c58413d5279d20730cb2e616a613967cb692c": "Approve",
      "9600c0ec4de7a77f828965528c8c6028ba3aa430e4537cd25b7865d9430f63ae": "Approve",
      "8e69c33b572dad1f2da6f744c834705e651d3784af2471b58949f2fefd5b55d3": "Approve"
    },
    "submission_time": "1790947372050351446"
  }
]
