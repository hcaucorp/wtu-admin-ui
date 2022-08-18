import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { WalletsRoute } from './wallets-router.config';
import { reducer } from './reducers/wallet.reducer';
import { WalletService } from './service/wallet.service';
import { EffectsModule } from '@ngrx/effects';
import { WalletEffects } from './effects/wallet.effects';
import { HttpClientModule } from '@angular/common/http';
import { WalletListComponent } from './wallet-list/wallet-list.component';
import { WalletCreateComponent } from './wallet-create/wallet-create.component';
import { WalletsComponent } from './wallets.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { QRCodeModule } from 'angularx-qrcode';
import { QrComponent } from '../qr/qr-dialog/qr-dialog.component';

@NgModule({
    declarations: [
        WalletsComponent,
        WalletCreateComponent,
        WalletListComponent,
        QrComponent,
    ],
    entryComponents: [
        QrComponent,
    ],
    imports: [
        CommonModule,
        EffectsModule.forFeature([WalletEffects]),
        HttpClientModule,
        MaterialModule,
        ReactiveFormsModule,
        QRCodeModule,
        RouterModule.forChild([WalletsRoute]),
        StoreModule.forFeature(`wallets`, reducer),
    ],
    providers: [
        WalletService
    ]
})
export class WalletsModule { }
