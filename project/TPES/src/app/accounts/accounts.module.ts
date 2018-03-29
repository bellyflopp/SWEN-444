import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';

import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import {AccountsRoutingModule} from './accounts-routing.module';
import { TeacherViewComponent } from './components/pages/teacher-view/teacher-view.component';
import {BaseModule} from '../base/base.module';
import { ClassDetailComponent } from './components/pages/class-detail/class-detail.component';
import { StudentDetailComponent } from './components/pages/student-detail/student-detail.component';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  imports: [
    CommonModule,
    BaseModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatListModule,
    MatCardModule,
    MatSelectModule,
    AccountsRoutingModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    LoginFormComponent,
    TeacherViewComponent,
    ClassDetailComponent,
    StudentDetailComponent
  ],
})
export class AccountsModule { }
