import { Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Voucher } from '../model/voucher';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { PublishVouchersAction, UnPublishVouchersAction } from '../actions/voucher.actions';

export interface VouchersDeletePayload {
  vouchers$: Observable<Voucher[]>;
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
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: VouchersDeletePayload,
    private store: Store<any>) {

    this.voucherSkus$ = data.vouchers$.pipe(
      map(vouchers => vouchers.map(voucher => voucher.sku)),
      map(skus => skus.filter((value, index, self) => self.indexOf(value) === index))
    );
  }

  onClickPublish(sku: string): void {
    this.store.dispatch(new PublishVouchersAction(sku));

    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

  onClickUnpublish(sku: string): void {
    this.store.dispatch(new UnPublishVouchersAction(sku));

    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

}
