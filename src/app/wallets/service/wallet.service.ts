import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Wallet } from '../model/wallet';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  private baseUrl = `${environment.server.baseUrl}/wallets`;

  constructor(private http: HttpClient) { }

  getWallet(id: number): Observable<Wallet> {
    return this.http.get<Wallet>(`${this.baseUrl}/${id}`);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`, { responseType: 'json' });
  }

  getAll(): Observable<Array<Wallet>> {
    console.log(`Loading wallets from: ${this.baseUrl}`);
    return this.http.get<Array<Wallet>>(this.baseUrl);
  }
}
