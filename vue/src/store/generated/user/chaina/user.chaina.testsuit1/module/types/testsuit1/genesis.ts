/* eslint-disable */
import { SendData } from "../testsuit1/sendData";
import { DataInfo } from "../testsuit1/dataInfo";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "user.chaina.testsuit1";

/** GenesisState defines the testsuit1 module's genesis state. */
export interface GenesisState {
  /** this line is used by starport scaffolding # genesis/proto/state */
  sendDataList: SendData[];
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  dataInfoList: DataInfo[];
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  portId: string;
}

const baseGenesisState: object = { portId: "" };

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    for (const v of message.sendDataList) {
      SendData.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.dataInfoList) {
      DataInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.sendDataList = [];
    message.dataInfoList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.sendDataList.push(SendData.decode(reader, reader.uint32()));
          break;
        case 2:
          message.dataInfoList.push(DataInfo.decode(reader, reader.uint32()));
          break;
        case 1:
          message.portId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.sendDataList = [];
    message.dataInfoList = [];
    if (object.sendDataList !== undefined && object.sendDataList !== null) {
      for (const e of object.sendDataList) {
        message.sendDataList.push(SendData.fromJSON(e));
      }
    }
    if (object.dataInfoList !== undefined && object.dataInfoList !== null) {
      for (const e of object.dataInfoList) {
        message.dataInfoList.push(DataInfo.fromJSON(e));
      }
    }
    if (object.portId !== undefined && object.portId !== null) {
      message.portId = String(object.portId);
    } else {
      message.portId = "";
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.sendDataList) {
      obj.sendDataList = message.sendDataList.map((e) =>
        e ? SendData.toJSON(e) : undefined
      );
    } else {
      obj.sendDataList = [];
    }
    if (message.dataInfoList) {
      obj.dataInfoList = message.dataInfoList.map((e) =>
        e ? DataInfo.toJSON(e) : undefined
      );
    } else {
      obj.dataInfoList = [];
    }
    message.portId !== undefined && (obj.portId = message.portId);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.sendDataList = [];
    message.dataInfoList = [];
    if (object.sendDataList !== undefined && object.sendDataList !== null) {
      for (const e of object.sendDataList) {
        message.sendDataList.push(SendData.fromPartial(e));
      }
    }
    if (object.dataInfoList !== undefined && object.dataInfoList !== null) {
      for (const e of object.dataInfoList) {
        message.dataInfoList.push(DataInfo.fromPartial(e));
      }
    }
    if (object.portId !== undefined && object.portId !== null) {
      message.portId = object.portId;
    } else {
      message.portId = "";
    }
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
