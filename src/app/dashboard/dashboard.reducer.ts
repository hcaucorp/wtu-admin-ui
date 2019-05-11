import { createFeatureSelector } from '@ngrx/store';
import { DashboardActions, DashboardActionTypes } from './dashboard.actions';
import { HealthStatus } from './dashboard.service';

export interface DashboardFeatureState {
    fulfillingOrders: boolean;
    unfulfilledOrdersCount: string;
    health: string;
    ipBlacklistCount: number;
}

const initialState = {
    fulfillingOrders: false,
    unfulfilledOrdersCount: '🤷‍',
    health: '🤷‍',
    ipBlacklistCount: 0,
};

export function reducer(state: DashboardFeatureState = initialState, action: DashboardActions) {
    switch (action.type) {
        case DashboardActionTypes.FulfillAllOrders:
            return Object.assign({}, state, { fulfillingOrders: true });
        case DashboardActionTypes.FulfillAllOrdersCompleted:
            return Object.assign({}, state, { fulfillingOrders: false });
        case DashboardActionTypes.LoadUnfulfilledOrdersCount:
            return Object.assign({}, state, { unfulfilledOrdersCount: '🤔' });
        case DashboardActionTypes.LoadUnfulfilledOrdersCountCompleted:
            return Object.assign({}, state, { unfulfilledOrdersCount: '' + action.count });
        case DashboardActionTypes.CheckHealth:
            return Object.assign({}, state, { health: '🤔' });
        case DashboardActionTypes.CheckHealthCompleted:
            return Object.assign({}, state, { health: action.health === HealthStatus.Online ? '✅' : '💔'});
        default:
            return state;
    }
}

export const getDashboardFeature = createFeatureSelector<DashboardFeatureState>('dashboard');
