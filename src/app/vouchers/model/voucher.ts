export class Voucher {

    amount: number;
    code: string;
    currency: string;
    id: number;

    published: boolean;
    redeemed: boolean;

    createdAt: Date;
    expiresAt: Date;
}
