import { createFeatureSelector } from '@ngrx/store';
import { Fulfillment } from './fulfillment.model';
import { FulfillmentActions, FulfillmentActionTypes } from './fulfillments.actions';

export interface FulfillmentsFeatureState {
    fulfillment?: Fulfillment;
    loadingFulfillment: boolean;
}

const initialState = {
    loadingFulfillment: false,
};

export function fulfillmentsReducer(state: FulfillmentsFeatureState = initialState, action: FulfillmentActions) {
    switch (action.type) {
        case FulfillmentActionTypes.FindFulfillmentForOrder:
            return Object.assign({}, state, { fulfillment: null, loadingFulfillment: true });
        case FulfillmentActionTypes.FindFulfillmentForOrderCompleted:
            return Object.assign({}, state, { fulfillment: action.payload, loadingFulfillment: false });
        default:
            return state;
    }
}

export const getFulfillmentsState = createFeatureSelector<FulfillmentsFeatureState>('fulfillments');
