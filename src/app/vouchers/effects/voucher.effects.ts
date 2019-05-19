
import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import {
  VoucherActions, LoadVouchersAction, VoucherActionTypes, LoadVouchersCompleted,
  GenerateVouchersAction,
  DeleteVouchersAction,
  PublishVouchersAction,
  UnPublishVouchersAction,
  ActivatePaperVouchersAction,
} from '../actions/voucher.actions';
import { VoucherService } from '../service/voucher.service';

@Injectable()
export class VoucherEffects {

  constructor(private actions$: Actions,
    private voucherService: VoucherService) { }

  @Effect()
  onActivatePaperVouchers$: Observable<VoucherActions> = this.actions$.pipe(
    ofType<ActivatePaperVouchersAction>(VoucherActionTypes.ActivatePaperVouchers),
    switchMap(action => this.voucherService.activatePaperVouchers(action.payload)),
    map(_ => new LoadVouchersAction())
  );

  @Effect()
  onDeleteVouchers$: Observable<VoucherActions> = this.actions$.pipe(
    ofType<DeleteVouchersAction>(VoucherActionTypes.DeleteVouchers),
    switchMap(action => this.voucherService.deleteVouchers(action.sku)),
    map(_ => new LoadVouchersAction())
  );

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
    switchMap(action => this.voucherService.publishVouchers(action.sku)),
    map(_ => new LoadVouchersAction())
  );

  @Effect()
  onUnPublishVouchers$: Observable<VoucherActions> = this.actions$.pipe(
    ofType<UnPublishVouchersAction>(VoucherActionTypes.UnPublishVouchers),
    switchMap(action => this.voucherService.unpublishVouchers(action.sku)),
    map(_ => new LoadVouchersAction())
  );
}
