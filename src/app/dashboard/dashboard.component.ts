import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { DashboardFeatureState, getDashboardFeature } from './dashboard.reducer';
import { window, takeWhile } from 'rxjs/operators';
import { Observable, interval } from 'rxjs';
import { CheckHealthAction, CheckMetricsAction } from './dashboard.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit, OnDestroy {

  state$: Observable<DashboardFeatureState>;
  refreshSeconds$: Observable<number>;
  isActive = true;

  constructor(private store: Store<any>) {
    this.state$ = store.select<DashboardFeatureState>(getDashboardFeature);
    this.refreshSeconds$ = interval(1000);
  }

  ngOnInit() {
    this.store.dispatch(new CheckHealthAction());
    this.refreshSeconds$.pipe(
      window(interval(60 * 1000)),
      takeWhile(_ => this.isActive)
    )
      .subscribe(_ => {
        this.store.dispatch(new CheckHealthAction());
        this.store.dispatch(new CheckMetricsAction('redemption.success'));
        this.store.dispatch(new CheckMetricsAction('redemption.failure'));
      });
  }

  ngOnDestroy(): void {
    this.isActive = false;
  }
}
