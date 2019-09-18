export interface Wallet {
    id: number;
    address: string;
    balance: number;
    currency: string;
    createdAt: Date;
    mnemonic: string;
}

export interface WalletReport {
    wallet: Wallet;
    requiredBalance: number;
}
