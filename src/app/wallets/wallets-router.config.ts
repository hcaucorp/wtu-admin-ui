import { WalletsComponent } from './wallets.component';
import { WalletListComponent } from './wallet-list/wallet-list.component';
import { Route } from '@angular/router';
import { SideMenuComponent } from '../side-menu/side-menu.component';

export const walletsRoute: Route = {
    path: 'wallets',
    component: WalletsComponent,
    children: [
        {
            path: '',
            component: WalletListComponent
        },
        {
            path: '',
            outlet: 'sidemenu',
            component: SideMenuComponent
            // , data: [] // menu config?
        }
    ]
}