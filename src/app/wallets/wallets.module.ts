import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { walletsRoute } from './wallets-router.config';
import { reducer } from './reducers/wallet.reducer';
import { WalletService } from './service/wallet.service';
import { EffectsModule } from '@ngrx/effects';
import { WalletEffects } from './effects/wallet.effects';
import { HttpClient } from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([walletsRoute]),
        StoreModule.forFeature(walletsRoute.path, reducer),
        EffectsModule.forFeature([WalletEffects]),
    ],
    providers: [
        WalletService,
        HttpClient
    ]
})
export class WalletsModule { }
