import { FulfillmentsComponent } from './fulfillments.component';
import { FulfillmentsService } from './fulfillments.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'projects/redemption/src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { FulfillmentsEffects } from './fulfillments.effects';
import { fulfillmentsReducer } from './fulfillments.reducer';

@NgModule({
    declarations: [
        FulfillmentsComponent
    ],
    imports: [
        CommonModule,
        EffectsModule.forFeature([FulfillmentsEffects]),
        HttpClientModule,
        MaterialModule,
        ReactiveFormsModule,
        StoreModule.forFeature(`fulfillments`, fulfillmentsReducer),
    ],
    providers: [
        FulfillmentsService
    ]
})
export class FulfillmentsModule { }
