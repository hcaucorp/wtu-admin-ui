// auth.service.ts
import { Injectable } from '@angular/core';
import * as auth0 from 'auth0-js';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

(window as any).global = window;

@Injectable()
export class AuthService {
  // Create Auth web auth instance
  auth0 = new auth0.WebAuth({
    clientID: environment.auth.CLIENT_ID,
    domain: environment.auth.CLIENT_DOMAIN,
    responseType: 'token',
    redirectUri: environment.auth.REDIRECT,
    audience: environment.auth.AUDIENCE,
    scope: environment.auth.SCOPE
  });
  // Store authentication data
  expiresAt: number;
  userProfile: any;
  accessToken: string;
  authenticated: boolean;

  constructor(private router: Router, private snackBar: MatSnackBar) {
    this.getAccessToken();
  }

  login() {
    // Auth authorize request
    this.auth0.authorize();
  }

  handleLoginCallback() {
    // When Auth hash parsed, get profile
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken) {
        window.location.hash = '';
        this.getUserInfo(authResult, () => {
          this.router.navigate(['/']);
        });
      } else if (err) {
        this.snackBar.open(JSON.stringify(err), 'Close')
          .afterDismissed()
          .subscribe(() => this.router.navigate(['/']));
      }
    });
  }

  getAccessToken() {
    this.auth0.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken) {
        this.getUserInfo(authResult, () => { });
      }
    });
  }

  getUserInfo(authResult, callback: Function) {
    // Use access token to retrieve user's profile and set session
    this.auth0.client.userInfo(authResult.accessToken, (err, profile) => {
      if (profile) {
        this._setSession(authResult, profile);
      }
      callback();
    });
  }

  private _setSession(authResult, profile) {
    // Save authentication data and update login status subject
    this.expiresAt = authResult.expiresIn * 1000 + Date.now();
    this.accessToken = authResult.accessToken;
    this.userProfile = profile;
    this.authenticated = true;
  }

  logout() {
    // Log out of Auth session
    // Ensure that returnTo URL is specified in Auth
    // Application settings for Allowed Logout URLs
    this.auth0.logout({
      returnTo: environment.auth.LOGOUT_URL,
      clientID: environment.auth.CLIENT_ID
    });
  }

  get isLoggedIn(): boolean {
    // Check if current date is before token
    // expiration and user is signed in locally
    return Date.now() < this.expiresAt && this.authenticated;
  }

}
