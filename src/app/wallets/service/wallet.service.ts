import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Wallet } from '../model/wallet';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  private baseUrl = `/api/wallets`;

  constructor(private http: HttpClient) { }

  generateWallet(password: string, description: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/generate`, {
      password: password,
      description: description
    });
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`, { responseType: 'json' });
  }

  getAll(): Observable<Array<Wallet>> {
    console.log(`Loading wallets from: ${this.baseUrl}`);
    return this.http.get<Array<Wallet>>(this.baseUrl);
  }
}
