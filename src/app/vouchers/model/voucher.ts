export class Voucher {

    amount: number;
    code: string;
    currency: string;
    id: number;
    walletId: number;
    sku: string;

    published: boolean;
    redeemed: boolean;
    sold: boolean;

    createdAt: number;
    expiresAt: number;
}
