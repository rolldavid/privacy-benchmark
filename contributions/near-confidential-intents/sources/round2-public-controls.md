# Public backing ledger control observations

Scope: the mandatory public backing component intents.near and its role holders; these observations do not confirm FAR role assignments. Decoded results below are from read-only NEAR mainnet queries at block 218948544.

## intents.near / acl_get_super_admins
{
  "request": {
    "jsonrpc": "2.0",
    "id": "benchmark-read-only",
    "method": "query",
    "params": {
      "request_type": "call_function",
      "account_id": "intents.near",
      "block_id": "9NmiKwYmGV5cDkovpvfVuQk8LEo6Wbsq75sMMYwM6jYd",
      "method_name": "acl_get_super_admins",
      "args_base64": "eyJza2lwIjogMCwgImxpbWl0IjogMzB9"
    }
  },
  "result": [
    "intents.sputnik-dao.near",
    "intents.near"
  ],
  "blockHeight": 218948544,
  "blockHash": "9NmiKwYmGV5cDkovpvfVuQk8LEo6Wbsq75sMMYwM6jYd"
}

## intents.near / acl_get_grantees
{
  "request": {
    "jsonrpc": "2.0",
    "id": "benchmark-read-only",
    "method": "query",
    "params": {
      "request_type": "call_function",
      "account_id": "intents.near",
      "block_id": "9NmiKwYmGV5cDkovpvfVuQk8LEo6Wbsq75sMMYwM6jYd",
      "method_name": "acl_get_grantees",
      "args_base64": "eyJyb2xlIjogIlVwZ3JhZGVyIiwgInNraXAiOiAwLCAibGltaXQiOiAzMH0="
    }
  },
  "result": [
    "ctl-intents.near"
  ],
  "blockHeight": 218948544,
  "blockHash": "9NmiKwYmGV5cDkovpvfVuQk8LEo6Wbsq75sMMYwM6jYd"
}

## intents.near / acl_get_grantees
{
  "request": {
    "jsonrpc": "2.0",
    "id": "benchmark-read-only",
    "method": "query",
    "params": {
      "request_type": "call_function",
      "account_id": "intents.near",
      "block_id": "9NmiKwYmGV5cDkovpvfVuQk8LEo6Wbsq75sMMYwM6jYd",
      "method_name": "acl_get_grantees",
      "args_base64": "eyJyb2xlIjogIlBhdXNlTWFuYWdlciIsICJza2lwIjogMCwgImxpbWl0IjogMzB9"
    }
  },
  "result": [
    "8e69c33b572dad1f2da6f744c834705e651d3784af2471b58949f2fefd5b55d3",
    "5024319f62e6f45f1b2364e6b92c58413d5279d20730cb2e616a613967cb692c",
    "9600c0ec4de7a77f828965528c8c6028ba3aa430e4537cd25b7865d9430f63ae",
    "ac39364aae9f15438b575f677768c2cf4a7cc74b7dcd198980e8618f003ff538",
    "e33d30ea7c7b271a580bd609100d4f21a07c83f4eb643a1d151c2639471368d0",
    "c98fb45fe2941904f763ff4c2fa2b621b5eb9a57f8daf420679957c08c1a1c34"
  ],
  "blockHeight": 218948544,
  "blockHash": "9NmiKwYmGV5cDkovpvfVuQk8LEo6Wbsq75sMMYwM6jYd"
}

## intents.near / acl_get_grantees
{
  "request": {
    "jsonrpc": "2.0",
    "id": "benchmark-read-only",
    "method": "query",
    "params": {
      "request_type": "call_function",
      "account_id": "intents.near",
      "block_id": "9NmiKwYmGV5cDkovpvfVuQk8LEo6Wbsq75sMMYwM6jYd",
      "method_name": "acl_get_grantees",
      "args_base64": "eyJyb2xlIjogIlVucmVzdHJpY3RlZFdpdGhkcmF3ZXIiLCAic2tpcCI6IDAsICJsaW1pdCI6IDMwfQ=="
    }
  },
  "result": [],
  "blockHeight": 218948544,
  "blockHash": "9NmiKwYmGV5cDkovpvfVuQk8LEo6Wbsq75sMMYwM6jYd"
}

