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
import { WalletsModule } from './wallets/wallets.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { VoucherListComponent } from './vouchers/voucher-list/voucher-list.component';
import { VouchersGenerateComponent } from './vouchers/vouchers-generate/vouchers-generate.component';
import { VoucherDetailsComponent } from './vouchers/voucher-details/voucher-details.component';
import { VouchersModule } from './vouchers/vouchers.module';

@NgModule({
    declarations: [
        AppComponent,
        TopMenuComponent,
        VouchersComponent,
        HomeComponent,
        VoucherListComponent,
        VouchersGenerateComponent,
        VoucherDetailsComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        StoreModule.forRoot({}),
        StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
        StoreDevtoolsModule.instrument({ name: 'NgRx DevTools', logOnly: environment.production }),
        EffectsModule.forRoot([]),

        WalletsModule,
        VouchersModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
