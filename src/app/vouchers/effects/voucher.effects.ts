
import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import {
  VoucherActions, LoadVouchersAction, VoucherActionTypes, LoadVouchersCompleted,
  GenerateVouchersAction
} from '../actions/voucher.actions';
import { VoucherService } from '../service/voucher.service';

@Injectable()
export class VoucherEffects {

  constructor(private actions$: Actions,
    private voucherService: VoucherService) { }

  @Effect()
  onLoadVouchers$: Observable<VoucherActions> = this.actions$.pipe(
    ofType<LoadVouchersAction>(VoucherActionTypes.LoadVouchers),
    switchMap(_ => this.voucherService.getAll()),
    map(list => new LoadVouchersCompleted(list))
  );

  @Effect()
  onGenerateVouchers$: Observable<VoucherActions> = this.actions$.pipe(
    ofType<GenerateVouchersAction>(VoucherActionTypes.GenerateVouchers),
    switchMap(action => this.voucherService.generateVouchers(action.payload)),
    map(_ => new LoadVouchersAction())
  );
}
