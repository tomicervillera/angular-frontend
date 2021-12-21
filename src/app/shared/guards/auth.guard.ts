import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginService } from '@app/services/login.service';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  logged: boolean = false;
  subscription: Subscription = new Subscription();
  constructor(private router: Router, private loginSrv: LoginService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // console.log('AuthGuard#canActivate called');

    //let logged = window.localStorage.getItem('logged');
    // console.log('Logged', logged);

    this.subscription = this.loginSrv.logged.subscribe((logged) => (this.logged = logged));

    if (this.logged) {
      return true;
    } else {
      this.router.navigate(['/auth/login']);
      return false;
    }
  }
}
