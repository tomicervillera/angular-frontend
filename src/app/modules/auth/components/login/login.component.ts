import { Component, OnInit } from '@angular/core';
import { LoginService } from '@app/services/login.service';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  nombreUsuario: string = '';
  contrasena: string = '';
  usuario: any = {};

  error: boolean = false;
  logged: boolean = false;
  subscription: Subscription = new Subscription();

  constructor(private loginSrv: LoginService, private router: Router) {}

  ngOnInit(): void {
    this.subscription = this.loginSrv.logged.subscribe((logged) => (this.logged = logged));
  }

  log() {
    console.log('component login');
  }

  login($event: any) {
    $event.preventDefault();
    this.loginSrv.login(this.nombreUsuario, this.contrasena).subscribe((response: any) => {
      this.usuario = { ...response.data };
      //console.log(this.usuario);
      
    });
    if (this.usuario.nombreUsuario) {
      this.loginSrv.changeLoggedStatus(true);
      this.router.navigate(['/games']);
    } else {
      this.error = true;
      console.log(`Error${this.error}`);
    }
  }
}
