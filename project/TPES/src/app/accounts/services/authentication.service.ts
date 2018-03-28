import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';
import 'rxjs/add/observable/of';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthenticationService {

  studentJWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InN0dWRlbnQiLCJzdGFmZiI6ZmFsc2UsInBhcmVudCI6ZmFsc2V9.6lbyvi0HpX4t47ySELR5atVGr-CdINjVAL1x1hoknL8';
  parentJWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InBhcmVudCIsInN0YWZmIjpmYWxzZSwicGFyZW50Ijp0cnVlfQ.2sD-Wu7R9T3o9t_4yTt3xb3ZX00yp1TmZPNuDNmbELk';
  staffJWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InN0YWZmIiwic3RhZmYiOnRydWUsInBhcmVudCI6dHJ1ZX0.jHlxKpS5PNshSfU9HUhxmBrIgu8DRsohbPdAkEr4OYA';
  constructor(private http: HttpClient, private helper: JwtHelperService) { }

  login(username: string, password: string) {
    if (username === 'student' && password === 'password') {
      localStorage.setItem('token', this.studentJWT);
      return Observable.of(this.studentJWT);
    } else if (username === 'parent' && password === 'password') {
      localStorage.setItem('token', this.parentJWT);
      return Observable.of(this.parentJWT);
    } else if (username === 'admin' && password === 'admin') {
      localStorage.setItem('token', this.staffJWT);
      return Observable.of(this.staffJWT);
    } else {
      return Observable.of(null);
    }
  }

  isLoggedIn() {
    const token = localStorage.getItem('token');
    if (token) {
      return !this.helper.isTokenExpired(token);
    }
  }

  currentUser() {
    return this.helper.decodeToken();
  }

  logout() {
    localStorage.removeItem('token');
    return Observable.of(true);
  }

  getJSONHeaders() {
    return {headers: new HttpHeaders().set('Content-Type', 'application/json')};
  }

}
