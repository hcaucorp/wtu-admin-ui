import { GenerateVouchersSpec, ActivatePaperVouchersSpec } from '../actions/voucher.actions';
import { Voucher } from '../model/voucher';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class VoucherService {

    private baseUrl = `/api/vouchers`;

    constructor(private http: HttpClient) { }

    activatePaperVouchers(payload: ActivatePaperVouchersSpec): Observable<any> {
        throw new Error('Method not implemented.');
    }

    generateVouchers(spec: GenerateVouchersSpec): Observable<any> {
        return this.http.post<any>(`${this.baseUrl}`, spec);
    }

    getAll(): Observable<Voucher[]> {
        return this.http.get<Voucher[]>(this.baseUrl);
    }

    deleteVouchers(sku: string): Observable<any> {
        return this.http.delete<any>(`${this.baseUrl}/${sku}`);
    }

    publishVouchers(sku: string): Observable<any> {
        return this.http.post<any>(`${this.baseUrl}/${sku}/publish`, '');
    }

    unpublishVouchers(sku: string): Observable<any> {
        return this.http.post<any>(`${this.baseUrl}/${sku}/unpublish`, '');
    }
}
