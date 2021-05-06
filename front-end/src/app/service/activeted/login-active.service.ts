import { Injectable } from '@angular/core';
import {AuthenticationServiceService} from '../security/authentication-service.service';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginActiveService implements CanActivate{

  constructor(private auth: AuthenticationServiceService,
              private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.auth.isLogin()){
      this.router.navigateByUrl("/orders")
      return false
    }
    return true;
  }
}
