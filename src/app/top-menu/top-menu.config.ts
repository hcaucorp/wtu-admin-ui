import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { WalletsRoute } from '../wallets/wallets-router.config';
import { VouchersRoute } from '../vouchers/vouchers-router.config';
import { ProfileComponentRoute } from '../profile/profile.component';
import { CallbackComponent } from '../auth0/callback.component';

export const mainroutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    VouchersRoute,
    WalletsRoute,
    ProfileComponentRoute,
    {
        path: 'callback',
        component: CallbackComponent
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
