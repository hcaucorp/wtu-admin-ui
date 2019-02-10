import { Voucher } from '../vouchers/model/voucher';

export class Fulfillment {
    orderId: number;
    vouchers: Voucher[];
    completedAt: Date;
}
