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
          this.snackBar.open(e.error.message || e.message || JSON.stringify(e), 'Close');
          return throwError(e);
        })
      );
  }
}
