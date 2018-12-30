import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Wallet } from '../model/wallet';
import { GenerateWalletPayload } from '../actions/wallet.actions';

@Injectable()
export class WalletService {

  private baseUrl = `/api/wallets`;

  constructor(private http: HttpClient) { }

  generateWallet(payload: GenerateWalletPayload): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, payload.currency);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`, { responseType: 'json' });
  }

  getAll(): Observable<Array<Wallet>> {
    return this.http.get<Array<Wallet>>(this.baseUrl);
  }
}
