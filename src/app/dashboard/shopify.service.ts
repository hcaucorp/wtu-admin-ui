import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ShopifyService {

    private baseUrl = `/api/shopify`;

    constructor(private http: HttpClient) { }

    loadUnfulfilledOrdersCount(): Observable<number> {
        return this.http.get<number>(`${this.baseUrl}/orders/unfulfilled/count`);
    }

    fulfillAllUnfulfilledOrders(): Observable<any> {
        return this.http.post<any>(`${this.baseUrl}/orders/fulfill`, {});
    }
}
