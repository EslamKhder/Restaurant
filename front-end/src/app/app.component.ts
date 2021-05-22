import { Component } from '@angular/core';
import {CartServiceService} from './service/cart-service.service';
import {AuthenticationServiceService} from './service/security/authentication-service.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end';

  constructor(private cook: CookieService,
              private auth: AuthenticationServiceService) { }

  ngOnInit(): void {
    if (this.isCookie()){
      sessionStorage.setItem("email",this.cook.get("email"))
      sessionStorage.setItem("token",this.cook.get("token"))
    }
  }

  isCookie(){
    if (this.cook.get('email') === '' || this.cook.get('token') === ''){
      return false;
    }
    return true;
  }

  isLogin(){
    return this.auth.isLogin()
  }

}
