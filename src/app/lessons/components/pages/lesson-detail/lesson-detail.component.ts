import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LessonsService} from '../../../services/lessons.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-lesson-detail',
  templateUrl: './lesson-detail.component.html',
  styleUrls: ['./lesson-detail.component.css']
})
export class LessonDetailComponent implements OnInit {

  type = '';
  javascript_items = [];
  css_items = [];
  html_items = [];
  completed_lessons = [];
  constructor(private route: ActivatedRoute, private router: Router, private lessonsService: LessonsService) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        this.type = params.get('type');
      });

    this.completed_lessons = this.lessonsService.getCompletedLessons();

    this.lessonsService.getJavascriptLessons()
      .switchMap(lessons => {
        this.javascript_items = lessons;
        return this.lessonsService.getCssLessons();
      })
      .switchMap(lessons => {
        this.css_items = lessons;
        return this.lessonsService.getHtmlLessons();
      })
      .subscribe(lessons => {
        this.html_items = lessons;
      });

  }

  lessonCompleted(lesson: string): boolean {
    return this.completed_lessons.findIndex(item => item === lesson) > -1;
  }

  goToLessonDetailDetail(lesson: string) {
      this.router.navigate(['/lessons', this.type, lesson, 'details']);
  }

}
