import { Component, OnInit } from '@angular/core';
import { Auth0Service } from '../auth0/auth0.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  constructor(public auth: Auth0Service) {
  }
  
  ngOnInit(): void {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      this.auth.renewTokens();
    } else {
      this.auth.login();
    }
  }
}
