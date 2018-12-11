import { WalletsComponent } from './wallets.component';
import { WalletListComponent } from './wallet-list/wallet-list.component';
import { Route } from '@angular/router';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { WalletCreateComponent } from './wallet-create/wallet-create.component';

export const walletsRoute: Route = {
    path: 'wallets',
    component: WalletsComponent,
    children: [
        {
            path: '',
            component: WalletListComponent
        },
        {
            path: 'generate',
            component: WalletCreateComponent
        },
        {
            path: '',
            outlet: 'sidemenu',
            component: SideMenuComponent
            // , data: [] // menu config?
        }
    ]
}