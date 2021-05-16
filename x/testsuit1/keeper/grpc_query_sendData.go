package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/user/chaina/x/testsuit1/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) SendDataAll(c context.Context, req *types.QueryAllSendDataRequest) (*types.QueryAllSendDataResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var sendDatas []*types.SendData
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	sendDataStore := prefix.NewStore(store, types.KeyPrefix(types.SendDataKey))

	pageRes, err := query.Paginate(sendDataStore, req.Pagination, func(key []byte, value []byte) error {
		var sendData types.SendData
		if err := k.cdc.UnmarshalBinaryBare(value, &sendData); err != nil {
			return err
		}

		sendDatas = append(sendDatas, &sendData)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllSendDataResponse{SendData: sendDatas, Pagination: pageRes}, nil
}

func (k Keeper) SendData(c context.Context, req *types.QueryGetSendDataRequest) (*types.QueryGetSendDataResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetSendData(ctx, req.Index)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetSendDataResponse{SendData: &val}, nil
}
