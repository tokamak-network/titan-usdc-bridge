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
import type { NonPayableOverrides } from "../../../common";
import type {
  ContractThatCallsPublicFunctions,
  ContractThatCallsPublicFunctionsInterface,
} from "../../../contracts/test/ContractThatCallsPublicFunctions";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
    ],
    name: "callGetBar",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
    ],
    name: "callGetFoo",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "bar",
        type: "uint256",
      },
    ],
    name: "callSetBar",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "foo",
        type: "string",
      },
    ],
    name: "callSetFoo",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061057a806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80630b79399d14610051578063e13b888f146100f2578063e6e0454d1461019a578063f79412e5146101df575b600080fd5b6100de6004803603604081101561006757600080fd5b73ffffffffffffffffffffffffffffffffffffffff823516919081019060408101602082013564010000000081111561009f57600080fd5b8201836020820111156100b157600080fd5b803590602001918460018302840111640100000000831117156100d357600080fd5b509092509050610218565b604080519115158252519081900360200190f35b6101256004803603602081101561010857600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166102e8565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561015f578181015183820152602001610147565b50505050905090810190601f16801561018c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101cd600480360360208110156101b057600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610442565b60408051918252519081900360200190f35b6100de600480360360408110156101f557600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356104bc565b6040517fcfcb15660000000000000000000000000000000000000000000000000000000081526020600482019081526024820183905260009173ffffffffffffffffffffffffffffffffffffffff86169163cfcb156691869186918190604401848480828437600081840152601f19601f8201169050808301925050509350505050602060405180830381600087803b1580156102b457600080fd5b505af11580156102c8573d6000803e3d6000fd5b505050506040513d60208110156102de57600080fd5b5051949350505050565b60608173ffffffffffffffffffffffffffffffffffffffff1663243dc8da6040518163ffffffff1660e01b815260040160006040518083038186803b15801561033057600080fd5b505afa158015610344573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052602081101561038b57600080fd5b81019080805160405193929190846401000000008211156103ab57600080fd5b9083019060208201858111156103c057600080fd5b82516401000000008111828201881017156103da57600080fd5b82525081516020918201929091019080838360005b838110156104075781810151838201526020016103ef565b50505050905090810190601f1680156104345780820380516001836020036101000a031916815260200191505b506040525050509050919050565b60008173ffffffffffffffffffffffffffffffffffffffff166367a23d136040518163ffffffff1660e01b815260040160206040518083038186803b15801561048a57600080fd5b505afa15801561049e573d6000803e3d6000fd5b505050506040513d60208110156104b457600080fd5b505192915050565b60008273ffffffffffffffffffffffffffffffffffffffff1663352d3fba836040518263ffffffff1660e01b815260040180828152602001915050602060405180830381600087803b15801561051157600080fd5b505af1158015610525573d6000803e3d6000fd5b505050506040513d602081101561053b57600080fd5b5051939250505056fea2646970667358221220f7ab536bc12f3cf8559eeafd62725657e101135460f2b54fc0ea1711385f44aa64736f6c634300060c0033";

type ContractThatCallsPublicFunctionsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ContractThatCallsPublicFunctionsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ContractThatCallsPublicFunctions__factory extends ContractFactory {
  constructor(...args: ContractThatCallsPublicFunctionsConstructorParams) {
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
      ContractThatCallsPublicFunctions & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): ContractThatCallsPublicFunctions__factory {
    return super.connect(runner) as ContractThatCallsPublicFunctions__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ContractThatCallsPublicFunctionsInterface {
    return new Interface(_abi) as ContractThatCallsPublicFunctionsInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ContractThatCallsPublicFunctions {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as ContractThatCallsPublicFunctions;
  }
}