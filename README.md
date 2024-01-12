# Bridges for Bridged Usdc

It developed the  USDC Bridge that allows the movement of USDC between L1 (Ethereum) and L2 (NewTitan). The bridge follows the BRIDGED USDC standard provided by Circle, and the L2USDCBridge has minting authority of BRIDGED USDC.

Try running some of the following tasks:

```shell
npx hardhat install --force
npx hardhat test
```

NewTitan deployment is not yet underway.
Please add additional settings after deployment.

```shell
npx hardhat deploy --network sepolia --tags l1UsdcBridge
npx hardhat deploy --network NewTitan --tags l2UsdcBridge
npx hardhat deploy --network NewTitan --tags usdc
```
