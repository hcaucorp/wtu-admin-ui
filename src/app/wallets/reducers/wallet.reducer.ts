import { createFeatureSelector } from '@ngrx/store';
import { WalletActions, WalletActionTypes } from '../actions/wallet.actions';
import { WalletReport } from '../model/wallet';

export interface WalletsFeatureState {
    walletReports: WalletReport[];
    loadingWallets: boolean;
}

const initialState: WalletsFeatureState = {
    walletReports: [],
    loadingWallets: false
};

export function reducer(state: WalletsFeatureState = initialState, action: WalletActions) {
    switch (action.type) {
        case WalletActionTypes.LoadWalletsCompleted:
            return Object.assign({}, state, {
                walletReports: action.payload,
                loadingWallets: false
            });
        case WalletActionTypes.LoadWallets:
            return Object.assign({}, state, { loadingWallets: true });
        default:
            return state;
    }
}

export const getWalletsState = createFeatureSelector<WalletsFeatureState>('wallets');
