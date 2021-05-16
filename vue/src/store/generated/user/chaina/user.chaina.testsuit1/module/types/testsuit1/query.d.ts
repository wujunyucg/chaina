import { Reader, Writer } from "protobufjs/minimal";
import { SendData } from "../testsuit1/sendData";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { DataInfo } from "../testsuit1/dataInfo";
export declare const protobufPackage = "user.chaina.testsuit1";
/** this line is used by starport scaffolding # 3 */
export interface QueryGetSendDataRequest {
    index: string;
}
export interface QueryGetSendDataResponse {
    SendData: SendData | undefined;
}
export interface QueryAllSendDataRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllSendDataResponse {
    SendData: SendData[];
    pagination: PageResponse | undefined;
}
export interface QueryGetDataInfoRequest {
    id: number;
}
export interface QueryGetDataInfoResponse {
    DataInfo: DataInfo | undefined;
}
export interface QueryAllDataInfoRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllDataInfoResponse {
    DataInfo: DataInfo[];
    pagination: PageResponse | undefined;
}
export declare const QueryGetSendDataRequest: {
    encode(message: QueryGetSendDataRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetSendDataRequest;
    fromJSON(object: any): QueryGetSendDataRequest;
    toJSON(message: QueryGetSendDataRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetSendDataRequest>): QueryGetSendDataRequest;
};
export declare const QueryGetSendDataResponse: {
    encode(message: QueryGetSendDataResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetSendDataResponse;
    fromJSON(object: any): QueryGetSendDataResponse;
    toJSON(message: QueryGetSendDataResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetSendDataResponse>): QueryGetSendDataResponse;
};
export declare const QueryAllSendDataRequest: {
    encode(message: QueryAllSendDataRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllSendDataRequest;
    fromJSON(object: any): QueryAllSendDataRequest;
    toJSON(message: QueryAllSendDataRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllSendDataRequest>): QueryAllSendDataRequest;
};
export declare const QueryAllSendDataResponse: {
    encode(message: QueryAllSendDataResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllSendDataResponse;
    fromJSON(object: any): QueryAllSendDataResponse;
    toJSON(message: QueryAllSendDataResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllSendDataResponse>): QueryAllSendDataResponse;
};
export declare const QueryGetDataInfoRequest: {
    encode(message: QueryGetDataInfoRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetDataInfoRequest;
    fromJSON(object: any): QueryGetDataInfoRequest;
    toJSON(message: QueryGetDataInfoRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetDataInfoRequest>): QueryGetDataInfoRequest;
};
export declare const QueryGetDataInfoResponse: {
    encode(message: QueryGetDataInfoResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetDataInfoResponse;
    fromJSON(object: any): QueryGetDataInfoResponse;
    toJSON(message: QueryGetDataInfoResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetDataInfoResponse>): QueryGetDataInfoResponse;
};
export declare const QueryAllDataInfoRequest: {
    encode(message: QueryAllDataInfoRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllDataInfoRequest;
    fromJSON(object: any): QueryAllDataInfoRequest;
    toJSON(message: QueryAllDataInfoRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllDataInfoRequest>): QueryAllDataInfoRequest;
};
export declare const QueryAllDataInfoResponse: {
    encode(message: QueryAllDataInfoResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllDataInfoResponse;
    fromJSON(object: any): QueryAllDataInfoResponse;
    toJSON(message: QueryAllDataInfoResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllDataInfoResponse>): QueryAllDataInfoResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** this line is used by starport scaffolding # 2 */
    SendData(request: QueryGetSendDataRequest): Promise<QueryGetSendDataResponse>;
    SendDataAll(request: QueryAllSendDataRequest): Promise<QueryAllSendDataResponse>;
    DataInfo(request: QueryGetDataInfoRequest): Promise<QueryGetDataInfoResponse>;
    DataInfoAll(request: QueryAllDataInfoRequest): Promise<QueryAllDataInfoResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    SendData(request: QueryGetSendDataRequest): Promise<QueryGetSendDataResponse>;
    SendDataAll(request: QueryAllSendDataRequest): Promise<QueryAllSendDataResponse>;
    DataInfo(request: QueryGetDataInfoRequest): Promise<QueryGetDataInfoResponse>;
    DataInfoAll(request: QueryAllDataInfoRequest): Promise<QueryAllDataInfoResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
