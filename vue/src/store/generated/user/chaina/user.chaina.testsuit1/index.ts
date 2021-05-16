import { txClient, queryClient } from './module'
// @ts-ignore
import { SpVuexError } from '@starport/vuex'

import { SendData } from "./module/types/testsuit1/sendData"
import { DataInfo } from "./module/types/testsuit1/dataInfo"
import { Testsuit1PacketData } from "./module/types/testsuit1/packet"
import { NoData } from "./module/types/testsuit1/packet"
import { IbcDataInfoPacketData } from "./module/types/testsuit1/packet"
import { IbcDataInfoPacketAck } from "./module/types/testsuit1/packet"


async function initTxClient(vuexGetters) {
	return await txClient(vuexGetters['common/wallet/signer'], {
		addr: vuexGetters['common/env/apiTendermint']
	})
}

async function initQueryClient(vuexGetters) {
	return await queryClient({
		addr: vuexGetters['common/env/apiCosmos']
	})
}

function getStructure(template) {
	let structure = { fields: [] }
	for (const [key, value] of Object.entries(template)) {
		let field: any = {}
		field.name = key
		field.type = typeof value
		structure.fields.push(field)
	}
	return structure
}

const getDefaultState = () => {
	return {
        SendData: {},
        SendDataAll: {},
        DataInfo: {},
        DataInfoAll: {},
        
        _Structure: {
            SendData: getStructure(SendData.fromPartial({})),
            DataInfo: getStructure(DataInfo.fromPartial({})),
            Testsuit1PacketData: getStructure(Testsuit1PacketData.fromPartial({})),
            NoData: getStructure(NoData.fromPartial({})),
            IbcDataInfoPacketData: getStructure(IbcDataInfoPacketData.fromPartial({})),
            IbcDataInfoPacketAck: getStructure(IbcDataInfoPacketAck.fromPartial({})),
            
		},
		_Subscriptions: new Set(),
	}
}

// initial state
const state = getDefaultState()

