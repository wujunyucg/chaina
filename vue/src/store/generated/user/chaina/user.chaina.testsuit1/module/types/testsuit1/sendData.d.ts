import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "user.chaina.testsuit1";
export interface SendData {
    index: string;
    dataIndex: string;
    data: string;
    chain: string;
}
export declare const SendData: {
    encode(message: SendData, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): SendData;
    fromJSON(object: any): SendData;
    toJSON(message: SendData): unknown;
    fromPartial(object: DeepPartial<SendData>): SendData;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
