import { Component } from '@angular/core';
import { AuthService } from '../auth0/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {
  constructor(public auth: AuthService) {
    if (!this.auth.isLoggedIn) {
      this.auth.login();
    }
  }
}
