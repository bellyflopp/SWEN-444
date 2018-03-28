import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../../accounts/services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: any = null;
  isLoggedIn = false;
  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn();
    if (this.authService.isLoggedIn()) {
      this.user = this.authService.currentUser();
    }
  }

  goToLoginPage() {
    this.router.navigate(['/login']);
  }

  goToRegisterPage() {
    this.router.navigate(['/register']);
  }

  logoutUser() {
    this.authService.logout();
    this.user = null;
    this.isLoggedIn = false;
  }
}
