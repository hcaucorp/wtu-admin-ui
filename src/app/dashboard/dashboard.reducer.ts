import { createFeatureSelector } from '@ngrx/store';
import { CheckMetricsCompletedAction, DashboardActions, DashboardActionTypes } from './dashboard.actions';
import { HealthStatus } from './dashboard.service';

export interface DashboardFeatureState {
    health: string;
    redemptions: RedemptionsMetrics;
}

export interface RedemptionsMetrics {
    success: number;
    failure: number;
    error: number;
}

const initialState = {
    health: '🤷‍',
    redemptions: {
        success: -1,
        failure: -1,
        error: -1
    }
};

function metricsReducer(state: DashboardFeatureState = initialState, action: CheckMetricsCompletedAction) {
    if (action.name === 'redemption.success') {
        return Object.assign({}, state, {
            redemptions: {
                success: action.value.measurements[0].value,
                failure: state.redemptions.failure
            }
        });
    } else if (action.name === 'redemption.failure') {
        return Object.assign({}, state, {
            redemptions: {
                success: state.redemptions.success,
                failure: action.value.measurements[0].value
            }
        });
    } else if (action.name === 'redemption.error') {
        return Object.assign({}, state, {
            redemptions: {
                success: state.redemptions.error,
                failure: action.value.measurements[0].value
            }
        });
    } else {
        return state;
    }
}

export function reducer(state: DashboardFeatureState = initialState, action: DashboardActions) {
    switch (action.type) {
        case DashboardActionTypes.CheckHealth:
            return Object.assign({}, state, { health: '🤔' });
        case DashboardActionTypes.CheckHealthCompleted:
            return Object.assign({}, state, { health: action.health === HealthStatus.Online ? '✅' : '💔' });
        case DashboardActionTypes.CheckMetricsCompleted:
            return metricsReducer(state, action);
        default:
            return state;
    }
}

export const getDashboardFeature = createFeatureSelector<DashboardFeatureState>('dashboard');
