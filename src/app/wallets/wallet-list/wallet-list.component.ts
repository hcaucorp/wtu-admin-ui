import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Wallet } from '../model/wallet';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { WalletModuleState } from '../wallets.state';
import { getWalletsList } from '../reducers/wallet.reducer';
import { LoadWalletsAction } from '../actions/wallet.actions';

@Component({
  selector: 'app-wallet-list',
  templateUrl: './wallet-list.component.html',
  styleUrls: ['./wallet-list.component.less']
})
export class WalletListComponent implements OnInit {

  wallets$: Observable<Wallet[]>;

  constructor(private store: Store<WalletModuleState>) {
    this.wallets$ = store.select<Wallet[]>(getWalletsList);
  }

  ngOnInit() {
    this.store.dispatch(new LoadWalletsAction());
  }

}
