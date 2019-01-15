import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Auth0Service } from './auth0.service';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor(private auth: Auth0Service) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const tokenReq = req.clone({
      setHeaders: { Authorization: `Bearer ${this.auth.accessToken}` }
    });
    return next.handle(tokenReq);
  }
}
