import { Component, OnInit } from '@angular/core';
import { Auth0Service } from './auth0.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-callback',
  template: `<mat-spinner></mat-spinner>`,
  styles: []
})
export class CallbackComponent  implements OnInit {

  constructor(public auth: Auth0Service, private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.auth.handleAuthentication()
      .catch(error => {
        this.snackBar.open(JSON.stringify(error), "(close error)");
        if (!this.auth.isAuthenticated() ) {
          this.auth.login();
        }
      })
  }
}
