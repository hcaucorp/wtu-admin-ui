import { Action } from '@ngrx/store';
import { Fulfillment } from './fulfillment.model';


export enum FulfillmentActionTypes {
    FindFulfillmentForOrder = '[Fulfillment] Find Fulfillment for Order',
    FindFulfillmentForOrderCompleted = '[Fulfillment] Find Fulfillment for Order Completed',
}

export class FindFulfillmentForOrderAction implements Action {
    readonly type = FulfillmentActionTypes.FindFulfillmentForOrder;

    constructor(public orderId: number) { }
}

export class FindFulfillmentForOrderCompletedAction implements Action {
    readonly type = FulfillmentActionTypes.FindFulfillmentForOrderCompleted;

    constructor(public payload: Fulfillment) { }
}

export type FulfillmentActions = FindFulfillmentForOrderAction | FindFulfillmentForOrderCompletedAction;
