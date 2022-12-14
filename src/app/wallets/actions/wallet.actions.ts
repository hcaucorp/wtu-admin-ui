import { Action } from '@ngrx/store';
import { WalletReport } from '../model/wallet';

export enum WalletActionTypes {
    LoadWallets = '[Wallet] Load Wallets',
    LoadWalletsCompleted = '[Wallet] Load Wallets Completed',
    GenerateWallet = '[Wallet] Generate Wallet',
    DeleteWallet = '[Wallet] Delete Wallet'
}

export interface GenerateWalletPayload {
    currency: string;
}

export interface DeleteWalletPayload {
    id: number;
}

export class GenerateWalletAction implements Action {
    readonly type = WalletActionTypes.GenerateWallet;

    constructor(public payload: GenerateWalletPayload) { }
}

export class DeleteWalletAction implements Action {
    readonly type = WalletActionTypes.DeleteWallet;

    constructor(public payload: DeleteWalletPayload) { }
}

export class LoadWalletsAction implements Action {
    readonly type = WalletActionTypes.LoadWallets;
}

export class LoadWalletsCompleted implements Action {
    readonly type = WalletActionTypes.LoadWalletsCompleted;

    constructor(public payload: WalletReport[]) { }
}

export type WalletActions = LoadWalletsAction | LoadWalletsCompleted | GenerateWalletAction | DeleteWalletAction;
