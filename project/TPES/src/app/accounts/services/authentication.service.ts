import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient, private helper: JwtHelperService) { }

  login(username: string, password: string) {
    return this.http.post(
      `${environment.base_url}/login/`,
      JSON.stringify({username: username, password: password}),
      this.getJSONHeaders()
    );
  }

  isLoggedIn() {
    return this.helper.decodeToken() !== null && !this.helper.isTokenExpired();
  }

  getJSONHeaders() {
    return {headers: new HttpHeaders().set('Content-Type', 'application/json')};
  }

}
