
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError, mergeMap } from 'rxjs/operators';
import {
    DashboardActionTypes, DashboardActions, CheckHealthAction, CheckHealthCompletedAction, CheckMetricsAction, CheckMetricsCompletedAction
} from './dashboard.actions';
import { DashboardService, HealthStatus } from './dashboard.service';

@Injectable()
export class DashboardEffects {

    constructor(private actions$: Actions,
        private dashboardService: DashboardService) { }

    @Effect()
    onCheckHealth$: Observable<DashboardActions> = this.actions$.pipe(
        ofType<CheckHealthAction>(DashboardActionTypes.CheckHealth),
        switchMap(_ => this.dashboardService.checkHealth()),
        catchError(() => of(HealthStatus.Offline)),
        map(health => new CheckHealthCompletedAction(health))
    );

    @Effect()
    onCheckMetrics$: Observable<DashboardActions> = this.actions$.pipe(
        ofType<CheckMetricsAction>(DashboardActionTypes.CheckMetrics),
        mergeMap(action => of({ name: action.name, value: this.dashboardService.checkMetrics(action.name) })),
        mergeMap(pair => pair.value
            .pipe(
                catchError(() => of('🔥')),
                map(result => new CheckMetricsCompletedAction(result, pair.name)),
            )
        )
    );
}
