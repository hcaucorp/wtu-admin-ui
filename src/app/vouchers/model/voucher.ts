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

    // flags is for presentation only, contains string representation of booleans above to help with filtering in the list/table
    flags: string;

    createdAt: number;
    expiresAt: number;
}
