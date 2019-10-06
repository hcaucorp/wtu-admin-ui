import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { HomeComponent } from './home/home.component';
import { WalletsModule } from './wallets/wallets.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { VouchersModule } from './vouchers/vouchers.module';
import { ErrorInterceptor } from './shared/error-interceptor';
import { InterceptorService } from './auth0/secure.interceptor';
import { AuthService } from './auth0/auth.service';
import { MaterialModule } from './shared/material.module';
import { MenuComponent } from './menu/menu.component';
import { AuthGuard } from './auth0/auth.guard';
import { CallbackComponent } from './callback/callback.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        MenuComponent,
        HomeComponent,
        CallbackComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        StoreModule.forRoot({}),
        StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
        EffectsModule.forRoot([]),

        DashboardModule,
        MaterialModule,
        WalletsModule,
        VouchersModule
    ],
    providers: [
        AuthGuard,
        AuthService,
        { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
