import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Fulfillment } from './fulfillment.model';

@Injectable()
export class FulfillmentsService {

    private baseUrl = `/api/fulfillments`;

    constructor(private http: HttpClient) { }

    findFulfillmentForOrder(orderId: number): Observable<Fulfillment> {
        return this.http.get<Fulfillment>(`${this.baseUrl}/${orderId}`);
    }
}
