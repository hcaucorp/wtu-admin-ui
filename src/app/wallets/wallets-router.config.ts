import { WalletsComponent } from './wallets.component';
import { WalletListComponent } from './wallet-list/wallet-list.component';
import { Route } from '@angular/router';
import { WalletCreateComponent } from './wallet-create/wallet-create.component';

export const WalletsRoute: Route = {
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
        }
    ]
};
