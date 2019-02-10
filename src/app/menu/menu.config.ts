import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { WalletsRoute } from '../wallets/wallets-router.config';
import { VouchersRoute } from '../vouchers/vouchers-router.config';
import { CallbackComponent } from '../callback/callback.component';
import { FulfillmentsComponent } from '../fulfillments/fulfillments.component';

export const mainroutes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
    },
    VouchersRoute,
    WalletsRoute,
    {
        path: 'fulfillments',
        component: FulfillmentsComponent,
    },
    {
        path: 'callback',
        component: CallbackComponent,
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full',
    },
];
