package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/user/chaina/x/testsuit1/types"
)

// SetSendData set a specific sendData in the store from its index
func (k Keeper) SetSendData(ctx sdk.Context, sendData types.SendData) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SendDataKey))
	b := k.cdc.MustMarshalBinaryBare(&sendData)
	store.Set(types.KeyPrefix(sendData.Index), b)
}

// GetSendData returns a sendData from its index
func (k Keeper) GetSendData(ctx sdk.Context, index string) (val types.SendData, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SendDataKey))

	b := store.Get(types.KeyPrefix(index))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshalBinaryBare(b, &val)
	return val, true
}

// DeleteSendData removes a sendData from the store
func (k Keeper) RemoveSendData(ctx sdk.Context, index string) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SendDataKey))
	store.Delete(types.KeyPrefix(index))
}

// GetAllSendData returns all sendData
func (k Keeper) GetAllSendData(ctx sdk.Context) (list []types.SendData) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SendDataKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.SendData
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
