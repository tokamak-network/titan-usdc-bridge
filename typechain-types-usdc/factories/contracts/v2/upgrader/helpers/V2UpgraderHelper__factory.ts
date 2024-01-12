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
import type { NonPayableOverrides } from "../../../../../common";
import type {
  V2UpgraderHelper,
  V2UpgraderHelperInterface,
} from "../../../../../contracts/v2/upgrader/helpers/V2UpgraderHelper";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "fiatTokenProxy",
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
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    inputs: [],
    name: "blacklister",
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
    name: "currency",
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
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "fiatTokenOwner",
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
    name: "masterMinter",
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
    name: "name",
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
    inputs: [],
    name: "proxy",
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
    name: "symbol",
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
    inputs: [],
    name: "tearDown",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
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
  "0x608060405234801561001057600080fd5b50604051610c16380380610c168339818101604052602081101561003357600080fd5b50518061003f33610065565b600180546001600160a01b0319166001600160a01b039290921691909117905550610087565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b610b80806100966000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806395d89b411161008c578063e5a6b10f11610066578063e5a6b10f1461027f578063ec1e6a4f14610287578063ec55688914610291578063f2fde38b14610299576100ea565b806395d89b41146102675780639fd0506d1461026f578063bd10243014610277576100ea565b806335d99f35116100c857806335d99f35146101e15780636d3c5bbe1461021257806370a082311461021a5780638da5cb5b1461025f576100ea565b806306fdde03146100ef57806323b872dd1461016c578063313ce567146101c3575b600080fd5b6100f76102cc565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610131578181015183820152602001610119565b50505050905090810190601f16801561015e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101af6004803603606081101561018257600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160208101359091169060400135610447565b604080519115158252519081900360200190f35b6101cb610502565b6040805160ff9092168252519081900360200190f35b6101e961059e565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6101e9610609565b61024d6004803603602081101561023057600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610674565b60408051918252519081900360200190f35b6101e961071d565b6100f7610739565b6101e96107a4565b6101e961080f565b6100f761087a565b61028f6108e5565b005b6101e961096e565b61028f600480360360208110156102af57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661098a565b600154604080517f06fdde03000000000000000000000000000000000000000000000000000000008152905160609273ffffffffffffffffffffffffffffffffffffffff16916306fdde03916004808301926000929190829003018186803b15801561033757600080fd5b505afa15801561034b573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052602081101561039257600080fd5b81019080805160405193929190846401000000008211156103b257600080fd5b9083019060208201858111156103c757600080fd5b82516401000000008111828201881017156103e157600080fd5b82525081516020918201929091019080838360005b8381101561040e5781810151838201526020016103f6565b50505050905090810190601f16801561043b5780820380516001836020036101000a031916815260200191505b50604052505050905090565b600154604080517f23b872dd00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8681166004830152858116602483015260448201859052915160009392909216916323b872dd9160648082019260209290919082900301818787803b1580156104ce57600080fd5b505af11580156104e2573d6000803e3d6000fd5b505050506040513d60208110156104f857600080fd5b5051949350505050565b600154604080517f313ce567000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff169163313ce567916004808301926020929190829003018186803b15801561056d57600080fd5b505afa158015610581573d6000803e3d6000fd5b505050506040513d602081101561059757600080fd5b5051905090565b600154604080517f35d99f35000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff16916335d99f35916004808301926020929190829003018186803b15801561056d57600080fd5b600154604080517f8da5cb5b000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff1691638da5cb5b916004808301926020929190829003018186803b15801561056d57600080fd5b600154604080517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8481166004830152915160009392909216916370a0823191602480820192602092909190829003018186803b1580156106eb57600080fd5b505afa1580156106ff573d6000803e3d6000fd5b505050506040513d602081101561071557600080fd5b505192915050565b60005473ffffffffffffffffffffffffffffffffffffffff1690565b600154604080517f95d89b41000000000000000000000000000000000000000000000000000000008152905160609273ffffffffffffffffffffffffffffffffffffffff16916395d89b41916004808301926000929190829003018186803b15801561033757600080fd5b600154604080517f9fd0506d000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff1691639fd0506d916004808301926020929190829003018186803b15801561056d57600080fd5b600154604080517fbd102430000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff169163bd102430916004808301926020929190829003018186803b15801561056d57600080fd5b600154604080517fe5a6b10f000000000000000000000000000000000000000000000000000000008152905160609273ffffffffffffffffffffffffffffffffffffffff169163e5a6b10f916004808301926000929190829003018186803b15801561033757600080fd5b60005473ffffffffffffffffffffffffffffffffffffffff16331461096b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b33ff5b60015473ffffffffffffffffffffffffffffffffffffffff1690565b60005473ffffffffffffffffffffffffffffffffffffffff163314610a1057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff8116610a7c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180610b256026913960400191505060405180910390fd5b6000546040805173ffffffffffffffffffffffffffffffffffffffff9283168152918316602083015280517f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09281900390910190a1610ada81610add565b50565b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9290921691909117905556fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373a2646970667358221220a2fa8b1d9d4059b29aa7f53e94fefabeae855bbb6bcd9669fcb78fc836a9949b64736f6c634300060c0033";

type V2UpgraderHelperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: V2UpgraderHelperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class V2UpgraderHelper__factory extends ContractFactory {
  constructor(...args: V2UpgraderHelperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    fiatTokenProxy: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(fiatTokenProxy, overrides || {});
  }
  override deploy(
    fiatTokenProxy: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(fiatTokenProxy, overrides || {}) as Promise<
      V2UpgraderHelper & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): V2UpgraderHelper__factory {
    return super.connect(runner) as V2UpgraderHelper__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): V2UpgraderHelperInterface {
    return new Interface(_abi) as V2UpgraderHelperInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): V2UpgraderHelper {
    return new Contract(address, _abi, runner) as unknown as V2UpgraderHelper;
  }
}
