import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Wallet } from '../model/wallet';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';

@Component({
  selector: 'app-wallet-list',
  templateUrl: './wallet-list.component.html',
  styleUrls: ['./wallet-list.component.less']
})
export class WalletListComponent implements OnInit {

  allWallets$: Observable<Wallet[]>;

  constructor(private store: Store<AppState>) { 
    this.allWallets$ = store.select<Wallet[]>('wallets', 'walletsListState', 'walletList');
  }

  ngOnInit() {
  }

}
