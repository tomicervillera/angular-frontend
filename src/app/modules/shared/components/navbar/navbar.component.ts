import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '@app/services/login.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private loginSrv: LoginService, private router : Router) {}

  logged: boolean = false;
  subscription: Subscription = new Subscription();

  ngOnInit(): void {
    this.subscription = this.loginSrv.logged.subscribe((logged) => (this.logged = logged));
  }

  onLogout() {
    this.loginSrv.logout();
    this.loginSrv.changeLoggedStatus(false);
    this.router.navigate(['/']);
  }

  // onLogin() {
  //   console.log('Login');
  //   this.logged = true;
  //   window.localStorage.setItem('logged', 'true');
  // }

  // onLogout() {
  //   console.log('Logout');
  //   this.logged = false;
  //   window.localStorage.removeItem('logged');
  // }
}
