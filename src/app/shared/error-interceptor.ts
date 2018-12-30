import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { catchError } from 'rxjs/internal/operators';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs/index';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private snackBar: MatSnackBar) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next
      .handle(request)
      .pipe(
        catchError((e: HttpErrorResponse) => {
          this.snackBar.open(e.error.message, "(close error)");
          return throwError(e);
        })
      );
  }
}

const exampleMessage = {
  "headers": { "normalizedNames": {}, "lazyUpdate": null },
  "status": 400, "statusText": "Bad Request", "url": "http://localhost:4200/api/wallets",
  "ok": false, "name": "HttpErrorResponse",
  "message": "Http failure response for http://localhost:4200/api/wallets: 400 Bad Request",
  "error": {
    "timestamp": "2018-12-30T13:31:56.018+0000", 
    "status": 400, 
    "error": "Bad Request",
    "message": "BTC wallet already exists. Currently we support only single wallet per currency", 
    "path": "/wallets"
  }
};
