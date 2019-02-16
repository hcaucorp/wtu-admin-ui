import { Effect, Actions, ofType } from '@ngrx/effects';
import { FulfillmentsService } from './fulfillments.service';
import {
    FulfillmentActionTypes, FulfillmentActions, FindFulfillmentForOrderAction,
    FindFulfillmentForOrderCompletedAction
} from './fulfillments.actions';
import { Observable, empty, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class FulfillmentsEffects {

    constructor(private actions$: Actions, private service: FulfillmentsService) { }

    @Effect()
    onFindFulfillmentForOrder$: Observable<FulfillmentActions> = this.actions$.pipe(
        ofType<FindFulfillmentForOrderAction>(FulfillmentActionTypes.FindFulfillmentForOrder),
        switchMap(action => this.service.findFulfillmentForOrder(action.orderId)),
        catchError(error => of(null)),
        map(ff => new FindFulfillmentForOrderCompletedAction(ff))
    );
}
