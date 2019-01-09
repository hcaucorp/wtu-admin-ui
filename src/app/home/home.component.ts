import { Component } from '@angular/core';
import { Auth0Service } from '../auth0/auth0.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {
  
  constructor(public auth: Auth0Service) {}
}
