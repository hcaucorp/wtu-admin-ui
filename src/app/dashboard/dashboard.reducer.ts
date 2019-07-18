import { createFeatureSelector } from '@ngrx/store';
import { DashboardActions, DashboardActionTypes } from './dashboard.actions';
import { HealthStatus } from './dashboard.service';

export interface DashboardFeatureState {
    health: string;
    redemptions: RedemptionsMetrics;
}

export interface RedemptionsMetrics {
    success: number;
    failure: number;
}

const initialState = {
    health: '🤷‍',
    redemptions: {
        success: 0,
        failure: 0
    }
};

export function reducer(state: DashboardFeatureState = initialState, action: DashboardActions) {
    switch (action.type) {
        case DashboardActionTypes.CheckHealth:
            return Object.assign({}, state, { health: '🤔' });
        case DashboardActionTypes.CheckHealthCompleted:
            return Object.assign({}, state, { health: action.health === HealthStatus.Online ? '✅' : '💔' });
        case DashboardActionTypes.CheckMetricsCompleted:
            if (action.name === 'redemption.success') {
                return Object.assign({}, state, {
                    redemptions: {
                        success: action.value.measurements[0].value,
                        failure: state.redemptions.failure
                    }
                });
            }
            if (action.name === 'redemption.failure') {
                return Object.assign({}, state, {
                    redemptions: {
                        success: state.redemptions.success,
                        failure: action.value.measurements[0].value
                    }
                });
            }
            break;
        default:
            return state;
    }
}

export const getDashboardFeature = createFeatureSelector<DashboardFeatureState>('dashboard');
