import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-lesson-detail-detail',
  templateUrl: './lesson-detail-detail.component.html',
  styleUrls: ['./lesson-detail-detail.component.css']
})
export class LessonDetailDetailComponent implements OnInit {

  form: FormGroup;
  class = '';
  typeError = false;
  semicolonError = false;
  wrongVariableName = false;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        this.class = params.get('type');
      });
    this.form = new FormGroup({
      userCode: new FormControl('', [
        Validators.required,
      ])
    });
  }

  submitCode() {
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
    }

    console.log(this.typeError);
    console.log(this.semicolonError);
    console.log(this.wrongVariableName);
  }

  get userCode() {
    return this.form.get('userCode');
  }

}
