import { createFeatureSelector } from '@ngrx/store';
import { DashboardActions, DashboardActionTypes } from './dashboard.actions';
import { HealthStatus } from './dashboard.service';

export interface DashboardFeatureState {
    health: string;
    ipBlacklistCount: number;
}

const initialState = {
    health: '🤷‍',
    ipBlacklistCount: 0,
};

export function reducer(state: DashboardFeatureState = initialState, action: DashboardActions) {
    switch (action.type) {
        case DashboardActionTypes.CheckHealth:
            return Object.assign({}, state, { health: '🤔' });
        case DashboardActionTypes.CheckHealthCompleted:
            return Object.assign({}, state, { health: action.health === HealthStatus.Online ? '✅' : '💔'});
        default:
            return state;
    }
}

export const getDashboardFeature = createFeatureSelector<DashboardFeatureState>('dashboard');
