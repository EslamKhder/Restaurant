import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { OrderItemsComponent } from './componants/order-items/order-items.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { CategoryItemsComponent } from './componants/category-items/category-items.component';
import {RouterModule, Routes} from '@angular/router';
import { DropdownMenuComponent } from './componants/dropdown-menu/dropdown-menu.component';
import { SearchOrderComponent } from './componants/search-order/search-order.component';
import { OrderDetailsComponent } from './componants/order-details/order-details.component';
import {NgModule} from '@angular/core';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { CardStatusComponent } from './componants/card-status/card-status.component';
import { PurchasesComponent } from './componants/purchases/purchases.component';
import { CheckOutComponent } from './componants/check-out/check-out.component';
import {ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './componants/login/login.component';
import { SignupComponent } from './componants/signup/signup.component';
import {HttpIntercepterBaseAuthService} from './service/security/http-intercepter-base-auth.service';
import {RouteActivteService} from './service/activeted/route-activte.service';
import {LoginActiveService} from './service/activeted/login-active.service';
import {CookieService} from 'ngx-cookie-service';
import { CodeActivationComponent } from './componants/code-activation/code-activation.component';
import {AcountServiceService} from './service/activeted/acount-service.service';
import { ResetPasswordComponent } from './componants/reset-password/reset-password.component';
import {FacebookLoginProvider, GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule} from 'angularx-social-login';

// http://localhost:4200/
const routes: Routes = [

  // http://localhost:4200/active
  {path: 'reset', component:ResetPasswordComponent},

  // http://localhost:4200/active
  {path: 'active', component:CodeActivationComponent,canActivate: [LoginActiveService,AcountServiceService]},

  // http://localhost:4200/login
  {path: 'login', component:LoginComponent,canActivate: [LoginActiveService]},

  // http://localhost:4200/signup
  {path: 'signup', component:SignupComponent,canActivate: [LoginActiveService]},

  // http://localhost:4200/checkout
  {path: 'checkout', component:CheckOutComponent,canActivate: [RouteActivteService]},

  // http://localhost:4200/purchases
  {path: 'purchases', component:PurchasesComponent,canActivate: [RouteActivteService]},

  // http://localhost:4200/order/id
  {path: 'order/:id', component:OrderDetailsComponent,canActivate: [RouteActivteService]},

  // http://localhost:4200/category/id
  {path: 'category/:id', component:OrderItemsComponent,canActivate: [RouteActivteService]},

  // http://localhost:4200/category
  {path: 'category', component:OrderItemsComponent,canActivate: [RouteActivteService]},

  // http://localhost:4200/orders/key
  {path: 'orders/:key', component:OrderItemsComponent,canActivate: [RouteActivteService]},

  // http://localhost:4200/orders
  {path: 'orders', component:OrderItemsComponent,canActivate: [RouteActivteService]},

  // http://localhost:4200/
  {path: '', redirectTo: '/orders',pathMatch: 'full'},

  // if user enter any thing without all routes
  {path: '**', redirectTo: '/orders',pathMatch: 'full'}

];

/*
*   // http://localhost:4200/
  {path: '', component:OrderItemsComponent}
* */
@NgModule({
  declarations: [
    AppComponent,
    OrderItemsComponent,
    CategoryItemsComponent,
    DropdownMenuComponent,
    SearchOrderComponent,
    OrderDetailsComponent,
    CardStatusComponent,
    PurchasesComponent,
    CheckOutComponent,
    LoginComponent,
    SignupComponent,
    CodeActivationComponent,
    ResetPasswordComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    NgbPaginationModule,
    ReactiveFormsModule,
    SocialLoginModule
    //NgModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '998943596311-agii5b72rppsj1h1tdp5f75mhnfj22s7.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('224006282781296')
          }
        ]
      } as SocialAuthServiceConfig,
    },
    {provide: HTTP_INTERCEPTORS,useClass: HttpIntercepterBaseAuthService,multi: true},
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
