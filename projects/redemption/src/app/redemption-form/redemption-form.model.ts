export interface RedemptionResponse {
    trackingUrls: string[];
    transactionId: string;
}

export interface RedemptionRequest {
    destinationAddress: string;
    voucherCode: string;
}
