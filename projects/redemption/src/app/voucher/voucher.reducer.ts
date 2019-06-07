import { createFeatureSelector } from '@ngrx/store';
import { VoucherActionTypes, VoucherActions } from './voucher.actions';
import { RedemptionFormState } from '../redemption-form/redemption-form.model';

export const initialState: RedemptionFormState = {
  destinationAddress: '',
  redemptionStatus: 'new',
  voucherInfoError: false,
  voucherCode: '',
};

export function voucherReducer(state = initialState, action: VoucherActions) {
  switch (action.type) {
    case VoucherActionTypes.LoadVoucherInfo:
        return Object.assign({}, state, { voucherInfoError: false, voucherInfo: undefined });

    case VoucherActionTypes.LoadVoucherInfoCompleted:
      return Object.assign({}, state, { voucherInfo: action.payload });

    case VoucherActionTypes.LoadVoucherInfoFailed:
      return Object.assign({}, state, { voucherInfoError: true });

    case VoucherActionTypes.RedeemVoucherCompleted:
      return Object.assign({}, state, { redemptionStatus: 'success', redemptionResponse: action.payload });

    case VoucherActionTypes.RedeemVoucherFailed:
      return Object.assign({}, state, { redemptionStatus: 'error' });

    default:
      return state;
  }
}

export const getDashboardFeature = createFeatureSelector<RedemptionFormState>('vouchers');
