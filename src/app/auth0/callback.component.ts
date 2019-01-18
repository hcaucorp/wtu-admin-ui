import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-callback',
  template: `<mat-spinner></mat-spinner>`,
  styles: []
})
export class CallbackComponent implements OnInit {

  constructor(public auth: AuthService) {
  }

  ngOnInit(): void {
    this.auth.handleLoginCallback();
  }
}
