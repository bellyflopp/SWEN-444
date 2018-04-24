import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

import { LessonsRoutingModule } from './lessons-routing.module';
import { LessonListComponent } from './components/pages/lesson-list/lesson-list.component';
import {BaseModule} from '../base/base.module';
import { LessonDetailComponent } from './components/pages/lesson-detail/lesson-detail.component';
import { LessonDetailDetailComponent } from './components/pages/lesson-detail-detail/lesson-detail-detail.component';
import { LessonCompleteComponent } from './components/pages/lesson-complete/lesson-complete.component';
import {LessonsService} from "./services/lessons.service";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatButtonModule,
    MatTooltipModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    BaseModule,
    LessonsRoutingModule,
  ],
  declarations: [
    LessonListComponent,
    LessonDetailComponent,
    LessonDetailDetailComponent,
    LessonCompleteComponent
  ],
  providers: [
    LessonsService
  ]
})
export class LessonsModule { }
