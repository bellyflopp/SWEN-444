import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-class-detail',
  templateUrl: './class-detail.component.html',
  styleUrls: ['./class-detail.component.css']
})
export class ClassDetailComponent implements OnInit {
  className = '';
  students = [
    'Billy',
    'Kimmy',
    'Jimmy',
    'Timmy',
    'Lilly'
  ];
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        this.className = params.get('class');
      });
  }

  goToStudentDetail(studentName: string) {
    this.router.navigate(['/student', studentName]);
  }

}
