import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { walletsRoute } from '../wallets/wallets-router.config';
import { vouchersRoute } from '../vouchers/vouchers-router.config';

export const topMenuRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    vouchersRoute,
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
