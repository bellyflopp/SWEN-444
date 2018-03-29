import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/pages/login/login.component';
import {RegisterComponent} from './components/pages/register/register.component';
import {TeacherViewComponent} from './components/pages/teacher-view/teacher-view.component';
import {ClassDetailComponent} from './components/pages/class-detail/class-detail.component';
import {StudentDetailComponent} from './components/pages/student-detail/student-detail.component';


const accountsRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'teacher-console',
    component: TeacherViewComponent
  },
  {
    path: 'teacher-console/:class',
    component: ClassDetailComponent
  },
  {
    path: 'student/:name',
    component: StudentDetailComponent
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
