import { Component, OnInit } from '@angular/core';
import { Voucher } from '../model/voucher';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { VouchersFeatureState, getVouchersState } from '../reducers/voucher.reducer';
import { map } from 'rxjs/operators';
import { LoadVouchersAction } from '../actions/voucher.actions';
import { MatBottomSheet } from '@angular/material';
import { VouchersDeleteComponent } from '../vouchers-delete/vouchers-delete.component';
import { VouchersPublishComponent } from '../vouchers-publish/vouchers-publish.component';

@Component({
  selector: 'app-voucher-list',
  templateUrl: './voucher-list.component.html',
  styleUrls: ['./voucher-list.component.less']
})
export class VoucherListComponent implements OnInit {

  vouchers$: Observable<Voucher[]>;

  constructor(
    private store: Store<any>,
    private bottomSheet: MatBottomSheet) {
    this.vouchers$ = store.select<VouchersFeatureState>(getVouchersState)
      .pipe(
        map(state => state.vouchers)
      );
  }

  ngOnInit() {
    this.store.dispatch(new LoadVouchersAction());
  }

  openBottomSheet(action: string): void {
    if (action === 'delete') {
      this.bottomSheet.open(VouchersDeleteComponent, {
        data: {
          vouchers$: this.vouchers$
        }
      });
    }

    if (action === 'publish') {
      this.bottomSheet.open(VouchersPublishComponent, {
        data: {
          vouchers$: this.vouchers$
        }
      });
    }
  }
}
