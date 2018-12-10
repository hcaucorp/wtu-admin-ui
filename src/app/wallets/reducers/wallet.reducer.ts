import { WalletActions, WalletActionTypes } from '../actions/wallet.actions';
import { WalletModuleState } from '../wallets.state';

const initialState: WalletModuleState = {
    walletList: []
};

export function reducer(state: WalletModuleState = initialState, action: WalletActions): WalletModuleState {
    switch (action.type) {
        case WalletActionTypes.LoadWalletsCompleted:
            return {
                ...state,
                walletList: action.payload
            };
        default:
            return state;
    }
}

export const getWalletsList = (state: WalletModuleState) => state.walletList;
