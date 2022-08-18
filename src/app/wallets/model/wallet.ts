export interface Wallet {
    id: number;
    address: string;
    balance: number;
    currency: string;
    createdAt: Date;
    mnemonic: string;
}

export enum WalletStatus {
    NEW = "NEW",
    RUNNING = "RUNNING",
    STARTING = "STARTING",
}

export interface WalletReport {
    wallet: Wallet;
    requiredBalance: number;
    status: WalletStatus;
}
