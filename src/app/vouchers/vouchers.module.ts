import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/voucher.reducer';
import { EffectsModule } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { VouchersComponent } from './vouchers.component';
import { VouchersGenerateComponent } from './vouchers-generate/vouchers-generate.component';
import { VoucherEffects } from './effects/voucher.effects';
import { VoucherService } from './service/voucher.service';
import { VoucherListComponent } from './voucher-list/voucher-list.component';
import { vouchersRoute } from './vouchers-router.config';

@NgModule({
    declarations: [
        VouchersComponent,
        VouchersGenerateComponent,
        VoucherListComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([vouchersRoute]),
        StoreModule.forFeature(`vouchers`, reducer),
        EffectsModule.forFeature([VoucherEffects]),
        ReactiveFormsModule,
    ],
    providers: [
        VoucherService,
        HttpClient
    ]
})
export class VouchersModule { }
