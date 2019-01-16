import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as auth0 from 'auth0-js';
import { environment } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material';
import { Observable, Observer } from 'rxjs';

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

  public handleAuthentication$(): Observable<string> {
    return Observable.create(
      (observer: Observer<string>) => {
        return this.auth0.parseHash((err, authResult) => {
          if (authResult && authResult.accessToken && authResult.idToken) {
            this.localLogin(authResult);
            observer.next(authResult.accessToken);
            observer.complete();
          } else if (err) {
            observer.error(`Full error: ${JSON.stringify(err)}.`);
            observer.complete();
          }
        });
      });
  }

  showError(error: string) {
    this.snackBar.open(error, '(close error)');
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

  // TODO silent authentication will not work without session cookies and right now the cookies are not sent with "checkSession"
  // because of cross domain cookies protection or something, coult try make it work on production after setting up a proper domain
  public renewTokens(): void {
    this.auth0.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.localLogin(authResult);
      } else if (err) {
        if (err.error === 'login_required') {
          console.log('Cannot renew Auth0 token. Probably because of missing cross domain cookies. Try to fix it in production');
        } else {
          this.showError(`Could not get a new token (reason: ${err.error}: ${err.error_description}).`);
          this.logout();
        }
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
    // Go to logout spinner which should redirect to login screen
    this.router.navigate(['/logout']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    return new Date().getTime() < this._expiresAt;
  }
}
