import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DashboardFeatureState, getDashboardFeature } from './dashboard.reducer';
import { map, window, switchMap } from 'rxjs/operators';
import { Observable, interval } from 'rxjs';
import { LoadUnfulfilledOrdersCountAction, FulfillAllOrdersAction, CheckHealthAction } from './dashboard.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  state$: Observable<DashboardFeatureState>;

  refreshSeconds$: Observable<number>;

  constructor(private store: Store<any>) {
    this.state$ = store.select<DashboardFeatureState>(getDashboardFeature);
    this.refreshSeconds$ = interval(1000);
  }

  ngOnInit() {
    this.store.dispatch(new LoadUnfulfilledOrdersCountAction());
    this.store.dispatch(new CheckHealthAction());
    this.refreshSeconds$.pipe(window(interval(60 * 1000))).subscribe(_ => {
      this.store.dispatch(new LoadUnfulfilledOrdersCountAction());
      this.store.dispatch(new CheckHealthAction());
    });
  }

  fulfillAllOrders() {
    this.store.dispatch(new FulfillAllOrdersAction());
  }
}
