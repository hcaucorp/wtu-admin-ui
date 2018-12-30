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
import { WalletsModule } from './wallets/wallets.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { VouchersModule } from './vouchers/vouchers.module';
import { ErrorInterceptor } from './shared/error-interceptor';
import { MaterialModule } from './shared/material.module';

@NgModule({
    declarations: [
        AppComponent,
        TopMenuComponent,
        HomeComponent
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
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
    bootstrap: [AppComponent]
})
export class AppModule {
}
