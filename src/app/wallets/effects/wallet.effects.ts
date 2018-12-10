
import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { WalletModuleState } from '../wallets.state';
import { LoadWalletsAction, WalletActionTypes, LoadWalletsCompleted, WalletActions } from '../actions/wallet.actions';
import { WalletService } from '../service/wallet.service';

@Injectable()
export class WalletEffects {

  constructor(private actions$: Actions,
    private store$: Store<WalletModuleState>,
    private walletService: WalletService) { }

  @Effect()
  onLoadWallets$: Observable<WalletActions> = this.actions$.pipe(
    ofType<LoadWalletsAction>(WalletActionTypes.LoadWallets),
    switchMap(action => this.walletService.getAll()),
    switchMap(walletList => of(new LoadWalletsCompleted(walletList)))
  );
}
