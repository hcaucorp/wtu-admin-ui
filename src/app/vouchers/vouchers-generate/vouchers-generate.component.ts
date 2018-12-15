import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { WalletsFeatureState, getWalletsState } from '../../wallets/reducers/wallet.reducer';
import { Wallet } from 'src/app/wallets/model/wallet';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GenerateVouchersAction } from '../actions/voucher.actions';

@Component({
  selector: 'app-vouchers-generate',
  templateUrl: './vouchers-generate.component.html',
  styleUrls: ['./vouchers-generate.component.less']
})
export class VouchersGenerateComponent implements OnInit {

  wallets$: Observable<Wallet[]>;

  voucherFormGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store<any>) {
    this.wallets$ = store.select<WalletsFeatureState>(getWalletsState)
      .pipe(
        map(state => state.wallets)
      );
  }

  ngOnInit() {
    this.voucherFormGroup = this.fb.group({
      count: [1, Validators.required],
      totalAmount: [1, Validators.required],
      walletId: ['', Validators.required],
      singlePrice: [1, Validators.required],
      singlePriceCurrency: 'GBP'
    });
  }

  onSubmit() {
    this.store.dispatch(new GenerateVouchersAction(this.voucherFormGroup.value));
    this.router.navigate(['/vouchers']);
  }

}
