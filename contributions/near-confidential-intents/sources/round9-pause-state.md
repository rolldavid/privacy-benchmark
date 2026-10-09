# Public canonical-contract pause proposals at the pinned assessment block

Account: intents.sputnik-dao.near. Method: get_proposals. Arguments: from_index=0, limit=200.
Block: 219099811 / HPDLGLmwMeBaxU6jh8txCDTBAPvoFmdQ6WmXo4VeQ7ym. Retrieved: 2026-10-09.

The full raw response and decoded 105 records are preserved in data/near-round9. This is a decoded subset with nanosecond proposal times converted to UTC. Approved proposals alone are not asserted to be execution receipts; the official Oct1 incident statement independently reports a service stop associated with the canonical contract interaction. Unpause calls may be idempotent and are not counted as additional pauses.

[
  {
    "id": 71,
    "status": "Approved",
    "submittedAt": "2026-01-15T17:36:29.867011+00:00",
    "receiver": "intents.near",
    "description": "Unpause the `intents.near` contract",
    "actions": [
      {
        "method_name": "pa_unpause_feature",
        "args": "eyJrZXkiOiAiQUxMIn0=",
        "deposit": "0",
        "gas": "50000000000000",
        "decodedArgs": "{\"key\": \"ALL\"}"
      }
    ]
  },
  {
    "id": 73,
    "status": "Approved",
    "submittedAt": "2026-04-16T17:52:49.732963+00:00",
    "receiver": "intents.near",
    "description": "Unpause `intents.near` contract",
    "actions": [
      {
        "method_name": "pa_unpause_feature",
        "args": "eyJrZXkiOiJBTEwifQ==",
        "deposit": "0",
        "gas": "20000000000000",
        "decodedArgs": "{\"key\":\"ALL\"}"
      }
    ]
  },
  {
    "id": 94,
    "status": "Approved",
    "submittedAt": "2026-09-01T21:00:52.983021+00:00",
    "receiver": "intents.near",
    "description": "",
    "actions": [
      {
        "method_name": "pa_unpause_feature",
        "args": "eyJrZXkiOiAiQUxMIn0=",
        "deposit": "0",
        "gas": "100000000000000",
        "decodedArgs": "{\"key\": \"ALL\"}"
      }
    ]
  },
  {
    "id": 98,
    "status": "Approved",
    "submittedAt": "2026-10-01T10:13:04.462078+00:00",
    "receiver": "intents.near",
    "description": "",
    "actions": [
      {
        "method_name": "pa_unpause_feature",
        "args": "eyJrZXkiOiJBTEwifQ==",
        "deposit": "0",
        "gas": "30000000000000",
        "decodedArgs": "{\"key\":\"ALL\"}"
      },
      {
        "method_name": "pa_pause_feature",
        "args": "eyJrZXkiOiJtdF9vbl90cmFuc2ZlciJ9",
        "deposit": "0",
        "gas": "30000000000000",
        "decodedArgs": "{\"key\":\"mt_on_transfer\"}"
      }
    ]
  },
  {
    "id": 100,
    "status": "Approved",
    "submittedAt": "2026-10-01T21:51:39.488784+00:00",
    "receiver": "intents.near",
    "description": "Unpause MT deposits",
    "actions": [
      {
        "method_name": "pa_unpause_feature",
        "args": "eyJrZXkiOiAibXRfb25fdHJhbnNmZXIifQ==",
        "deposit": "0",
        "gas": "50000000000000",
        "decodedArgs": "{\"key\": \"mt_on_transfer\"}"
      }
    ]
  },
  {
    "id": 104,
    "status": "Approved",
    "submittedAt": "2026-10-07T18:45:26.162573+00:00",
    "receiver": "intents.near",
    "description": "",
    "actions": [
      {
        "method_name": "pa_unpause_feature",
        "args": "eyJrZXkiOiJtdF9vbl90cmFuc2ZlciJ9",
        "deposit": "0",
        "gas": "100000000000000",
        "decodedArgs": "{\"key\":\"mt_on_transfer\"}"
      }
    ]
  }
]

Final verification: repeated the explicit get_proposals query against intents.sputnik-dao.near on the same block. All105 decoded rows exactly equal the earlier archive. Full request/response is losslessly preserved in proofs/final-dao-query.json.gz, with hashes and method/account provenance in proofs/final-dao-query.json.