## intents.near / acl_get_grantees
{
  "request": {
    "jsonrpc": "2.0",
    "id": "benchmark-read-only",
    "method": "query",
    "params": {
      "request_type": "call_function",
      "account_id": "intents.near",
      "block_id": "9NmiKwYmGV5cDkovpvfVuQk8LEo6Wbsq75sMMYwM6jYd",
      "method_name": "acl_get_grantees",
      "args_base64": "eyJyb2xlIjogIlVucmVzdHJpY3RlZEFjY291bnRMb2NrZXIiLCAic2tpcCI6IDAsICJsaW1pdCI6IDMwfQ=="
    }
  },
  "result": [
    "ac39364aae9f15438b575f677768c2cf4a7cc74b7dcd198980e8618f003ff538"
  ],
  "blockHeight": 218948544,
  "blockHash": "9NmiKwYmGV5cDkovpvfVuQk8LEo6Wbsq75sMMYwM6jYd"
}

## intents.near / contract_source_metadata
{
  "request": {
    "jsonrpc": "2.0",
    "id": "benchmark-read-only",
    "method": "query",
    "params": {
      "request_type": "call_function",
      "account_id": "intents.near",
      "block_id": "9NmiKwYmGV5cDkovpvfVuQk8LEo6Wbsq75sMMYwM6jYd",
      "method_name": "contract_source_metadata",
      "args_base64": "e30="
    }
  },
  "result": {
    "version": "0.4.4",
    "link": "https://github.com/near/intents/tree/a2dd140892b68140bf7e70814604d3ba074d656c",
    "standards": [
      {
        "standard": "dip4",
        "version": "0.1.0"
      },
      {
        "standard": "nep245",
        "version": "1.0.0"
      },
      {
        "standard": "nep330",
        "version": "1.3.0"
      }
    ],
    "build_info": {
      "build_environment": "sourcescan/cargo-near:0.22.0-rust-1.97.1@sha256:7467038bdddc86484b73b416eeadce926ff59013e128e53dec5a19e1cb4b2234",
      "build_command": [
        "cargo",
        "near",
        "build",
        "non-reproducible-wasm",
        "--locked",
        "--features=contract",
        "--abi-features=abi,contract"
      ],
      "contract_path": "contracts/defuse",
      "source_code_snapshot": "git+https://github.com/near/intents?rev=a2dd140892b68140bf7e70814604d3ba074d656c",
      "output_wasm_path": "/home/near/code/target/near/defuse/defuse.wasm"
    }
  },
  "blockHeight": 218948544,
  "blockHash": "9NmiKwYmGV5cDkovpvfVuQk8LEo6Wbsq75sMMYwM6jYd"
}

