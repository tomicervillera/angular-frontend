import { Component, OnInit } from '@angular/core';
import { LoginService } from '@app/services/login.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  nombreUsuario: string = '';
  contrasena: string = '';
  usuario: any = {};

  constructor(private loginSrv: LoginService, private router: Router) {}

  ngOnInit(): void {}

  log() {
    console.log('component login');
  }

  login($event: any) {
    $event.preventDefault();
    this.loginSrv.login(this.nombreUsuario, this.contrasena).subscribe((response : any) => {
      this.usuario = { ...response.data };
      //console.log(this.usuario);
      if (this.usuario.nombreUsuario){
        this.router.navigate(['/games']);
      }
    });

    // this.loginSrv
    //   .login(this.nombreUsuario, this.contrasena)
    //   .subscribe((response: any) => (this.usuario = { ...response.data }));
  }
}
