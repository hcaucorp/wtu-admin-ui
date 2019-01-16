import { Component, OnInit } from '@angular/core';
import { Auth0Service } from './auth0.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-callback',
  template: `<mat-spinner></mat-spinner>`,
  styles: []
})
export class CallbackComponent implements OnInit {

  constructor(public router: Router, public auth: Auth0Service, private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.auth.handleAuthentication$()
      .subscribe(
        () => this.router.navigate(['/home']),
        error => {
          this.snackBar.open(JSON.stringify(error), '(close error)');
          if (!this.auth.isAuthenticated()) {
            this.auth.login();
          }
        });
  }
}
