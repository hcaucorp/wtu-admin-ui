import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HomeComponent } from './home/home.component';
import { WalletsModule } from './wallets/wallets.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { VouchersModule } from './vouchers/vouchers.module';
import { ErrorInterceptor } from './shared/error-interceptor';
import { CallbackComponent } from './auth0/callback.component';
import { InterceptorService } from './auth0/secure.interceptor';
import { Auth0Service } from './auth0/auth0.service';
import { MaterialModule } from './shared/material.module';
import { MenuComponent } from './menu/menu.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from './auth0/auth.guard';

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        HomeComponent,
        CallbackComponent,
        LogoutComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        StoreModule.forRoot({}),
        StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
        StoreDevtoolsModule.instrument({ name: 'NgRx DevTools', logOnly: environment.production }),
        EffectsModule.forRoot([]),

        MaterialModule,
        WalletsModule,
        VouchersModule
    ],
    providers: [
        AuthGuard,
        Auth0Service,
        { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
