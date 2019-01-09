import { Component } from '@angular/core';
import { Auth0Service } from '../auth0/auth0.service';
// import { AuthGuard } from '../auth0/auth.guard';
import { Route } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  constructor(public auth: Auth0Service) { }

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
    // AuthGuard
  ]
};