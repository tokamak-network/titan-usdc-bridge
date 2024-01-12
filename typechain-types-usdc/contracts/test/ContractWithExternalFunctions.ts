/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface ContractWithExternalFunctionsInterface extends Interface {
  getFunction(
    nameOrSignature: "getBar" | "getFoo" | "setBar" | "setFoo"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "getBar", values?: undefined): string;
  encodeFunctionData(functionFragment: "getFoo", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setBar",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setFoo", values: [string]): string;

  decodeFunctionResult(functionFragment: "getBar", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getFoo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setBar", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setFoo", data: BytesLike): Result;
}

export interface ContractWithExternalFunctions extends BaseContract {
  connect(runner?: ContractRunner | null): ContractWithExternalFunctions;
  waitForDeployment(): Promise<this>;

  interface: ContractWithExternalFunctionsInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  getBar: TypedContractMethod<[], [bigint], "view">;

  getFoo: TypedContractMethod<[], [string], "view">;

  setBar: TypedContractMethod<[bar: BigNumberish], [boolean], "nonpayable">;

  setFoo: TypedContractMethod<[foo: string], [boolean], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "getBar"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getFoo"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "setBar"
  ): TypedContractMethod<[bar: BigNumberish], [boolean], "nonpayable">;
  getFunction(
    nameOrSignature: "setFoo"
  ): TypedContractMethod<[foo: string], [boolean], "nonpayable">;

  filters: {};
}