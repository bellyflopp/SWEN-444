import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatListModule} from '@angular/material/list';

import { LessonsRoutingModule } from './lessons-routing.module';
import { LessonListComponent } from './components/pages/lesson-list/lesson-list.component';
import {BaseModule} from '../base/base.module';
import { LessonDetailComponent } from './components/pages/lesson-detail/lesson-detail.component';

@NgModule({
  imports: [
    CommonModule,
    MatGridListModule,
    MatButtonModule,
    MatTooltipModule,
    MatListModule,
    BaseModule,
    LessonsRoutingModule,
  ],
  declarations: [
    LessonListComponent,
    LessonDetailComponent
  ]
})
export class LessonsModule { }
