import { WalletAction } from '../actions/wallet.actions';
import { WalletsState } from '../wallets.state';
import { Wallet } from '../model/wallet';

const initialState: WalletsState = {
    walletsListState: {
        walletList: [],
    }
}

export function reducer(state: WalletsState = initialState, action: WalletAction): WalletsState {

    switch(action.type) {
        // case TutorialActions.ADD_TUTORIAL:
            // return [...state, action.payload];
        default:
            return state;
    }
}