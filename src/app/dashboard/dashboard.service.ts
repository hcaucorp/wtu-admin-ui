import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export enum HealthStatus {
    Offline,
    Online,
}

@Injectable()
export class DashboardService {

    private baseUrl = `/api`;

    constructor(private http: HttpClient) { }

    checkHealth(): Observable<HealthStatus> {
        return this.http.get<HealthStatus>(`${this.baseUrl}/health`, {observe: 'response'})
        .pipe(
            map(response => response.status === 200 ? HealthStatus.Online : HealthStatus.Offline)
        );
    }

    checkMetrics(name: string): Observable<string> {
        return this.http.get<string>(`${this.baseUrl}/metrics/${name}`);
    }
}
