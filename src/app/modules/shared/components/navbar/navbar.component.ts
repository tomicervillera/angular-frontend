import { Component, OnInit } from '@angular/core';
import { LoginService } from '@app/services/login.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private loginSrv : LoginService) {}

  logged: boolean = false;
  subscription: Subscription = new Subscription();

  ngOnInit(): void {
    this.subscription = this.loginSrv.logged.subscribe(logged => this.logged = logged)
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
