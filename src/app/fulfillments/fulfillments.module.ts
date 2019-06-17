import { FulfillmentsComponent } from './fulfillments.component';
import { FulfillmentsService } from './fulfillments.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { FulfillmentsEffects } from './fulfillments.effects';
import { fulfillmentsReducer } from './fulfillments.reducer';
import { MaterialModule } from '../material.module';

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
