import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import {AccountsRoutingModule} from './accounts-routing.module';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    AccountsRoutingModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    LoginFormComponent
  ],
})
export class AccountsModule { }
