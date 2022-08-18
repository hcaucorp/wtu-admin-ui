import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoadWalletsAction } from 'src/app/wallets/actions/wallet.actions';
import { Wallet } from 'src/app/wallets/model/wallet';
import { getWalletsState, WalletsFeatureState } from '../../wallets/reducers/wallet.reducer';
import { GenerateVouchersAction } from '../actions/voucher.actions';

@Component({
  selector: 'app-vouchers-generate',
  templateUrl: './vouchers-generate.component.html',
  styleUrls: ['./vouchers-generate.component.less']
})
export class VouchersGenerateComponent implements OnInit {

  wallets$: Observable<Wallet[]>;

  voucherFormGroup: FormGroup;

  // for display purposes only
  uploadedVoucherCodes: Array<String> = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dialog: MatDialog,
    private store: Store<any>) {
    this.wallets$ = store.select<WalletsFeatureState>(getWalletsState)
      .pipe(
        map(state => state.walletReports),
        map(walletReports => walletReports.map(walletReport => walletReport.wallet))
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
      voucherCodeType: ['upload', [Validators.required]],
      voucherCodes: '',
    });

    this.voucherFormGroup
      .controls
      .count
      .disable();

    this.voucherFormGroup
      .controls
      .voucherCodes
      .valueChanges
      .subscribe(value => {
        this.uploadedVoucherCodes = (value || '').split(/\s+/);
        this.uploadedVoucherCodes = this.uploadedVoucherCodes.filter(v => !!v);
        this.voucherFormGroup.value.count = this.uploadedVoucherCodes.length;
      });

    this.voucherFormGroup
      .controls
      .voucherCodeType
      .valueChanges
      .subscribe(value => {
        if (value === 'upload') {
          this.voucherFormGroup.controls.count.disable();
        } else {
          this.voucherFormGroup.controls.count.enable();
        }
      });

    this.store.dispatch(new LoadWalletsAction());
  }

  onSubmit() {
    const formValue = this.voucherFormGroup.value;
    formValue.count = this.uploadedVoucherCodes.length;
    this.store.dispatch(new GenerateVouchersAction(formValue));
    this.router.navigate(['/vouchers']);
  }
}
