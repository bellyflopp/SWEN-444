import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {LessonsService} from "../../../services/lessons.service";

@Component({
  selector: 'app-lesson-detail-detail',
  templateUrl: './lesson-detail-detail.component.html',
  styleUrls: ['./lesson-detail-detail.component.css']
})
export class LessonDetailDetailComponent implements OnInit {

  form: FormGroup;
  class = '';
  lesson = '';
  hintUsed = false;
  constructor(private route: ActivatedRoute, private router: Router, private lessonService: LessonsService) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        this.class = params.get('type');
        this.lesson = params.get('lesson');
      });
    this.form = new FormGroup({
      userCode: new FormControl('', [
        Validators.required,
      ])
    });
  }

  submitJavascriptCode() {
    const startsVar = this.form.get('userCode').value.startsWith('var');
    const endsColon = this.form.get('userCode').value.endsWith(';');
    const includesTemp = this.form.get('userCode').value.includes('temp');
    const includesEquals = this.form.get('userCode').value.includes('=');

    if (!startsVar) {
      this.form.get('userCode').setErrors({'startsWith': true});
      return;
    } else if (!endsColon) {
      this.form.get('userCode').setErrors({'endsWith': true});
      return;
    } else if (!includesTemp) {
      this.form.get('userCode').setErrors({'variableName': true});
      return;
    } else if (!includesEquals) {
      this.form.get('userCode').setErrors({'equals': true});
      return;
    } else {
      this.lessonService.addCompletedLesson(this.lesson);
      this.router.navigate(['/lessons', this.class, 'complete']);
    }
  }

  submitCssCode() {
    const startsPeriod = this.form.get('userCode').value.startsWith('.');
    const curlyBraces = this.form.get('userCode').value.includes('{') && this.form.get('userCode').value.includes('}');
    const myClass = this.form.get('userCode').value.includes('myClass');
    const includesBlue = this.form.get('userCode').value.includes('blue');

    if (!startsPeriod) {
      this.form.get('userCode').setErrors({'startsWith': true});
      return;
    } else if (!curlyBraces) {
      this.form.get('userCode').setErrors({'curlyBraces': true});
      return;
    } else if (!myClass) {
      this.form.get('userCode').setErrors({'className': true});
      return;
    } else if (!includesBlue) {
      this.form.get('userCode').setErrors({'blue': true});
      return;
    } else {
      this.lessonService.addCompletedLesson(this.lesson);
      this.router.navigate(['/lessons', this.class, 'complete']);
    }
  }

  submitHtmlCode() {
    const startsTag = this.form.get('userCode').value.startsWith('<div>');
    const endTag = this.form.get('userCode').value.endsWith('</div>');
    const helloWorld = this.form.get('userCode').value.replace('<div>', '').replace('</div>', '') === 'Hello World';

    if (!startsTag) {
      this.form.get('userCode').setErrors({'startsTag': true});
      return;
    } else if (!endTag) {
      this.form.get('userCode').setErrors({'endTag': true});
      return;
    } else if (!helloWorld) {
      this.form.get('userCode').setErrors({'helloWorld': true});
      return;
    } else {
      this.lessonService.addCompletedLesson(this.lesson);
      this.router.navigate(['/lessons', this.class, 'complete']);
    }
  }


  useHint() {
    this.hintUsed = true;
  }

  get userCode() {
    return this.form.get('userCode');
  }

}
