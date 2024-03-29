/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type {
  MockERC1271WalletWithCustomValidation,
  MockERC1271WalletWithCustomValidationInterface,
} from "../../../../contracts/test/MockERC1271Wallet.sol/MockERC1271WalletWithCustomValidation";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "signatureValid",
        type: "bool",
      },
    ],
    name: "setSignatureValid",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516102763803806102768339818101604052602081101561003357600080fd5b5051600080546001600160a01b039092166001600160a01b0319909216919091179055610211806100656000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80631626ba7e1461003b57806319fe6ce21461011d575b600080fd5b6100e86004803603604081101561005157600080fd5b8135919081019060408101602082013564010000000081111561007357600080fd5b82018360208201111561008557600080fd5b803590602001918460018302840111640100000000831117156100a757600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955061013e945050505050565b604080517fffffffff000000000000000000000000000000000000000000000000000000009092168252519081900360200190f35b61013c6004803603602081101561013357600080fd5b50351515610191565b005b6000805474010000000000000000000000000000000000000000900460ff1661016857600061018a565b7f1626ba7e000000000000000000000000000000000000000000000000000000005b9392505050565b6000805491151574010000000000000000000000000000000000000000027fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff90921691909117905556fea264697066735822122011c3e1b36b54aa9268cf90c0cfdb573187428c25418620010995d655991c2de364736f6c634300060c0033";

type MockERC1271WalletWithCustomValidationConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockERC1271WalletWithCustomValidationConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockERC1271WalletWithCustomValidation__factory extends ContractFactory {
  constructor(...args: MockERC1271WalletWithCustomValidationConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    owner: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(owner, overrides || {});
  }
  override deploy(
    owner: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(owner, overrides || {}) as Promise<
      MockERC1271WalletWithCustomValidation & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): MockERC1271WalletWithCustomValidation__factory {
    return super.connect(
      runner
    ) as MockERC1271WalletWithCustomValidation__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockERC1271WalletWithCustomValidationInterface {
    return new Interface(
      _abi
    ) as MockERC1271WalletWithCustomValidationInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): MockERC1271WalletWithCustomValidation {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as MockERC1271WalletWithCustomValidation;
  }
}
