import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { WalletsRoute } from '../wallets/wallets-router.config';
import { VouchersRoute } from '../vouchers/vouchers-router.config';
import { CallbackComponent } from '../auth0/callback.component';
import { LogoutComponent } from '../logout/logout.component';

export const mainroutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    VouchersRoute,
    WalletsRoute,
    {
        path: 'callback',
        component: CallbackComponent
    },
    {
        path: 'logout',
        component: LogoutComponent
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
    },
];
