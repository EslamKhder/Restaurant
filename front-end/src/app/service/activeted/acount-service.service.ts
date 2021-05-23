import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {AuthenticationServiceService} from '../security/authentication-service.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AcountServiceService implements CanActivate {

  constructor(
              private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(sessionStorage.getItem("emailActive") == null){
      this.router.navigateByUrl("/signup")
      return false
    }
    return true;
  }
}
