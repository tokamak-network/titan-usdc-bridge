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
  V2_2UpgraderHelper,
  V2_2UpgraderHelperInterface,
} from "../../../../../contracts/v2/upgrader/helpers/V2_2UpgraderHelper";

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
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
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
    name: "rescuer",
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
    inputs: [],
    name: "totalSupply",
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
  {
    inputs: [],
    name: "version",
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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610ebf380380610ebf8339818101604052602081101561003357600080fd5b5051808061004033610068565b600180546001600160a01b0319166001600160a01b03929092169190911790555061008a9050565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b610e26806100996000396000f3fe608060405234801561001057600080fd5b50600436106101515760003560e01c80636d3c5bbe116100cd578063bd10243011610081578063ec1e6a4f11610066578063ec1e6a4f14610316578063ec55688914610320578063f2fde38b1461032857610151565b8063bd10243014610306578063e5a6b10f1461030e57610151565b80638da5cb5b116100b25780638da5cb5b146102ee57806395d89b41146102f65780639fd0506d146102fe57610151565b80636d3c5bbe146102b357806370a08231146102bb57610151565b806335d99f351161012457806338a631831161010957806338a631831461029b57806354fd4d50146102a35780635c975abb146102ab57610151565b806335d99f35146102625780633644e5151461029357610151565b806306fdde031461015657806318160ddd146101d357806323b872dd146101ed578063313ce56714610244575b600080fd5b61015e61035b565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610198578181015183820152602001610180565b50505050905090810190601f1680156101c55780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101db6104d6565b60408051918252519081900360200190f35b6102306004803603606081101561020357600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160208101359091169060400135610572565b604080519115158252519081900360200190f35b61024c61062d565b6040805160ff9092168252519081900360200190f35b61026a610698565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6101db610703565b61026a61076e565b61015e6107d9565b610230610844565b61026a6108af565b6101db600480360360208110156102d157600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661091a565b61026a6109c3565b61015e6109df565b61026a610a4a565b61026a610ab5565b61015e610b20565b61031e610b8b565b005b61026a610c14565b61031e6004803603602081101561033e57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610c30565b600154604080517f06fdde03000000000000000000000000000000000000000000000000000000008152905160609273ffffffffffffffffffffffffffffffffffffffff16916306fdde03916004808301926000929190829003018186803b1580156103c657600080fd5b505afa1580156103da573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052602081101561042157600080fd5b810190808051604051939291908464010000000082111561044157600080fd5b90830190602082018581111561045657600080fd5b825164010000000081118282018810171561047057600080fd5b82525081516020918201929091019080838360005b8381101561049d578181015183820152602001610485565b50505050905090810190601f1680156104ca5780820380516001836020036101000a031916815260200191505b50604052505050905090565b600154604080517f18160ddd000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff16916318160ddd916004808301926020929190829003018186803b15801561054157600080fd5b505afa158015610555573d6000803e3d6000fd5b505050506040513d602081101561056b57600080fd5b5051905090565b600154604080517f23b872dd00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8681166004830152858116602483015260448201859052915160009392909216916323b872dd9160648082019260209290919082900301818787803b1580156105f957600080fd5b505af115801561060d573d6000803e3d6000fd5b505050506040513d602081101561062357600080fd5b5051949350505050565b600154604080517f313ce567000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff169163313ce567916004808301926020929190829003018186803b15801561054157600080fd5b600154604080517f35d99f35000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff16916335d99f35916004808301926020929190829003018186803b15801561054157600080fd5b600154604080517f3644e515000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff1691633644e515916004808301926020929190829003018186803b15801561054157600080fd5b600154604080517f38a63183000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff16916338a63183916004808301926020929190829003018186803b15801561054157600080fd5b600154604080517f54fd4d50000000000000000000000000000000000000000000000000000000008152905160609273ffffffffffffffffffffffffffffffffffffffff16916354fd4d50916004808301926000929190829003018186803b1580156103c657600080fd5b600154604080517f5c975abb000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff1691635c975abb916004808301926020929190829003018186803b15801561054157600080fd5b600154604080517f8da5cb5b000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff1691638da5cb5b916004808301926020929190829003018186803b15801561054157600080fd5b600154604080517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8481166004830152915160009392909216916370a0823191602480820192602092909190829003018186803b15801561099157600080fd5b505afa1580156109a5573d6000803e3d6000fd5b505050506040513d60208110156109bb57600080fd5b505192915050565b60005473ffffffffffffffffffffffffffffffffffffffff1690565b600154604080517f95d89b41000000000000000000000000000000000000000000000000000000008152905160609273ffffffffffffffffffffffffffffffffffffffff16916395d89b41916004808301926000929190829003018186803b1580156103c657600080fd5b600154604080517f9fd0506d000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff1691639fd0506d916004808301926020929190829003018186803b15801561054157600080fd5b600154604080517fbd102430000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff169163bd102430916004808301926020929190829003018186803b15801561054157600080fd5b600154604080517fe5a6b10f000000000000000000000000000000000000000000000000000000008152905160609273ffffffffffffffffffffffffffffffffffffffff169163e5a6b10f916004808301926000929190829003018186803b1580156103c657600080fd5b60005473ffffffffffffffffffffffffffffffffffffffff163314610c1157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b33ff5b60015473ffffffffffffffffffffffffffffffffffffffff1690565b60005473ffffffffffffffffffffffffffffffffffffffff163314610cb657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff8116610d22576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180610dcb6026913960400191505060405180910390fd5b6000546040805173ffffffffffffffffffffffffffffffffffffffff9283168152918316602083015280517f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09281900390910190a1610d8081610d83565b50565b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9290921691909117905556fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373a264697066735822122067f69e3796c14352449b2788dc1fd87b4022ebb32bf10980f5e4d47bc574618264736f6c634300060c0033";

type V2_2UpgraderHelperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: V2_2UpgraderHelperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class V2_2UpgraderHelper__factory extends ContractFactory {
  constructor(...args: V2_2UpgraderHelperConstructorParams) {
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
      V2_2UpgraderHelper & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): V2_2UpgraderHelper__factory {
    return super.connect(runner) as V2_2UpgraderHelper__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): V2_2UpgraderHelperInterface {
    return new Interface(_abi) as V2_2UpgraderHelperInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): V2_2UpgraderHelper {
    return new Contract(address, _abi, runner) as unknown as V2_2UpgraderHelper;
  }
}