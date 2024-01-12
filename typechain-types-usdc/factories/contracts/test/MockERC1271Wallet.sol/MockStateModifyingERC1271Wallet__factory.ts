/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type {
  MockStateModifyingERC1271Wallet,
  MockStateModifyingERC1271WalletInterface,
} from "../../../../contracts/test/MockERC1271Wallet.sol/MockStateModifyingERC1271Wallet";

const _abi = [
  {
    inputs: [],
    name: "evoked",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "isValidSignature",
    outputs: [
      {
        internalType: "bytes4",
        name: "magicValue",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506101ca806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80631626ba7e1461003b578063bcb2e7ba1461011d575b600080fd5b6100e86004803603604081101561005157600080fd5b8135919081019060408101602082013564010000000081111561007357600080fd5b82018360208201111561008557600080fd5b803590602001918460018302840111640100000000831117156100a757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610139945050505050565b604080517fffffffff000000000000000000000000000000000000000000000000000000009092168252519081900360200190f35b61012561018b565b604080519115158252519081900360200190f35b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790557f1626ba7e0000000000000000000000000000000000000000000000000000000092915050565b60005460ff169056fea2646970667358221220009da115bb0a13827d4b6f5c0a9416d32057443aae36b3dfef5c2bdae658d26d64736f6c634300060c0033";

type MockStateModifyingERC1271WalletConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockStateModifyingERC1271WalletConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockStateModifyingERC1271Wallet__factory extends ContractFactory {
  constructor(...args: MockStateModifyingERC1271WalletConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      MockStateModifyingERC1271Wallet & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): MockStateModifyingERC1271Wallet__factory {
    return super.connect(runner) as MockStateModifyingERC1271Wallet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockStateModifyingERC1271WalletInterface {
    return new Interface(_abi) as MockStateModifyingERC1271WalletInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): MockStateModifyingERC1271Wallet {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as MockStateModifyingERC1271Wallet;
  }
}
