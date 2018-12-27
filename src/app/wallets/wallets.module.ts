import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { walletsRoute } from './wallets-router.config';
import { reducer } from './reducers/wallet.reducer';
import { WalletService } from './service/wallet.service';
import { EffectsModule } from '@ngrx/effects';
import { WalletEffects } from './effects/wallet.effects';
import { HttpClientModule } from '@angular/common/http';
import { WalletListComponent } from './wallet-list/wallet-list.component';
import { WalletCreateComponent } from './wallet-create/wallet-create.component';
import { WalletsComponent } from './wallets.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        WalletsComponent,
        WalletCreateComponent,
        WalletListComponent,
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule.forChild([walletsRoute]),
        StoreModule.forFeature(`wallets`, reducer),
        EffectsModule.forFeature([WalletEffects]),
        ReactiveFormsModule,
    ],
    providers: [
        WalletService
    ]
})
export class WalletsModule { }
