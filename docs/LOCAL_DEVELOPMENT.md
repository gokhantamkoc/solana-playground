# Local Development

## Starting a Local Validator

> Note: Before installing SOLANA make sure bzip2 is installed on your computer.

```shell
$ solana-test-validator
```

## Benefits of Using Local Environment

Benefits of using local-test-validator include:

- No RPC rate-limits
- No airdrop limits
- Direct on-chain program deployment (`--bpf-program ...`)
- Clone accounts from a public cluster, including programs (`--clone ...`)
- Configurable transaction history retention (`--limit-ledger-size ...`)
- Configurable epoch length (`--slots-per-epoch ...`)
- Jump to an arbitrary slot (`--warp-slot ...`)

## Connecting to Local Environments


