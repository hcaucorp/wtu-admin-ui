import { Action } from '@ngrx/store'

export const WALLET_GET_ALL   = '[Wallet] Get All';
export const WALLET_NEW       = '[Wallet] New';
export const WALLET_DELETE    = '[Wallet] Delete';

export interface GenerateWalletPayload {
    password: string,
    description: string
}

export interface DeleteWalletPayload {
    id: number
}

export class WalletGenerateAction implements Action {
    readonly type = WALLET_NEW;

    constructor(public payload: GenerateWalletPayload) {}
}

export class WalletDeleteAction implements Action {
    readonly type = WALLET_DELETE;

    constructor(public payload: DeleteWalletPayload) {}
}

export class WalletGetAll implements Action {
    readonly type = WALLET_GET_ALL;
}

export type WalletAction = WalletGetAll | WalletGenerateAction | WalletDeleteAction;