## intents.sputnik-dao.near / get_policy
{
  "request": {
    "jsonrpc": "2.0",
    "id": "benchmark-read-only",
    "method": "query",
    "params": {
      "request_type": "call_function",
      "account_id": "intents.sputnik-dao.near",
      "block_id": "9NmiKwYmGV5cDkovpvfVuQk8LEo6Wbsq75sMMYwM6jYd",
      "method_name": "get_policy",
      "args_base64": "e30="
    }
  },
  "result": {
    "roles": [
      {
        "name": "council",
        "kind": {
          "Group": [
            "e33d30ea7c7b271a580bd609100d4f21a07c83f4eb643a1d151c2639471368d0",
            "8e69c33b572dad1f2da6f744c834705e651d3784af2471b58949f2fefd5b55d3",
            "5024319f62e6f45f1b2364e6b92c58413d5279d20730cb2e616a613967cb692c",
            "9600c0ec4de7a77f828965528c8c6028ba3aa430e4537cd25b7865d9430f63ae",
            "ac39364aae9f15438b575f677768c2cf4a7cc74b7dcd198980e8618f003ff538"
          ]
        },
        "permissions": [
          "*:*"
        ],
        "vote_policy": {
          "transfer": {
            "weight_kind": "RoleWeight",
            "quorum": "0",
            "threshold": [
              79,
              100
            ]
          },
          "bounty_done": {
            "weight_kind": "RoleWeight",
            "quorum": "0",
            "threshold": [
              79,
              100
            ]
          },
          "add_bounty": {
            "weight_kind": "RoleWeight",
            "quorum": "0",
            "threshold": [
              79,
              100
            ]
          },
          "policy": {
            "weight_kind": "RoleWeight",
            "quorum": "0",
            "threshold": [
              79,
              100
            ]
          },
          "call": {
            "weight_kind": "RoleWeight",
            "quorum": "0",
            "threshold": [
              79,
              100
            ]
          },
          "upgrade_self": {
            "weight_kind": "RoleWeight",
            "quorum": "0",
            "threshold": [
              79,
              100
            ]
          },
          "config": {
            "weight_kind": "RoleWeight",
            "quorum": "0",
            "threshold": [
              79,
              100
            ]
          },
          "set_vote_token": {
            "weight_kind": "RoleWeight",
            "quorum": "0",
            "threshold": [
              79,
              100
            ]
          },
          "upgrade_remote": {
            "weight_kind": "RoleWeight",
            "quorum": "0",
            "threshold": [
              79,
              100
            ]
          },
          "vote": {
            "weight_kind": "RoleWeight",
            "quorum": "0",
            "threshold": [
              79,
              100
            ]
          },
          "add_member_to_role": {
            "weight_kind": "RoleWeight",
            "quorum": "0",
            "threshold": [
              79,
              100
            ]
          },
          "remove_member_from_role": {
            "weight_kind": "RoleWeight",
            "quorum": "0",
            "threshold": [
              79,
              100
            ]
          }
        }
      },
      {
        "name": "all",
        "kind": "Everyone",
        "permissions": [
          "add_member_to_role:AddProposal",
          "config:AddProposal",
          "call:AddProposal",
          "policy:AddProposal",
          "remove_member_from_role:AddProposal"
        ],
        "vote_policy": {}
      }
    ],
    "default_vote_policy": {
      "weight_kind": "RoleWeight",
      "quorum": "0",
      "threshold": [
        1,
        2
      ]
    },
    "proposal_bond": "100000000000000000000000",
    "proposal_period": "604800000000000",
    "bounty_bond": "100000000000000000000000",
    "bounty_forgiveness_period": "604800000000000"
  },
  "blockHeight": 218948544,
  "blockHash": "9NmiKwYmGV5cDkovpvfVuQk8LEo6Wbsq75sMMYwM6jYd"
}

## intents.sputnik-dao.near / get_config
{
  "request": {
    "jsonrpc": "2.0",
    "id": "benchmark-read-only",
    "method": "query",
    "params": {
      "request_type": "call_function",
      "account_id": "intents.sputnik-dao.near",
      "block_id": "9NmiKwYmGV5cDkovpvfVuQk8LEo6Wbsq75sMMYwM6jYd",
      "method_name": "get_config",
      "args_base64": "e30="
    }
  },
  "result": {
    "name": "intents",
    "purpose": "Intents",
    "metadata": "eyJzb3VsQm91bmRUb2tlbklzc3VlciI6IiIsImxpbmtzIjpbImh0dHBzOi8vbmVhci1pbnRlbnRzLm9yZy8iXSwiZmxhZ0NvdmVyIjoiaHR0cHM6Ly9pcGZzLm5lYXIuc29jaWFsL2lwZnMvYmFma3JlaWNkN3dtamZpenNseDcyeWNtbnNtbzdtN21udmZzeXJ3NndnaHNhc2VxNDV5YnNsYmVqdnkiLCJmbGFnTG9nbyI6Imh0dHBzOi8vaXBmcy5uZWFyLnNvY2lhbC9pcGZzL2JhZmtyZWlhZDVjNHIzbmdtbm03cTZ2NTJqb2F6NHl0aTdrZ3NnbzZsczVwZmJzanpjbGxqcHZvcnN1IiwiZGlzcGxheU5hbWUiOiJJbnRlbnRzIiwibGVnYWwiOnsibGVnYWxTdGF0dXMiOiIiLCJsZWdhbExpbmsiOiIifX0="
  },
  "blockHeight": 218948544,
  "blockHash": "9NmiKwYmGV5cDkovpvfVuQk8LEo6Wbsq75sMMYwM6jYd"
}

