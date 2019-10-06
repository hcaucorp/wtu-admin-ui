import { Action } from '@ngrx/store';
import { HealthStatus } from './dashboard.service';

export enum DashboardActionTypes {
    CheckHealth = '[Dashboard] Check health',
    CheckHealthCompleted = '[Dashboard] Check health completed',
    CheckMetrics = 'Dashboard] Check Metrics',
    CheckMetricsCompleted = 'Dashboard] Check Metrics Completed'
}

export class CheckHealthAction implements Action {
    readonly type = DashboardActionTypes.CheckHealth;
}

export class CheckHealthCompletedAction implements Action {
    readonly type = DashboardActionTypes.CheckHealthCompleted;
    constructor(public health: HealthStatus) {}
}

export class CheckMetricsAction implements Action {
    readonly type = DashboardActionTypes.CheckMetrics;
    constructor(public name: string) {}
}

export class CheckMetricsCompletedAction implements Action {
    readonly type = DashboardActionTypes.CheckMetricsCompleted;
    constructor(public value: any, public name: string) {}
}

export type DashboardActions = CheckHealthAction | CheckHealthCompletedAction | CheckMetricsAction | CheckMetricsCompletedAction;
