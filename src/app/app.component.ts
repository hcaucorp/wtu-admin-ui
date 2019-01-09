import { Component, OnInit } from '@angular/core';
import { Auth0Service } from './auth0/auth0.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  title = 'Wallet Top Up';

  constructor(public auth: Auth0Service) {
    auth.handleAuthentication();
  }
  ngOnInit(): void {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      this.auth.renewTokens();
    } else {
      this.auth.login();
    }
  }
}
