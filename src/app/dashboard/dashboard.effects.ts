
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ShopifyService } from './shopify.service';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import {
    LoadUnfulfilledOrdersCountAction, DashboardActionTypes, LoadUnfulfilledOrdersCountActionCompleted,
    DashboardActions, FulfillAllOrdersAction, FulfillAllOrdersCompletedAction, CheckHealthAction, CheckHealthCompletedAction
} from './dashboard.actions';
import { DashboardService } from './dashboard.service';

@Injectable()
export class DashboardEffects {

    constructor(private actions$: Actions,
        private shopifyService: ShopifyService,
        private dashboardService: DashboardService) { }

    @Effect()
    onLoadUnfulfilledOrdersCount$: Observable<DashboardActions> = this.actions$.pipe(
        ofType<LoadUnfulfilledOrdersCountAction>(DashboardActionTypes.LoadUnfulfilledOrdersCount),
        switchMap(_ => this.shopifyService.loadUnfulfilledOrdersCount()),
        map(count => new LoadUnfulfilledOrdersCountActionCompleted(count))
    );

    @Effect()
    onFulfillAllOrders$: Observable<DashboardActions> = this.actions$.pipe(
        ofType<FulfillAllOrdersAction>(DashboardActionTypes.FulfillAllOrders),
        switchMap(_ => this.shopifyService.fulfillAllUnfulfilledOrders()),
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
        map(health => new CheckHealthCompletedAction(health))
    );

}
