import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { WalletsFeatureState, getWalletsState } from '../../wallets/reducers/wallet.reducer';
import { Wallet } from 'src/app/wallets/model/wallet';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GenerateVouchersAction } from '../actions/voucher.actions';
import { LoadWalletsAction } from 'src/app/wallets/actions/wallet.actions';
import { MatDialog } from '@angular/material';

export interface DialogData {
  counter: number;
  total: number;
}

@Component({
  selector: 'app-vouchers-generate',
  templateUrl: './vouchers-generate.component.html',
  styleUrls: ['./vouchers-generate.component.less']
})
export class VouchersGenerateComponent implements OnInit {

  wallets$: Observable<Wallet[]>;

  voucherFormGroup: FormGroup;

  scannerEnabled = false;
  scannedVoucherCodes: Array<String> = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dialog: MatDialog,
    private store: Store<any>) {
    this.wallets$ = store.select<WalletsFeatureState>(getWalletsState)
      .pipe(
        map(state => state.wallets)
      );
  }

  ngOnInit() {
    this.voucherFormGroup = this.fb.group({
      count: [0, Validators.min(1)],
      totalAmount: [0, Validators.min(1)],
      walletId: ['', Validators.required],
      price: [0, Validators.min(1)],
      priceCurrency: 'GBP',
      sku: ['', [Validators.required, Validators.minLength(5)]],
      voucherCodeType: ['', [Validators.required]],
    });
    this.store.dispatch(new LoadWalletsAction());
  }

  onSubmit() {
    const formValue = this.voucherFormGroup.value;
    if (formValue.voucherCodeType === 'online') {
      this.store.dispatch(new GenerateVouchersAction(this.voucherFormGroup.value));
      this.router.navigate(['/vouchers']);
    }
  }
}
