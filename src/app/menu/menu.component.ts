import { Component } from '@angular/core';
import { Auth0Service } from '../auth0/auth0.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent {

  constructor(public router: Router, public auth: Auth0Service) { }

  logout() {
    this.auth.logout();
  }
}
