import { createFeatureSelector } from '@ngrx/store';
import { Voucher } from '../model/voucher';
import { VoucherActionTypes, LoadVouchersCompleted, VoucherActions } from '../actions/voucher.actions';

export interface VouchersFeatureState {
    vouchers: Voucher[];
}

const initialState = {
    vouchers: []
};

export function reducer(state: VouchersFeatureState = initialState, action: VoucherActions) {
    switch (action.type) {
        case VoucherActionTypes.LoadVouchersCompleted:
            return Object.assign({}, state, { vouchers: action.payload });
        default:
            return state;
    }
}

export const getVouchersState = createFeatureSelector<VouchersFeatureState>('vouchers');
