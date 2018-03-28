import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/pages/login/login.component';
import {RegisterComponent} from './components/pages/register/register.component';


const accountsRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      accountsRoutes,
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AccountsRoutingModule { }
