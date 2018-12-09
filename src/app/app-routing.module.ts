import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { topMenuRoutes } from './top-menu/top-menu.config';
import { walletsRoute } from './wallets/wallets-router.config';

const routes: Routes = topMenuRoutes;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
