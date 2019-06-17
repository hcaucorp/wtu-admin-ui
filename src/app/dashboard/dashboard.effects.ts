
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import {
    DashboardActionTypes, DashboardActions, CheckHealthAction, CheckHealthCompletedAction
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

}
