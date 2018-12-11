
import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

import { LoadWalletsAction, WalletActionTypes, LoadWalletsCompleted, WalletActions, GenerateWalletAction } from '../actions/wallet.actions';
import { WalletService } from '../service/wallet.service';

@Injectable()
export class WalletEffects {

  constructor(private actions$: Actions,
    private walletService: WalletService) { }

  @Effect()
  onLoadWallets$: Observable<WalletActions> = this.actions$.pipe(
    ofType<LoadWalletsAction>(WalletActionTypes.LoadWallets),
    switchMap(action => this.walletService.getAll()),
    map(walletList => new LoadWalletsCompleted(walletList))
  );

  @Effect()
  onGenerateWallet$: Observable<WalletActions> = this.actions$.pipe(
    ofType<GenerateWalletAction>(WalletActionTypes.GenerateWallet),
    switchMap(action => this.walletService.generateWallet(action.payload.password, action.payload.description)),
    map(anything => new LoadWalletsAction())
  );
}
