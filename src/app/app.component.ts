import { Component } from '@angular/core';
import { Auth0Service } from './auth0/auth0.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  constructor(public auth: Auth0Service) {}
}
