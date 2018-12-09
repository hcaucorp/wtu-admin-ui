import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { VouchersComponent } from '../vouchers/vouchers.component';
import { WalletsComponent } from '../wallets/wallets.component';
import { walletsRoute } from '../wallets/wallets-router.config';

export const topMenuRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'vouchers',
        component: VouchersComponent
    },
    walletsRoute,
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];