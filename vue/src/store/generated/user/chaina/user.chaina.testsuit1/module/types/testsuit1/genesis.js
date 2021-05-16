/* eslint-disable */
import { SendData } from "../testsuit1/sendData";
import { DataInfo } from "../testsuit1/dataInfo";
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "user.chaina.testsuit1";
const baseGenesisState = { portId: "" };
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.sendDataList) {
            SendData.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.dataInfoList) {
            DataInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
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
    fromJSON(object) {
        const message = { ...baseGenesisState };
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
        }
        else {
            message.portId = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.sendDataList) {
            obj.sendDataList = message.sendDataList.map((e) => e ? SendData.toJSON(e) : undefined);
        }
        else {
            obj.sendDataList = [];
        }
        if (message.dataInfoList) {
            obj.dataInfoList = message.dataInfoList.map((e) => e ? DataInfo.toJSON(e) : undefined);
        }
        else {
            obj.dataInfoList = [];
        }
        message.portId !== undefined && (obj.portId = message.portId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
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
        }
        else {
            message.portId = "";
        }
        return message;
    },
};
