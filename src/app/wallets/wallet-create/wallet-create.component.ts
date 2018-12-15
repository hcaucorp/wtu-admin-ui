import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Router } from '@angular/router';
import { GenerateWalletAction } from '../actions/wallet.actions';
import { WalletsFeatureState } from '../reducers/wallet.reducer';

@Component({
  selector: 'app-wallet-create',
  templateUrl: './wallet-create.component.html',
  styleUrls: ['./wallet-create.component.less']
})
export class WalletCreateComponent implements OnInit {

  walletForm: FormGroup;

  constructor(
    private store: Store<WalletsFeatureState>,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.walletForm = this.fb.group({
      description: ['', [
        Validators.required,
        Validators.minLength(12)
      ]
      ],
    });
  }

  onSubmit() {
    this.store.dispatch(new GenerateWalletAction(this.walletForm.value));
    this.router.navigate(['/wallets']);
  }
}
