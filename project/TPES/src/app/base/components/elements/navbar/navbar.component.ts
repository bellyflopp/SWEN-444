import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../../accounts/services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn = false;
  user = {
    username: 'Testing'
  };
  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  goToLoginPage() {
    this.router.navigate(['/login']);
  }

  goToRegisterPage() {
    this.router.navigate(['register']);
  }

}
