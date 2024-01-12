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
  Pausable,
  PausableInterface,
} from "../../../contracts/v1/Pausable";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "Pause",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newAddress",
        type: "address",
      },
    ],
    name: "PauserChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "Unpause",
    type: "event",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
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
    inputs: [],
    name: "pauser",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newPauser",
        type: "address",
      },
    ],
    name: "updatePauser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040526001805460ff60a01b1916905534801561001d57600080fd5b506100273361002c565b61004e565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b6106ec8061005d6000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80638456cb591161005b5780638456cb59146100db5780638da5cb5b146100e35780639fd0506d14610114578063f2fde38b1461011c5761007d565b80633f4ba83a14610082578063554bab3c1461008c5780635c975abb146100bf575b600080fd5b61008a61014f565b005b61008a600480360360208110156100a257600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610212565b6100c7610379565b604080519115158252519081900360200190f35b61008a61039a565b6100eb610474565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6100eb610490565b61008a6004803603602081101561013257600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166104ac565b60015473ffffffffffffffffffffffffffffffffffffffff1633146101bf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806106956022913960400191505060405180910390fd5b600180547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff1690556040517f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3390600090a1565b60005473ffffffffffffffffffffffffffffffffffffffff16331461029857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff8116610304576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260288152602001806106476028913960400191505060405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83811691909117918290556040519116907fb80482a293ca2e013eda8683c9bd7fc8347cfdaeea5ede58cba46df502c2a60490600090a250565b60015474010000000000000000000000000000000000000000900460ff1681565b60015473ffffffffffffffffffffffffffffffffffffffff16331461040a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806106956022913960400191505060405180910390fd5b600180547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff16740100000000000000000000000000000000000000001790556040517f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62590600090a1565b60005473ffffffffffffffffffffffffffffffffffffffff1690565b60015473ffffffffffffffffffffffffffffffffffffffff1681565b60005473ffffffffffffffffffffffffffffffffffffffff16331461053257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff811661059e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602681526020018061066f6026913960400191505060405180910390fd5b6000546040805173ffffffffffffffffffffffffffffffffffffffff9283168152918316602083015280517f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09281900390910190a16105fc816105ff565b50565b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9290921691909117905556fe5061757361626c653a206e65772070617573657220697320746865207a65726f20616464726573734f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573735061757361626c653a2063616c6c6572206973206e6f742074686520706175736572a26469706673582212201aa55385f86f38c99cba2f475382082e850d4f68bcd5059a1cb1940dfd9f13fe64736f6c634300060c0033";

type PausableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PausableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Pausable__factory extends ContractFactory {
  constructor(...args: PausableConstructorParams) {
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
      Pausable & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Pausable__factory {
    return super.connect(runner) as Pausable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PausableInterface {
    return new Interface(_abi) as PausableInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Pausable {
    return new Contract(address, _abi, runner) as unknown as Pausable;
  }
}