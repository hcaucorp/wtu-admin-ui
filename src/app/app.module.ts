import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserAnimationsModule,
        AppRoutingModule,
        StoreModule.forRoot({}),
        StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
        StoreDevtoolsModule.instrument({name: 'NgRx DevTools', logOnly: environment.production}),
        EffectsModule.forRoot([]),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
