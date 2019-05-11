import { Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Voucher } from '../model/voucher';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { PublishVouchersAction, UnPublishVouchersAction, VoucherActionTypes } from '../actions/voucher.actions';

export interface VouchersPublishPayload {
  vouchers$: Observable<Voucher[]>;
  action?: VoucherActionTypes;
}

@Component({
  selector: 'app-vouchers-publish',
  templateUrl: './vouchers-publish.component.html',
  styleUrls: ['./vouchers-publish.component.less']
})
export class VouchersPublishComponent {

  voucherSkus$: Observable<string[]>;

  constructor(
    private bottomSheetRef: MatBottomSheetRef<VouchersPublishComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: VouchersPublishPayload,
    private store: Store<any>) {

    this.voucherSkus$ = data.vouchers$.pipe(
      map(vouchers => vouchers.map(voucher => voucher.sku)),
      map(skus => skus.filter((value, index, self) => self.indexOf(value) === index))
    );
  }

  onClick(sku: string): void {
    if (this.data.action === VoucherActionTypes.PublishVouchers) {
      this.store.dispatch(new PublishVouchersAction(sku));
    } else if (this.data.action === VoucherActionTypes.UnPublishVouchers) {
      this.store.dispatch(new UnPublishVouchersAction(sku));
    }

    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
