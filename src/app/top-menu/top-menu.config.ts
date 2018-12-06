import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { VouchersComponent } from '../vouchers/vouchers.component';
import { WalletsComponent } from '../wallets/wallets.component';

export const routerConfig: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'vouchers',
        component: VouchersComponent
    },
    {
        path: 'wallets',
        component: WalletsComponent
    },
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