
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ShopifyService } from './shopify.service';
import { Observable, of, empty } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import {
    LoadUnfulfilledOrdersCountAction, DashboardActionTypes, LoadUnfulfilledOrdersCountActionCompleted,
    DashboardActions, FulfillAllOrdersAction, FulfillAllOrdersCompletedAction, CheckHealthAction, CheckHealthCompletedAction
} from './dashboard.actions';
import { DashboardService, HealthStatus } from './dashboard.service';
import { playAudio, AudioFile } from '../audio/audio-player.service';

@Injectable()
export class DashboardEffects {

    constructor(private actions$: Actions,
        private shopifyService: ShopifyService,
        private dashboardService: DashboardService) { }

    @Effect()
    onLoadUnfulfilledOrdersCount$: Observable<DashboardActions> = this.actions$.pipe(
        ofType<LoadUnfulfilledOrdersCountAction>(DashboardActionTypes.LoadUnfulfilledOrdersCount),
        switchMap(_ => this.shopifyService.loadUnfulfilledOrdersCount()),
        catchError(error => empty()),
        map(count => new LoadUnfulfilledOrdersCountActionCompleted(count))
    );

    @Effect()
    onFulfillAllOrders$: Observable<DashboardActions> = this.actions$.pipe(
        ofType<FulfillAllOrdersAction>(DashboardActionTypes.FulfillAllOrders),
        switchMap(_ => this.shopifyService.fulfillAllUnfulfilledOrders()),
        catchError(error => of(null)),
        map(_ => new FulfillAllOrdersCompletedAction())
    );

    @Effect()
    onFulfillAllOrdersCompleted$: Observable<DashboardActions> = this.actions$.pipe(
        ofType<FulfillAllOrdersCompletedAction>(DashboardActionTypes.FulfillAllOrdersCompleted),
        map(_ => new LoadUnfulfilledOrdersCountAction())
    );

    @Effect()
    onCheckHealth$: Observable<DashboardActions> = this.actions$.pipe(
        ofType<CheckHealthAction>(DashboardActionTypes.CheckHealth),
        switchMap(_ => this.dashboardService.checkHealth()),
        catchError(error => {
            playAudio(AudioFile.ServerOffline);
            return of(HealthStatus.Offline);
        }),
        map(health => new CheckHealthCompletedAction(health))
    );

}
