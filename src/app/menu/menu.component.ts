import { Component } from '@angular/core';
import { AuthService } from '../auth0/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent {

  constructor(public router: Router, public auth: AuthService) { }

  logout() {
    this.auth.logout();
  }
}
