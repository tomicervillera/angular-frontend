import { Component, OnInit } from '@angular/core';
import { LoginService } from '@app/services/login.service';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';

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

  constructor(private loginSrv: LoginService, private router: Router, private titleSvc: Title) {
    this.titleSvc.setTitle('Iniciar sesión');
  }

  ngOnInit(): void {
    this.subscription = this.loginSrv.logged.subscribe((logged) => (this.logged = logged));
  }

  log() {
    console.log('component login');
  }

  async login($event: any) {
    $event.preventDefault();

    (await this.loginSrv.login(this.nombreUsuario, this.contrasena)).subscribe((response: any) => {
      this.usuario = { ...response.data };
      if (this.usuario.nombreUsuario) {
        this.loginSrv.changeLoggedStatus(true);
        this.router.navigate(['/games']);
      }
    });
      this.error = true;
  }
}
