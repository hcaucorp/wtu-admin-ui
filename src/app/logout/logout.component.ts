import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth0Service } from '../auth0/auth0.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.less']
})
export class LogoutComponent implements OnInit {

  constructor(public router: Router, public auth: Auth0Service) { }

  ngOnInit() {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      this.router.navigate(['/home']);
    } else {
      this.auth.login();
    }
  }
}
