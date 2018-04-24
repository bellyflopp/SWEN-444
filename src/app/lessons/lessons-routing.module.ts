import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LessonListComponent} from './components/pages/lesson-list/lesson-list.component';
import {LessonDetailComponent} from './components/pages/lesson-detail/lesson-detail.component';
import {LessonDetailDetailComponent} from './components/pages/lesson-detail-detail/lesson-detail-detail.component';
import {LessonCompleteComponent} from './components/pages/lesson-complete/lesson-complete.component';
import { AuthguardGuard } from '../accounts/guards/authguard.guard';

const lessonsRoutes: Routes = [
  {
    path: '',
    component: LessonListComponent,
    canActivate: [AuthguardGuard]
  },
  {
    path: ':type',
    component: LessonDetailComponent,
    canActivate: [AuthguardGuard]
  },
  {
    path: ':type/:lesson/details',
    component: LessonDetailDetailComponent,
    canActivate: [AuthguardGuard]
  },
  {
    path: ':type/complete',
    component: LessonCompleteComponent,
    canActivate: [AuthguardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(lessonsRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class LessonsRoutingModule { }
