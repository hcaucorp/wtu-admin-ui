import { Route } from '@angular/router';
import { VouchersComponent } from './vouchers.component';
import { VoucherListComponent } from './voucher-list/voucher-list.component';
import { VouchersGenerateComponent } from './vouchers-generate/vouchers-generate.component';
import { AuthGuard } from '../auth0/auth.guard';

export const VouchersRoute: Route = {
    path: 'vouchers',
    component: VouchersComponent,
    canActivate: [
        AuthGuard
    ],
    children: [
        {
            path: '',
            component: VoucherListComponent
        },
        {
            path: 'generate',
            component: VouchersGenerateComponent
        }
    ]
};
