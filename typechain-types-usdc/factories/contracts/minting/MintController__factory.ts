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
import type { NonPayableOverrides } from "../../../common";
import type {
  MintController,
  MintControllerInterface,
} from "../../../contracts/minting/MintController";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_minterManager",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_controller",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_worker",
        type: "address",
      },
    ],
    name: "ControllerConfigured",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_controller",
        type: "address",
      },
    ],
    name: "ControllerRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "msgSender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "minter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "decrement",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newAllowance",
        type: "uint256",
      },
    ],
    name: "MinterAllowanceDecremented",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_msgSender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_minter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_increment",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_newAllowance",
        type: "uint256",
      },
    ],
    name: "MinterAllowanceIncremented",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_msgSender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_minter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_allowance",
        type: "uint256",
      },
    ],
    name: "MinterConfigured",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_oldMinterManager",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_newMinterManager",
        type: "address",
      },
    ],
    name: "MinterManagerSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_msgSender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_minter",
        type: "address",
      },
    ],
    name: "MinterRemoved",
    type: "event",
  },
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
    inputs: [
      {
        internalType: "address",
        name: "_controller",
        type: "address",
      },
      {
        internalType: "address",
        name: "_worker",
        type: "address",
      },
    ],
    name: "configureController",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_newAllowance",
        type: "uint256",
      },
    ],
    name: "configureMinter",
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
        internalType: "uint256",
        name: "_allowanceDecrement",
        type: "uint256",
      },
    ],
    name: "decrementMinterAllowance",
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
    inputs: [],
    name: "getMinterManager",
    outputs: [
      {
        internalType: "contract MinterManagementInterface",
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
        name: "_controller",
        type: "address",
      },
    ],
    name: "getWorker",
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
        internalType: "uint256",
        name: "_allowanceIncrement",
        type: "uint256",
      },
    ],
    name: "incrementMinterAllowance",
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
    inputs: [
      {
        internalType: "address",
        name: "_controller",
        type: "address",
      },
    ],
    name: "removeController",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "removeMinter",
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
        name: "_newMinterManager",
        type: "address",
      },
    ],
    name: "setMinterManager",
    outputs: [],
    stateMutability: "nonpayable",
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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516115763803806115768339818101604052602081101561003357600080fd5b505161003e33610063565b600280546001600160a01b0319166001600160a01b0392909216919091179055610085565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b6114e2806100946000396000f3fe608060405234801561001057600080fd5b50600436106100c95760003560e01c8063c011b1c311610081578063ea7215691161005b578063ea72156914610215578063f2fde38b1461021d578063f6a74ed714610250576100c9565b8063c011b1c31461018a578063c4faf7df146101bd578063cbf2b8bf146101f8576100c9565b80637c6b8ef5116100b25780637c6b8ef5146101345780638da5cb5b146101515780639398608b14610182576100c9565b806333db2ad2146100ce578063542fef91146100ff575b600080fd5b6100eb600480360360208110156100e457600080fd5b5035610283565b604080519115158252519081900360200190f35b6101326004803603602081101561011557600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610573565b005b6100eb6004803603602081101561014a57600080fd5b5035610687565b61015961098b565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6101596109a7565b610159600480360360208110156101a057600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166109c3565b610132600480360360408110156101d357600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160200135166109ee565b6100eb6004803603602081101561020e57600080fd5b5035610bc8565b6100eb610cb5565b6101326004803603602081101561023357600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610e2b565b6101326004803603602081101561026657600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610f7e565b3360009081526001602052604081205473ffffffffffffffffffffffffffffffffffffffff166102fe576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260358152602001806113dc6035913960400191505060405180910390fd5b60008211610357576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180611411602a913960400191505060405180910390fd5b336000908152600160209081526040918290205460025483517faa271e1a00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff928316600482018190529451929091169263aa271e1a92602480840193829003018186803b1580156103d957600080fd5b505afa1580156103ed573d6000803e3d6000fd5b505050506040513d602081101561040357600080fd5b505161045a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603981526020018061143b6039913960400191505060405180910390fd5b600254604080517f8a6db9c300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff848116600483015291516000939290921691638a6db9c391602480820192602092909190829003018186803b1580156104d157600080fd5b505afa1580156104e5573d6000803e3d6000fd5b505050506040513d60208110156104fb57600080fd5b50519050600061050b8286611161565b6040805187815260208101839052815192935073ffffffffffffffffffffffffffffffffffffffff86169233927f3703d23abba1e61f32acc0682fc062ea5c710672c7d100af5ecd08485e983ad0928290030190a361056a83826111d5565b95945050505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146105f957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b60025460405173ffffffffffffffffffffffffffffffffffffffff8084169216907f9992ea32e96992be98be5c833cd5b9fd77314819d2146b6f06ab9cfef957af1290600090a3600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b3360009081526001602052604081205473ffffffffffffffffffffffffffffffffffffffff16610702576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260358152602001806113dc6035913960400191505060405180910390fd5b6000821161075b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180611346602a913960400191505060405180910390fd5b336000908152600160209081526040918290205460025483517faa271e1a00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff928316600482018190529451929091169263aa271e1a92602480840193829003018186803b1580156107dd57600080fd5b505afa1580156107f1573d6000803e3d6000fd5b505050506040513d602081101561080757600080fd5b505161085e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260398152602001806114746039913960400191505060405180910390fd5b600254604080517f8a6db9c300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff848116600483015291516000939290921691638a6db9c391602480820192602092909190829003018186803b1580156108d557600080fd5b505afa1580156108e9573d6000803e3d6000fd5b505050506040513d60208110156108ff57600080fd5b5051905060008482116109125781610914565b845b905060006109228383611287565b6040805184815260208101839052815192935073ffffffffffffffffffffffffffffffffffffffff87169233927f3cc75d3bf58b0100659088c03539964108d5d06342e1bd8085ee43ad8ff6f69a928290030190a361098184826111d5565b9695505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff1690565b60025473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff9081166000908152600160205260409020541690565b60005473ffffffffffffffffffffffffffffffffffffffff163314610a7457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff8216610ae0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806113706025913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610b4c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806113bb6021913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82811660008181526001602052604080822080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169486169485179055517fa56687ff5096e83f6e2c673cda0b677f56bbfcdf5fe0555d5830c407ede193cb9190a35050565b3360009081526001602052604081205473ffffffffffffffffffffffffffffffffffffffff16610c43576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260358152602001806113dc6035913960400191505060405180910390fd5b33600081815260016020908152604091829020548251868152925173ffffffffffffffffffffffffffffffffffffffff90911693849390927f5b0b60a4f757b33d9dcb8bd021b6aa371bb2e6f134086797aefcd8c0afab538c92918290030190a3610cae81846111d5565b9392505050565b3360009081526001602052604081205473ffffffffffffffffffffffffffffffffffffffff16610d30576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260358152602001806113dc6035913960400191505060405180910390fd5b3360008181526001602052604080822054905173ffffffffffffffffffffffffffffffffffffffff90911692839290917f4b5ef9a786cf64a7d82ebcf2d5132667edc9faef4ac36260d9a9e52c526b62329190a3600254604080517f3092afd500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff848116600483015291519190921691633092afd59160248083019260209291908290030181600087803b158015610df957600080fd5b505af1158015610e0d573d6000803e3d6000fd5b505050506040513d6020811015610e2357600080fd5b505191505090565b60005473ffffffffffffffffffffffffffffffffffffffff163314610eb157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff8116610f1d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806113956026913960400191505060405180910390fd5b6000546040805173ffffffffffffffffffffffffffffffffffffffff9283168152918316602083015280517f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09281900390910190a1610f7b816112fe565b50565b60005473ffffffffffffffffffffffffffffffffffffffff16331461100457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff8116611070576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806113706025913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff818116600090815260016020526040902054166110ed576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806113bb6021913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526001602052604080822080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055517f33d83959be2573f5453b12eb9d43b3499bc57d96bd2f067ba44803c859e811139190a250565b600082820183811015610cae57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b600254604080517f4e44d95600000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85811660048301526024820185905291516000939290921691634e44d9569160448082019260209290919082900301818787803b15801561125457600080fd5b505af1158015611268573d6000803e3d6000fd5b505050506040513d602081101561127e57600080fd5b50519392505050565b6000828211156112f857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9290921691909117905556fe416c6c6f77616e63652064656372656d656e74206d7573742062652067726561746572207468616e2030436f6e74726f6c6c6572206d7573742062652061206e6f6e2d7a65726f20616464726573734f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373576f726b6572206d7573742062652061206e6f6e2d7a65726f20616464726573735468652076616c7565206f6620636f6e74726f6c6c6572735b6d73672e73656e6465725d206d757374206265206e6f6e2d7a65726f416c6c6f77616e636520696e6372656d656e74206d7573742062652067726561746572207468616e203043616e206f6e6c7920696e6372656d656e7420616c6c6f77616e636520666f72206d696e7465727320696e206d696e7465724d616e6167657243616e206f6e6c792064656372656d656e7420616c6c6f77616e636520666f72206d696e7465727320696e206d696e7465724d616e61676572a2646970667358221220466652e3f4729382e60a04a7d22ff8d413d16b3cdff55681d3e03b91d296ce9364736f6c634300060c0033";

type MintControllerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MintControllerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MintController__factory extends ContractFactory {
  constructor(...args: MintControllerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _minterManager: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_minterManager, overrides || {});
  }
  override deploy(
    _minterManager: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_minterManager, overrides || {}) as Promise<
      MintController & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MintController__factory {
    return super.connect(runner) as MintController__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MintControllerInterface {
    return new Interface(_abi) as MintControllerInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): MintController {
    return new Contract(address, _abi, runner) as unknown as MintController;
  }
}
