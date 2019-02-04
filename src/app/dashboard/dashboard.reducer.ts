import { createFeatureSelector } from '@ngrx/store';
import { DashboardActions, DashboardActionTypes, LoadUnfulfilledOrdersCountActionCompleted } from './dashboard.actions';

export interface DashboardFeatureState {
    unfulfilledOrdersCount: number;
    health: string;
}

const initialState = {
    unfulfilledOrdersCount: 0,
    health: '🤷‍',
};

export function reducer(state: DashboardFeatureState = initialState, action: DashboardActions) {
    switch (action.type) {
        case DashboardActionTypes.LoadUnfulfilledOrdersCountCompleted:
            return Object.assign({}, state, { unfulfilledOrdersCount: (<LoadUnfulfilledOrdersCountActionCompleted>action).count });
        default:
            return state;
    }
}

export const getDashboardFeature = createFeatureSelector<DashboardFeatureState>('dashboard');
