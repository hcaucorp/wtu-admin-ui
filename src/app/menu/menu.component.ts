import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth0Service } from '../auth0/auth0.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {

  constructor(public router: Router, public auth: Auth0Service) { }

  ngOnInit() {
  }

  logout() {
    this.auth.logout();
  }
}
