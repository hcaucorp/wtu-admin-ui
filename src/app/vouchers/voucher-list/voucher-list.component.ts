import { Component, OnInit } from '@angular/core';
import { Voucher } from '../model/voucher';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { VouchersFeatureState, getVouchersState } from '../reducers/voucher.reducer';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-voucher-list',
  templateUrl: './voucher-list.component.html',
  styleUrls: ['./voucher-list.component.less']
})
export class VoucherListComponent implements OnInit {

  vouchers$: Observable<Voucher[]>;

  constructor(private store: Store<any>) {
    this.vouchers$ = store.select<VouchersFeatureState>(getVouchersState)
      .pipe(
        map(state => state.vouchers)
      );
  }

  ngOnInit() {
  }

}