## intents.sputnik-dao.near / version
{
  "request": {
    "jsonrpc": "2.0",
    "id": "benchmark-read-only",
    "method": "query",
    "params": {
      "request_type": "call_function",
      "account_id": "intents.sputnik-dao.near",
      "block_id": "9NmiKwYmGV5cDkovpvfVuQk8LEo6Wbsq75sMMYwM6jYd",
      "method_name": "version",
      "args_base64": "e30="
    }
  },
  "result": "2.3.1",
  "blockHeight": 218948544,
  "blockHash": "9NmiKwYmGV5cDkovpvfVuQk8LEo6Wbsq75sMMYwM6jYd"
}

## intents.near / acl_get_grantees
{
  "request": {
    "jsonrpc": "2.0",
    "id": "benchmark-read-only",
    "method": "query",
    "params": {
      "request_type": "call_function",
      "account_id": "intents.near",
      "block_id": "9NmiKwYmGV5cDkovpvfVuQk8LEo6Wbsq75sMMYwM6jYd",
      "method_name": "acl_get_grantees",
      "args_base64": "eyJyb2xlIjogIkRBTyIsICJza2lwIjogMCwgImxpbWl0IjogMzB9"
    }
  },
  "result": [
    "intents.sputnik-dao.near"
  ],
  "blockHeight": 218948544,
  "blockHash": "9NmiKwYmGV5cDkovpvfVuQk8LEo6Wbsq75sMMYwM6jYd"
}

## Privileged account / view_account
{
  "request": {
    "jsonrpc": "2.0",
    "id": "benchmark-read-only",
    "method": "query",
    "params": {
      "request_type": "view_account",
      "account_id": "ac39364aae9f15438b575f677768c2cf4a7cc74b7dcd198980e8618f003ff538",
      "block_id": "9NmiKwYmGV5cDkovpvfVuQk8LEo6Wbsq75sMMYwM6jYd"
    }
  },
  "response": {
    "jsonrpc": "2.0",
    "result": {
      "amount": "2961695518163708100000000",
      "block_hash": "9NmiKwYmGV5cDkovpvfVuQk8LEo6Wbsq75sMMYwM6jYd",
      "block_height": 218948544,
      "code_hash": "11111111111111111111111111111111",
      "locked": "0",
      "storage_paid_at": 0,
      "storage_usage": 182
    },
    "id": "benchmark-read-only"
  }
}

## Privileged account / view_access_key_list
{
  "request": {
    "jsonrpc": "2.0",
    "id": "benchmark-read-only",
    "method": "query",
    "params": {
      "request_type": "view_access_key_list",
      "account_id": "ac39364aae9f15438b575f677768c2cf4a7cc74b7dcd198980e8618f003ff538",
      "block_id": "9NmiKwYmGV5cDkovpvfVuQk8LEo6Wbsq75sMMYwM6jYd"
    }
  },
  "response": {
    "jsonrpc": "2.0",
    "result": {
      "block_hash": "9NmiKwYmGV5cDkovpvfVuQk8LEo6Wbsq75sMMYwM6jYd",
      "block_height": 218948544,
      "keys": [
        {
          "access_key": {
            "nonce": 132090113000074,
            "permission": "FullAccess"
          },
          "public_key": "ed25519:CbHiv3nwPGmyBaP4owbUW4aiHTJcZX881H7xDvsJYw6P"
        }
      ]
    },
    "id": "benchmark-read-only"
  }
}
