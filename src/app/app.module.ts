import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { HomeComponent } from './home/home.component';
import { VouchersComponent } from './vouchers/vouchers.component';
import { WalletsComponent } from './wallets/wallets.component';
import { WalletDetailsComponent } from './wallets/wallet-details/wallet-details.component';
import { WalletListComponent } from './wallets/wallet-list/wallet-list.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { reducer as walletsReducer } from './wallets/reducers/wallet.reducer';

@NgModule({
    declarations: [
        AppComponent,
        TopMenuComponent,
        WalletsComponent,
        VouchersComponent,
        HomeComponent,
        WalletDetailsComponent,
        WalletListComponent,
        SideMenuComponent
    ],
    imports: [
        BrowserAnimationsModule,
        AppRoutingModule,
        StoreModule.forRoot({
            wallets: walletsReducer
        }),
        StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
        StoreDevtoolsModule.instrument({name: 'NgRx DevTools', logOnly: environment.production}),
        EffectsModule.forRoot([]),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
