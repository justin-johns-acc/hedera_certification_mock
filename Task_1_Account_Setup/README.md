# Task 1

## Problem
Create a script to generate  Hedera Testnet accounts dynamically. Number of accounts should be taken from the environment and each account should be funded with 100Hbar while creating itself. Print the account IDs, private keys and public keys along with the balance

## Prerequisite
- using node v18.9.0 (npm v8.19.1)
- go to folder (Task_1_Account_Setup)
- `npm install`
- rename .env.eample to .env and fillout the values

## How to run
run command  `npm start`

## output

```
Generated account: 1
Public Key: ccf1e340f65701ee19b3df753d7ae2f16a18feea3011d996221833201f37e318
Private Key: 02a04b19c168fdf72d7884e9214da022dc63e56a4fdf6a253d625dfb9d0937ce
Account ID: 0.0.3417229
Account balance: 10000000000 tinybars.


Generated account: 2
Public Key: d2d87da880cbbabffbc2dc1bcf2ba49c81a99c74e9d4193b24626d4fdce99ddc
Private Key: 5c810b78e3a63aeda5e51588b1a8312defaf01581bdefad40445d7b9e745f4a2
Account ID: 0.0.3417232
Account balance: 10000000000 tinybars.


Generated account: 3
Public Key: d60fe64d30da49e929e10f33df6f4f17e3b48e0512c64deddc442d0e83988c57
Private Key: e0f37499e925d9971c1e71c568367bbbdab5792057875699390106fdfe8004bb
Account ID: 0.0.3417233
Account balance: 10000000000 tinybars.


Generated account: 4
Public Key: 41b992f9204680875e4b6f96becc77c98339dce1487fb07c4c80b7fd70ef971e
Private Key: fd8faddba44da6772d0675789ba463cb2cb9af0bfd871bc6a0df41b2f7170ce7
Account ID: 0.0.3417234
Account balance: 10000000000 tinybars.


Generated account: 5
Public Key: 166cda2a410be9c5d42ff7c2f5953117ced9059f3abf7c6dd9cd1b7c43d8d4a2
Private Key: 58a4fbd8158a3be397d620ede82d6899535a3643b4f322ebe8de2d5d4201568c
Account ID: 0.0.3417235
Account balance: 10000000000 tinybars.

File created: accounts.json
```