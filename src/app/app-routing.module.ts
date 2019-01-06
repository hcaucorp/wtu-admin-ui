import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { mainroutes } from './top-menu/top-menu.config';

const routes: Routes = mainroutes;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