export default {
	namespaced: true,
	state,
	mutations: {
		RESET_STATE(state) {
			Object.assign(state, getDefaultState())
		},
		QUERY(state, { query, key, value }) {
			state[query][JSON.stringify(key)] = value
		},
		SUBSCRIBE(state, subscription) {
			state._Subscriptions.add(subscription)
		},
		UNSUBSCRIBE(state, subscription) {
			state._Subscriptions.delete(subscription)
		}
	},
	getters: {
        getSendData: (state) => (params = {}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.SendData[JSON.stringify(params)] ?? {}
		},
        getSendDataAll: (state) => (params = {}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.SendDataAll[JSON.stringify(params)] ?? {}
		},
        getDataInfo: (state) => (params = {}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.DataInfo[JSON.stringify(params)] ?? {}
		},
        getDataInfoAll: (state) => (params = {}) => {
					if (!(<any> params).query) {
						(<any> params).query=null
					}
			return state.DataInfoAll[JSON.stringify(params)] ?? {}
		},
        
		getTypeStructure: (state) => (type) => {
			return state._Structure[type].fields
		}
	},
	actions: {
		init({ dispatch, rootGetters }) {
			console.log('init')
			if (rootGetters['common/env/client']) {
				rootGetters['common/env/client'].on('newblock', () => {
					dispatch('StoreUpdate')
				})
			}
		},
		resetState({ commit }) {
			commit('RESET_STATE')
		},
		unsubscribe({ commit }, subscription) {
			commit('UNSUBSCRIBE', subscription)
		},
		async StoreUpdate({ state, dispatch }) {
			state._Subscriptions.forEach((subscription) => {
				dispatch(subscription.action, subscription.payload)
			})
		},
		async QuerySendData({ commit, rootGetters, getters }, { options: { subscribe = false , all = false}, params: {...key}, query=null }) {
			try {
				
				let value = query?(await (await initQueryClient(rootGetters)).querySendData( key.index,  query)).data:(await (await initQueryClient(rootGetters)).querySendData( key.index )).data
				
				commit('QUERY', { query: 'SendData', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QuerySendData', payload: { options: { all }, params: {...key},query }})
				return getters['getSendData']( { params: {...key}, query}) ?? {}
			} catch (e) {
				console.error(new SpVuexError('QueryClient:QuerySendData', 'API Node Unavailable. Could not perform query.'))
				return {}
			}
		},
		async QuerySendDataAll({ commit, rootGetters, getters }, { options: { subscribe = false , all = false}, params: {...key}, query=null }) {
			try {
				
				let value = query?(await (await initQueryClient(rootGetters)).querySendDataAll( query)).data:(await (await initQueryClient(rootGetters)).querySendDataAll()).data
				
				while (all && (<any> value).pagination && (<any> value).pagination.nextKey!=null) {
					let next_values=(await (await initQueryClient(rootGetters)).querySendDataAll({...query, 'pagination.key':(<any> value).pagination.nextKey})).data
					for (let prop of Object.keys(next_values)) {
						if (Array.isArray(next_values[prop])) {
							value[prop]=[...value[prop], ...next_values[prop]]
						}else{
							value[prop]=next_values[prop]
						}
					}
				}
				
				commit('QUERY', { query: 'SendDataAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QuerySendDataAll', payload: { options: { all }, params: {...key},query }})
				return getters['getSendDataAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				console.error(new SpVuexError('QueryClient:QuerySendDataAll', 'API Node Unavailable. Could not perform query.'))
				return {}
			}
		},
		async QueryDataInfo({ commit, rootGetters, getters }, { options: { subscribe = false , all = false}, params: {...key}, query=null }) {
			try {
				
				let value = query?(await (await initQueryClient(rootGetters)).queryDataInfo( key.id,  query)).data:(await (await initQueryClient(rootGetters)).queryDataInfo( key.id )).data
				
				commit('QUERY', { query: 'DataInfo', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryDataInfo', payload: { options: { all }, params: {...key},query }})
				return getters['getDataInfo']( { params: {...key}, query}) ?? {}
			} catch (e) {
				console.error(new SpVuexError('QueryClient:QueryDataInfo', 'API Node Unavailable. Could not perform query.'))
				return {}
			}
		},
		async QueryDataInfoAll({ commit, rootGetters, getters }, { options: { subscribe = false , all = false}, params: {...key}, query=null }) {
			try {
				
				let value = query?(await (await initQueryClient(rootGetters)).queryDataInfoAll( query)).data:(await (await initQueryClient(rootGetters)).queryDataInfoAll()).data
				
				while (all && (<any> value).pagination && (<any> value).pagination.nextKey!=null) {
					let next_values=(await (await initQueryClient(rootGetters)).queryDataInfoAll({...query, 'pagination.key':(<any> value).pagination.nextKey})).data
					for (let prop of Object.keys(next_values)) {
						if (Array.isArray(next_values[prop])) {
							value[prop]=[...value[prop], ...next_values[prop]]
						}else{
							value[prop]=next_values[prop]
						}
					}
				}
				
				commit('QUERY', { query: 'DataInfoAll', key: { params: {...key}, query}, value })
				if (subscribe) commit('SUBSCRIBE', { action: 'QueryDataInfoAll', payload: { options: { all }, params: {...key},query }})
				return getters['getDataInfoAll']( { params: {...key}, query}) ?? {}
			} catch (e) {
				console.error(new SpVuexError('QueryClient:QueryDataInfoAll', 'API Node Unavailable. Could not perform query.'))
				return {}
			}
		},
		
		async sendMsgSendIbcDataInfo({ rootGetters }, { value, fee, memo }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgSendIbcDataInfo(value)
				const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], {fee: { amount: fee, 
  gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgSendIbcDataInfo:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgSendIbcDataInfo:Send', 'Could not broadcast Tx.')
				}
			}
		},
		async sendMsgCreateDataInfo({ rootGetters }, { value, fee, memo }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgCreateDataInfo(value)
				const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], {fee: { amount: fee, 
  gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgCreateDataInfo:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgCreateDataInfo:Send', 'Could not broadcast Tx.')
				}
			}
		},
		async sendMsgDeleteDataInfo({ rootGetters }, { value, fee, memo }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgDeleteDataInfo(value)
				const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], {fee: { amount: fee, 
  gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgDeleteDataInfo:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgDeleteDataInfo:Send', 'Could not broadcast Tx.')
				}
			}
		},
		async sendMsgUpdateDataInfo({ rootGetters }, { value, fee, memo }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgUpdateDataInfo(value)
				const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], {fee: { amount: fee, 
  gas: "200000" }, memo})
				return result
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgUpdateDataInfo:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgUpdateDataInfo:Send', 'Could not broadcast Tx.')
				}
			}
		},
		
		async MsgSendIbcDataInfo({ rootGetters }, { value }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgSendIbcDataInfo(value)
				return msg
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgSendIbcDataInfo:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgSendIbcDataInfo:Create', 'Could not create message.')
				}
			}
		},
		async MsgCreateDataInfo({ rootGetters }, { value }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgCreateDataInfo(value)
				return msg
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgCreateDataInfo:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgCreateDataInfo:Create', 'Could not create message.')
				}
			}
		},
		async MsgDeleteDataInfo({ rootGetters }, { value }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgDeleteDataInfo(value)
				return msg
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgDeleteDataInfo:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgDeleteDataInfo:Create', 'Could not create message.')
				}
			}
		},
		async MsgUpdateDataInfo({ rootGetters }, { value }) {
			try {
				const msg = await (await initTxClient(rootGetters)).msgUpdateDataInfo(value)
				return msg
			} catch (e) {
				if (e.toString()=='wallet is required') {
					throw new SpVuexError('TxClient:MsgUpdateDataInfo:Init', 'Could not initialize signing client. Wallet is required.')
				}else{
					throw new SpVuexError('TxClient:MsgUpdateDataInfo:Create', 'Could not create message.')
				}
			}
		},
		
	}
}
