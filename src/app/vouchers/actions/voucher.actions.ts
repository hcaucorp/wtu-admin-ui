import { Action } from '@ngrx/store';
import { Voucher } from '../model/voucher';

export enum VoucherActionTypes {
    ActivatePaperVouchers = '[Voucher] Activate Paper Vouchers',
    DeleteVouchers = '[Voucher] Delete Vouchers',
    GenerateVouchers = '[Voucher] Generate Vouchers',
    LoadVouchers = '[Voucher] Load Vouchers',
    LoadVouchersCompleted = '[Voucher] Load Vouchers Completed',
    PublishVouchers = '[Voucher] Publish Vouchers',
    UnPublishVouchers = '[Voucher] Un-Publish Vouchers',
}

export interface GenerateVouchersSpec {
    count: number;
    totalAmount: number;
    walletId: number;
    singlePrice: number;
    singlePriceCurrency: string;
    sku: string;
}

export interface ActivatePaperVouchersSpec extends GenerateVouchersSpec {
    codes: string[];
}

export class ActivatePaperVouchersAction implements Action {
    readonly type = VoucherActionTypes.ActivatePaperVouchers;

    constructor(public payload: ActivatePaperVouchersSpec) { }
}

export class GenerateVouchersAction implements Action {
    readonly type = VoucherActionTypes.GenerateVouchers;

    constructor(public payload: GenerateVouchersSpec) { }
}

export class DeleteVouchersAction implements Action {
    readonly type = VoucherActionTypes.DeleteVouchers;

    constructor(public sku: string) { }
}

export class LoadVouchersAction implements Action {
    readonly type = VoucherActionTypes.LoadVouchers;
}

export class LoadVouchersCompleted implements Action {
    readonly type = VoucherActionTypes.LoadVouchersCompleted;

    constructor(public payload: Voucher[]) { }
}

export class PublishVouchersAction implements Action {
    readonly type = VoucherActionTypes.PublishVouchers;

    constructor(public sku: string) { }
}

export class UnPublishVouchersAction implements Action {
    readonly type = VoucherActionTypes.UnPublishVouchers;

    constructor(public sku: string) { }
}

export type VoucherActions = ActivatePaperVouchersAction | LoadVouchersAction | LoadVouchersCompleted |
    GenerateVouchersAction | DeleteVouchersAction | PublishVouchersAction | UnPublishVouchersAction;
