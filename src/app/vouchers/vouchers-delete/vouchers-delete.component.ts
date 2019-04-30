import { Component, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { DeleteVouchersAction } from '../actions/voucher.actions';
import { Voucher } from '../model/voucher';
import { map } from 'rxjs/operators';

export interface VouchersDeletePayload {
  vouchers$: Observable<Voucher[]>;
}

@Component({
  selector: 'app-vouchers-delete',
  templateUrl: './vouchers-delete.component.html',
  styleUrls: ['./vouchers-delete.component.less']
})
export class VouchersDeleteComponent {

  voucherSkus$: Observable<string[]>;

  constructor(
    private bottomSheetRef: MatBottomSheetRef<VouchersDeleteComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: VouchersDeletePayload,
    private store: Store<any>) {

    this.voucherSkus$ = data.vouchers$.pipe(
      map(vouchers => vouchers.map(voucher => voucher.sku)),
      map(skus => skus.filter((value, index, self) => self.indexOf(value) === index))
    );
  }

  onClickDelete(sku: string): void {
    this.store.dispatch(new DeleteVouchersAction(sku));

    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
