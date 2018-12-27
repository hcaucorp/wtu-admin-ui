
import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { Observable, throwError } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import {
  VoucherActions, LoadVouchersAction, VoucherActionTypes, LoadVouchersCompleted,
  GenerateVouchersAction,
  PublishVouchersAction
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

  @Effect()
  onPublishVouchers$: Observable<VoucherActions> = this.actions$.pipe(
    ofType<PublishVouchersAction>(VoucherActionTypes.PublishVouchers),
    switchMap(action => this.voucherService.publishVouchers(action.payload)),
    map(_ => new LoadVouchersAction())
  );
}
