import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../../services/authentication.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  form: FormGroup;
  constructor(private authService: AuthenticationService, private router: Router) {}

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl('', [
        Validators.required,
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    });
  }

  submitForm() {
    this.authService.login(this.form.get('username').value, this.form.get('password').value)
      .subscribe(token => {
        if (token) {
          this.router.navigate(['/']);
        }
      });
  }

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

}
