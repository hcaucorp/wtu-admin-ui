import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DashboardFeatureState, getDashboardFeature } from './dashboard.reducer';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { LoadUnfulfilledOrdersCountAction, FulfillAllOrdersAction } from './dashboard.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  state$: Observable<DashboardFeatureState>;

  constructor(private store: Store<any>) {
    this.state$ = store.select<DashboardFeatureState>(getDashboardFeature);
  }

  ngOnInit() {
    this.store.dispatch(new LoadUnfulfilledOrdersCountAction());
  }

  fulfillAllOrders() {
    this.store.dispatch(new FulfillAllOrdersAction());
  }
}
