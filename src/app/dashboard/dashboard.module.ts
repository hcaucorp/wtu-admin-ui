import { reducer } from './dashboard.reducer';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { DashboardEffects } from './dashboard.effects';
import { DashboardService } from './dashboard.service';
import { MaterialModule } from '../material.module';

@NgModule({
    imports: [
        CommonModule,
        EffectsModule.forFeature([DashboardEffects]),
        HttpClientModule,
        MaterialModule,
        StoreModule.forFeature(`dashboard`, reducer),
    ],
    providers: [
        DashboardService
    ]
})
export class DashboardModule {
}
