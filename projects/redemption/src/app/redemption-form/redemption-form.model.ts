export interface RedemptionResponse {
    trackingUrls: string[];
    transactionId: string;
}

export interface RedemptionRequest {
    destinationAddress: string;
    voucherCode: string;
}

export interface VoucherInfoRequest {
    voucherCode: string;
}

export interface VoucherInfoResponse {
    status: string;
    expiresAt: number;
}

export interface RedemptionFormState {
    destinationAddress: string;
    redemptionStatus: 'pending' | 'success' | 'error' | 'new';
    redemptionRequest?: RedemptionRequest;
    redemptionResponse?: RedemptionResponse;
    voucherCode: string;
    voucherInfo?: VoucherInfoResponse;
    voucherInfoError: boolean;
}
