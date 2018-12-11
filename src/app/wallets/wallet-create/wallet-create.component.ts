import { Component, OnInit } from '@angular/core';
import { WalletService } from '../service/wallet.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { WalletModuleState } from '../wallets.state';
import { LoadWalletsAction, GenerateWalletAction } from '../actions/wallet.actions';

@Component({
  selector: 'app-wallet-create',
  templateUrl: './wallet-create.component.html',
  styleUrls: ['./wallet-create.component.less']
})
export class WalletCreateComponent implements OnInit {

  walletForm: FormGroup;

  constructor(
    private store: Store<WalletModuleState>,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.walletForm = this.fb.group({
      description: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {

    console.warn(this.walletForm.value);

    // this.store.dispatch(new GenerateWalletAction());
  }

}
