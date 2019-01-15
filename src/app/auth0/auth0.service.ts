import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as auth0 from 'auth0-js';
import { environment } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material';
import { from, Observable, Observer } from 'rxjs';

@Injectable()
export class Auth0Service {

  private _idToken: string;
  private _accessToken: string;
  private _expiresAt: number;

  auth0 = new auth0.WebAuth({
    responseType: 'token id_token',
    clientID: environment.auth.CLIENT_ID,
    domain: environment.auth.CLIENT_DOMAIN,
    redirectUri: environment.auth.REDIRECT,
  });

  constructor(public router: Router, private snackBar: MatSnackBar) {
    this._idToken = '';
    this._accessToken = '';
    this._expiresAt = 0;
  }

  get accessToken(): string {
    return this._accessToken;
  }

  get idToken(): string {
    return this._idToken;
  }

  public login(): void {
    this.auth0.authorize();
  }

  // public handleAuthentication$(): Observable<string> {
  //   return Observable.create(
  //     (observer: Observer<string>) => {
  //       return this.auth0.parseHash((err, authResult) => {
  //         if (authResult && authResult.accessToken && authResult.idToken) {
  //           this.localLogin(authResult);
  //           observer.next(authResult.accessToken);
  //           observer.complete();
  //         }
  //         else if (err) {
  //           observer.error(`Full error: ${JSON.stringify(err)}.`);
  //           observer.complete();
  //         }
  //       });
  //     });
  // }
  public handleAuthentication(): any {
    return new Promise( (resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.localLogin(authResult);
          this.router.navigate(['/profile']);
          return resolve();
        } else if (err) {
          // this.router.navigate(['/']);
          this.showError(`Error: ${err.error}. Check the console for further details.`);
          return reject();
        }
        return reject();
      });
    })
  }

  showError(error: string) {
    this.snackBar.open(error, "(close error)");
  }

  private localLogin(authResult): void {
    // Set isLoggedIn flag in localStorage
    localStorage.setItem('isLoggedIn', 'true');
    // Set the time that the access token will expire at
    const expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();
    this._accessToken = authResult.accessToken;
    this._idToken = authResult.idToken;
    this._expiresAt = expiresAt;
  }

  public renewTokens(): void {
    this.auth0.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.localLogin(authResult);
      } else if (err) {
        this.showError(`Could not get a new token (${err.error}: ${err.errorDescription}).`);
        this.logout();
      }
    });
  }

  public logout(): void {
    // Remove tokens and expiry time
    this._accessToken = '';
    this._idToken = '';
    this._expiresAt = 0;
    // Remove isLoggedIn flag from localStorage
    localStorage.removeItem('isLoggedIn');
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    return new Date().getTime() < this._expiresAt;
  }
}
