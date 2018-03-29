import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-lesson-detail',
  templateUrl: './lesson-detail.component.html',
  styleUrls: ['./lesson-detail.component.css']
})
export class LessonDetailComponent implements OnInit {

  type = '';
  javascript_items = [
    'Javascript Syntax',
    'Javascript Comments',
    'Javascript Datatypes',
    'Javascript Operations',
    'Javascript Functions',
    'Javascript Objects'
  ];
  css_items = [
    'CSS Syntax',
    'CSS Attributes',
    'CSS Colors',
    'CSS Classes',
    'CSS Media Selectors',
    'Advanced CSS Attributes'
  ];
  html_items = [
    'HTML Tags',
    'HTML div Tag',
    'HTML Lists',
    'HTML Images'
  ];
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        this.type = params.get('type');
      });
  }

  goToLessonDetailDetail(first: boolean) {
    if (first) {
      this.router.navigate(['/lessons', this.type, 'details']);
    }
  }

}
