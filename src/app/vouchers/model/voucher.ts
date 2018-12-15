export class Voucher {

    amount: number;
    code: string;
    currency: string;
    id: number;
    walletId: number;

    published: boolean;
    redeemed: boolean;
    sold: boolean;

    createdAt: Date;
    expiresAt: Date;
}
