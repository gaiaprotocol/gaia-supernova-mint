/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface ISupernovaMinterInterface extends utils.Interface {
  contractName: "ISupernovaMinter";
  functions: {
    "maxSupernovaCount()": FunctionFragment;
    "publicMint()": FunctionFragment;
    "publicSale()": FunctionFragment;
    "gaiaKronos()": FunctionFragment;
    "devFund()": FunctionFragment;
    "supernova()": FunctionFragment;
    "initialSale()": FunctionFragment;
    "userInitialMintingAmount(address)": FunctionFragment;
    "initialMint()": FunctionFragment;
    "supernovaPrice()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "maxSupernovaCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "publicMint",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "publicSale",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "gaiaKronos",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "devFund", values?: undefined): string;
  encodeFunctionData(functionFragment: "supernova", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "initialSale",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "userInitialMintingAmount",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "initialMint",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "supernovaPrice",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "maxSupernovaCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "publicMint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "publicSale", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "gaiaKronos", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "devFund", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "supernova", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initialSale",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "userInitialMintingAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initialMint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supernovaPrice",
    data: BytesLike
  ): Result;

  events: {
    "UpdateDevFund(address)": EventFragment;
    "UpdateMaxSupernovaCount(uint256)": EventFragment;
    "SetInitialSale(bool)": EventFragment;
    "SetPublicSale(bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "UpdateDevFund"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdateMaxSupernovaCount"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetInitialSale"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetPublicSale"): EventFragment;
}

export type UpdateDevFundEvent = TypedEvent<[string], { newDevFund: string }>;

export type UpdateDevFundEventFilter = TypedEventFilter<UpdateDevFundEvent>;

export type UpdateMaxSupernovaCountEvent = TypedEvent<
  [BigNumber],
  { newMaxCount: BigNumber }
>;

export type UpdateMaxSupernovaCountEventFilter =
  TypedEventFilter<UpdateMaxSupernovaCountEvent>;

export type SetInitialSaleEvent = TypedEvent<[boolean], { status: boolean }>;

export type SetInitialSaleEventFilter = TypedEventFilter<SetInitialSaleEvent>;

export type SetPublicSaleEvent = TypedEvent<[boolean], { status: boolean }>;

export type SetPublicSaleEventFilter = TypedEventFilter<SetPublicSaleEvent>;

export interface ISupernovaMinter extends BaseContract {
  contractName: "ISupernovaMinter";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ISupernovaMinterInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    maxSupernovaCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    publicMint(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    publicSale(overrides?: CallOverrides): Promise<[boolean]>;

    gaiaKronos(overrides?: CallOverrides): Promise<[string]>;

    devFund(overrides?: CallOverrides): Promise<[string]>;

    supernova(overrides?: CallOverrides): Promise<[string]>;

    initialSale(overrides?: CallOverrides): Promise<[boolean]>;

    userInitialMintingAmount(
      user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    initialMint(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supernovaPrice(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  maxSupernovaCount(overrides?: CallOverrides): Promise<BigNumber>;

  publicMint(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  publicSale(overrides?: CallOverrides): Promise<boolean>;

  gaiaKronos(overrides?: CallOverrides): Promise<string>;

  devFund(overrides?: CallOverrides): Promise<string>;

  supernova(overrides?: CallOverrides): Promise<string>;

  initialSale(overrides?: CallOverrides): Promise<boolean>;

  userInitialMintingAmount(
    user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  initialMint(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supernovaPrice(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    maxSupernovaCount(overrides?: CallOverrides): Promise<BigNumber>;

    publicMint(overrides?: CallOverrides): Promise<BigNumber>;

    publicSale(overrides?: CallOverrides): Promise<boolean>;

    gaiaKronos(overrides?: CallOverrides): Promise<string>;

    devFund(overrides?: CallOverrides): Promise<string>;

    supernova(overrides?: CallOverrides): Promise<string>;

    initialSale(overrides?: CallOverrides): Promise<boolean>;

    userInitialMintingAmount(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialMint(overrides?: CallOverrides): Promise<BigNumber>;

    supernovaPrice(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "UpdateDevFund(address)"(newDevFund?: null): UpdateDevFundEventFilter;
    UpdateDevFund(newDevFund?: null): UpdateDevFundEventFilter;

    "UpdateMaxSupernovaCount(uint256)"(
      newMaxCount?: null
    ): UpdateMaxSupernovaCountEventFilter;
    UpdateMaxSupernovaCount(
      newMaxCount?: null
    ): UpdateMaxSupernovaCountEventFilter;

    "SetInitialSale(bool)"(status?: null): SetInitialSaleEventFilter;
    SetInitialSale(status?: null): SetInitialSaleEventFilter;

    "SetPublicSale(bool)"(status?: null): SetPublicSaleEventFilter;
    SetPublicSale(status?: null): SetPublicSaleEventFilter;
  };

  estimateGas: {
    maxSupernovaCount(overrides?: CallOverrides): Promise<BigNumber>;

    publicMint(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    publicSale(overrides?: CallOverrides): Promise<BigNumber>;

    gaiaKronos(overrides?: CallOverrides): Promise<BigNumber>;

    devFund(overrides?: CallOverrides): Promise<BigNumber>;

    supernova(overrides?: CallOverrides): Promise<BigNumber>;

    initialSale(overrides?: CallOverrides): Promise<BigNumber>;

    userInitialMintingAmount(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialMint(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supernovaPrice(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    maxSupernovaCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    publicMint(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    publicSale(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    gaiaKronos(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    devFund(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    supernova(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialSale(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    userInitialMintingAmount(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialMint(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supernovaPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}