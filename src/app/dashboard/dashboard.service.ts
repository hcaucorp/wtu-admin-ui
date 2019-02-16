import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface HealthStatus {
    status: string;
}

@Injectable()
export class DashboardService {

    private baseUrl = `/api`;

    constructor(private http: HttpClient) { }

    checkHealth(): Observable<HealthStatus> {
        return this.http.get<HealthStatus>(`${this.baseUrl}/health`);
    }
}
