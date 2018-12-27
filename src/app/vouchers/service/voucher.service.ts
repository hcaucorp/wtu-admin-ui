import { GenerateVouchersSpec, PublishVouchersAction, DeleteVouchersPayload } from '../actions/voucher.actions';
import { Voucher } from '../model/voucher';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class VoucherService {

    private baseUrl = `/api/vouchers`;

    constructor(private http: HttpClient) { }

    generateVouchers(spec: GenerateVouchersSpec): Observable<any> {
        return this.http.post<any>(`${this.baseUrl}`, spec);
    }

    getAll(): Observable<Voucher[]> {
        return this.http.get<Voucher[]>(this.baseUrl);
    }

    publishVouchers(payload: PublishVouchersAction): Observable<any> {
        return this.http.post<any>(this.baseUrl, payload);
    }
}
