import { WalletActions, WalletActionTypes, LoadWalletsCompleted } from '../actions/wallet.actions';
import { Wallet } from '../model/wallet';
import { createFeatureSelector } from '@ngrx/store';

export interface WalletsFeatureState {
    wallets: Wallet[];
}

const initialState = {
    wallets: []
};

export function reducer(state: WalletsFeatureState = initialState, action: WalletActions) {
    switch (action.type) {
        case WalletActionTypes.LoadWalletsCompleted:
            return Object.assign({}, state, { wallets: (<LoadWalletsCompleted>action).payload });
        default:
            return state;
    }
}

export const getWalletsState = createFeatureSelector<WalletsFeatureState>('wallets');
