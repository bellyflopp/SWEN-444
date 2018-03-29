import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LessonListComponent} from './components/pages/lesson-list/lesson-list.component';
import {LessonDetailComponent} from './components/pages/lesson-detail/lesson-detail.component';
import {LessonDetailDetailComponent} from './components/pages/lesson-detail-detail/lesson-detail-detail.component';

const lessonsRoutes: Routes = [
  {
    path: '',
    component: LessonListComponent
  },
  {
    path: ':type',
    component: LessonDetailComponent
  },
  {
    path: ':type/details',
    component: LessonDetailDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(lessonsRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class LessonsRoutingModule { }
