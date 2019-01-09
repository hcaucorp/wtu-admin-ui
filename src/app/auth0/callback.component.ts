import { Component, OnInit } from '@angular/core';
import { Auth0Service } from './auth0.service';

@Component({
  selector: 'app-callback',
  template: `<div>Loading...</div>`,
  styles: []
})
export class CallbackComponent implements OnInit {

  constructor(private auth: Auth0Service) { }

  ngOnInit() {
    this.auth.handleLoginCallback();
  }

}
