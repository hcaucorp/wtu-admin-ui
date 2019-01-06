import { Route } from '@angular/router';

import { VouchersComponent } from './vouchers.component';
import { VoucherListComponent } from './voucher-list/voucher-list.component';
import { VouchersGenerateComponent } from './vouchers-generate/vouchers-generate.component';

export const VouchersRoute: Route = {
    path: 'vouchers',
    component: VouchersComponent,
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
