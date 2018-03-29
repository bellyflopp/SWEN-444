import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-lesson-complete',
  templateUrl: './lesson-complete.component.html',
  styleUrls: ['./lesson-complete.component.css']
})
export class LessonCompleteComponent implements OnInit {

  class = '';
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        this.class = params.get('type');
      });
  }

  returnToLessonList() {
    this.router.navigate(['/lessons', this.class]);
  }

}
