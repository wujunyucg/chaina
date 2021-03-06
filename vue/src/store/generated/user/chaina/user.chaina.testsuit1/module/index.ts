// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgSendIbcDataInfo } from "./types/testsuit1/tx";
import { MsgCreateDataInfo } from "./types/testsuit1/tx";
import { MsgDeleteDataInfo } from "./types/testsuit1/tx";
import { MsgUpdateDataInfo } from "./types/testsuit1/tx";


const types = [
  ["/user.chaina.testsuit1.MsgSendIbcDataInfo", MsgSendIbcDataInfo],
  ["/user.chaina.testsuit1.MsgCreateDataInfo", MsgCreateDataInfo],
  ["/user.chaina.testsuit1.MsgDeleteDataInfo", MsgDeleteDataInfo],
  ["/user.chaina.testsuit1.MsgUpdateDataInfo", MsgUpdateDataInfo],
  
];

const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw new Error("wallet is required");

  const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee=defaultFee, memo=null }: SignAndBroadcastOptions) => memo?client.signAndBroadcast(address, msgs, fee,memo):client.signAndBroadcast(address, msgs, fee),
    msgSendIbcDataInfo: (data: MsgSendIbcDataInfo): EncodeObject => ({ typeUrl: "/user.chaina.testsuit1.MsgSendIbcDataInfo", value: data }),
    msgCreateDataInfo: (data: MsgCreateDataInfo): EncodeObject => ({ typeUrl: "/user.chaina.testsuit1.MsgCreateDataInfo", value: data }),
    msgDeleteDataInfo: (data: MsgDeleteDataInfo): EncodeObject => ({ typeUrl: "/user.chaina.testsuit1.MsgDeleteDataInfo", value: data }),
    msgUpdateDataInfo: (data: MsgUpdateDataInfo): EncodeObject => ({ typeUrl: "/user.chaina.testsuit1.MsgUpdateDataInfo", value: data }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
