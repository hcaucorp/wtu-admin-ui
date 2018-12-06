import { WalletsComponent } from './wallets.component';

export const walletsRouterConfig = {
    path: 'courses',
    component: WalletsComponent,
    children: [
        {
            path: '',
            component: WalletsComponent
        }
    ]
}