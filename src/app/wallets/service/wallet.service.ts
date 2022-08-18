import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GenerateWalletPayload } from '../actions/wallet.actions';
import { WalletReport } from '../model/wallet';

@Injectable()
export class WalletService {

  private baseUrl = `/api/wallets`;

  constructor(private http: HttpClient) { }

  generateWallet(payload: GenerateWalletPayload): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, payload.currency);
  }

  getAll(): Observable<Array<WalletReport>> {
    return this.http.get<Array<WalletReport>>(this.baseUrl);
  }
}
