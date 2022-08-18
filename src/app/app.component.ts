import { Component } from '@angular/core';
import { AuthService } from './auth0/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  constructor(public auth: AuthService) {}
}
