import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FulfillmentsFeatureState, getFulfillmentsState } from './fulfillments.reducer';
import { Observable } from 'rxjs';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { FindFulfillmentForOrderAction } from './fulfillments.actions';
import { Fulfillment } from './fulfillment.model';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-fulfillments',
  templateUrl: './fulfillments.component.html',
  styleUrls: ['./fulfillments.component.less']
})
export class FulfillmentsComponent implements OnInit {

  state$: Observable<FulfillmentsFeatureState>;
  ff$: Observable<Fulfillment>;
  orderIdForm: FormGroup;
  log: String;

  constructor(private store: Store<FulfillmentsFeatureState>,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.state$ = this.store.select<FulfillmentsFeatureState>(getFulfillmentsState);

    this.state$.subscribe(s => this.log = JSON.stringify(s));

    this.ff$ = this.state$.pipe(
      map(o => o.fulfillment)
    );

    this.orderIdForm = this.fb.group({
      orderId: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.store.dispatch(new FindFulfillmentForOrderAction(this.orderIdForm.value.orderId));
  }
}
