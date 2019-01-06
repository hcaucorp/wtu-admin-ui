import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth0/auth.service';
import { AuthGuard } from '../auth0/auth.guard';
import { Route } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

  makeProfileArray(obj): string[] {
    const keyPropArray = [];
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        keyPropArray.push(key + ': ' + JSON.stringify(obj[key]));
      }
    }
    return keyPropArray;
  }
}

export const ProfileComponentRoute: Route =
{
  path: 'profile',
  component: ProfileComponent,
  canActivate: [
    AuthGuard
  ]
};