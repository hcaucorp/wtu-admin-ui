import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Router } from '@angular/router';
import { GenerateWalletAction, LoadWalletsAction } from '../actions/wallet.actions';
import { WalletsFeatureState, getWalletsState } from '../reducers/wallet.reducer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-wallet-create',
  templateUrl: './wallet-create.component.html',
  styleUrls: ['./wallet-create.component.less']
})
export class WalletCreateComponent implements OnInit {

  existingWalletsCurrencies$: Observable<string[]>;

  walletForm: FormGroup;

  readonly supportedCurrencies: string[] = ['BTC', 'BCH', 'LIBRA'];

  constructor(
    private store: Store<WalletsFeatureState>,
    private fb: FormBuilder,
    private router: Router) {

    this.existingWalletsCurrencies$ = store.select<WalletsFeatureState>(getWalletsState)
      .pipe(
        map(state => state.wallets),
        map(wallets => wallets.map(wallet => wallet.currency))
      );
  }

  walletExists(currency: string): Observable<boolean> {
    return this.existingWalletsCurrencies$.pipe(
      map(currencies => currencies.find(a => a === currency)),
      map(value => !!value)
    );
  }

  ngOnInit() {
    this.walletForm = this.fb.group({
      currency: ['', [Validators.required]],
    });

    this.store.dispatch(new LoadWalletsAction());
  }

  onSubmit() {
    this.store.dispatch(new GenerateWalletAction(this.walletForm.value));
    this.router.navigate(['/wallets']);
  }
}
