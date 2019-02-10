import { Action } from '@ngrx/store';
import { HealthStatus } from './dashboard.service';

export enum DashboardActionTypes {
    LoadUnfulfilledOrdersCount = '[Dashboard] Load unfulfilled orders counter',
    LoadUnfulfilledOrdersCountCompleted = '[Dashboard] Load unfulfilled orders counter completed',
    FulfillAllOrders = '[Dashboard] Fulfill all pending orders',
    FulfillAllOrdersCompleted = '[Dashboard] Fulfill all pending orders completed',
    CheckHealth = '[Dashboard] Check health',
    CheckHealthCompleted = '[Dashboard] Check health completed',
}

export class FulfillAllOrdersAction implements Action {
    readonly type = DashboardActionTypes.FulfillAllOrders;
}

export class FulfillAllOrdersCompletedAction implements Action {
    readonly type = DashboardActionTypes.FulfillAllOrdersCompleted;
}

export class LoadUnfulfilledOrdersCountAction implements Action {
    readonly type = DashboardActionTypes.LoadUnfulfilledOrdersCount;
}

export class LoadUnfulfilledOrdersCountActionCompleted implements Action {
    readonly type = DashboardActionTypes.LoadUnfulfilledOrdersCountCompleted;
    constructor(public count: number) { }
}

export class CheckHealthAction implements Action {
    readonly type = DashboardActionTypes.CheckHealth;
}

export class CheckHealthCompletedAction implements Action {
    readonly type = DashboardActionTypes.CheckHealthCompleted;
    constructor(public health: HealthStatus) {}
}

export type DashboardActions = FulfillAllOrdersAction | FulfillAllOrdersCompletedAction |
    LoadUnfulfilledOrdersCountAction | LoadUnfulfilledOrdersCountActionCompleted |
    CheckHealthAction | CheckHealthCompletedAction;
