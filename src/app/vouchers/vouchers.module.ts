import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/voucher.reducer';
import { EffectsModule } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { VouchersComponent } from './vouchers.component';
import { VouchersGenerateComponent, DialogScanConfirmationComponent } from './vouchers-generate/vouchers-generate.component';
import { VoucherEffects } from './effects/voucher.effects';
import { VoucherService } from './service/voucher.service';
import { VoucherListComponent } from './voucher-list/voucher-list.component';
import { VouchersRoute } from './vouchers-router.config';
import { VouchersDeleteComponent } from './vouchers-delete/vouchers-delete.component';
import { MaterialModule } from '../shared/material.module';
import { VouchersPublishComponent } from './vouchers-publish/vouchers-publish.component';

@NgModule({
    declarations: [
        DialogScanConfirmationComponent,
        VouchersComponent,
        VouchersGenerateComponent,
        VoucherListComponent,
        VouchersDeleteComponent,
        VouchersPublishComponent,
    ],
    entryComponents: [
        VouchersDeleteComponent,
        VouchersPublishComponent,
    ],
    imports: [
        CommonModule,
        EffectsModule.forFeature([VoucherEffects]),
        MaterialModule,
        ReactiveFormsModule,
        RouterModule.forChild([VouchersRoute]),
        StoreModule.forFeature(`vouchers`, reducer),
    ],
    providers: [
        VoucherService,
        HttpClient
    ]
})
export class VouchersModule { }
