import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";

@Injectable()
export class LessonsService {

  completedLessons = [];
  javascriptLessons = [
    'Javascript Syntax',
    'Javascript Comments',
    'Javascript Datatypes',
    'Javascript Operations',
    'Javascript Functions',
    'Javascript Objects'
  ];
  cssLessons = [
    'CSS Syntax',
    'CSS Attributes',
    'CSS Colors',
    'CSS Classes',
    'CSS Media Selectors',
    'Advanced CSS Attributes'
  ];
  htmlLessons = [
    'HTML Tags',
    'HTML div Tag',
    'HTML Lists',
    'HTML Images'
  ];
  constructor() { }

  getCompletedLessons() {
    return this.completedLessons;
  }

  addCompletedLesson(lesson: string) {
    this.completedLessons.push(lesson);
  }

  getJavascriptLessons(): Observable<string[]> {
    return Observable.of(this.javascriptLessons);
  }

  getHtmlLessons(): Observable<string[]> {
    return Observable.of(this.htmlLessons);
  }

  getCssLessons(): Observable<string[]> {
    return Observable.of(this.cssLessons);
  }

}
