import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  name = '';
  class = 'javascript';
  javascript_grades = [
    {name: 'Javascript Syntax', grade: 98},
    {name: 'Javascript Variables', grade: 98},
    {name: 'Javascript Operations', grade: 70},
    {name: 'Javascript Functions', grade: 56},
  ];
  css_grades = [
    {name: 'CSS Attributes', grade: 98},
    {name: 'CSS Selectors', grade: 70},
    {name: 'CSS Colors', grade: 56},
  ];
  html_grades = [
    {name: 'HTML Tags', grade: 58},
    {name: 'HTML div Tag', grade: 62},
    {name: 'HTML Lists', grade: 57},
    {name: 'HTML Images', grade: 56},
  ];
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        this.name = params.get('name');
      });
  }

  changeClassFilter(className: string) {
    this.class = className;
}

}
