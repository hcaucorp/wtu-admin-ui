import { DashboardComponent } from './dashboard.component';
import { reducer } from './dashboard.reducer';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'projects/redemption/src/app/material.module';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { ShopifyService } from './shopify.service';
import { DashboardEffects } from './dashboard.effects';

@NgModule({
    imports: [
        CommonModule,
        EffectsModule.forFeature([DashboardEffects]),
        HttpClientModule,
        MaterialModule,
        StoreModule.forFeature(`dashboard`, reducer),
    ],
    providers: [
        ShopifyService
    ]
})
export class DashboardModule {
}
