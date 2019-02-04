import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DashboardFeatureState, getDashboardFeature } from './dashboard.reducer';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { LoadUnfulfilledOrdersCountAction } from './dashboard.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  unfulfilledOrdersCount$: Observable<number>;
  health$: Observable<string>;

  constructor(private store: Store<any>) {
    this.unfulfilledOrdersCount$ = store.select<DashboardFeatureState>(getDashboardFeature).pipe(
      map(state => state.unfulfilledOrdersCount)
    );

    this.health$ = store.select<DashboardFeatureState>(getDashboardFeature).pipe(
      map(state => state.health)
    );
  }

  ngOnInit() {
    this.store.dispatch(new LoadUnfulfilledOrdersCountAction());
  }
}
