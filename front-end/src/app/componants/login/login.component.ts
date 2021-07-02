import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationServiceService} from '../../service/security/authentication-service.service';
import {Router} from '@angular/router';
import {SpaceValidator} from '../../model/space-validator';
import {FacebookLoginProvider, GoogleLoginProvider, SocialAuthService} from 'angularx-social-login';
import {SocialMediaService} from "../../service/social-media.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.css',
    '../../../assets/css/login-signup.css'
  ],
})
export class LoginComponent implements OnInit {

  checkoutParentGroup: FormGroup;

  constructor(private formChildGroup: FormBuilder,
              private auth :AuthenticationServiceService,
              private router: Router,
              private authService: SocialAuthService,
              private social: SocialMediaService) { }

  ngOnInit(): void {
    this.myFormLogin()
  }

  myFormLogin(){
    this.checkoutParentGroup = this.formChildGroup.group({
      user:this.formChildGroup.group({
        email: new FormControl('',[
          Validators.required,
          SpaceValidator.onlyContainSpace,
          Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')
        ]),
        password: new FormControl('',[
          Validators.required
        ])
      })
    })
  }

  login() {
    if(this.checkoutParentGroup.invalid){
      this.checkoutParentGroup.markAllAsTouched()
      return;
    }
    this.auth.userActive(
      this.checkoutParentGroup.controls['user'].value.email,
      this.checkoutParentGroup.controls['user'].value.password
    ).subscribe({
      next: response =>{
        let ac = response.active;
        if(ac == 1){
          this.auth.executeAuthentication(
            this.checkoutParentGroup.controls['user'].value.email,
            this.checkoutParentGroup.controls['user'].value.password
          ).subscribe({
            next: response =>{
              this.router.navigateByUrl("/orders")
            }
          })
        } else if(ac === 0){
          sessionStorage.setItem("emailActive",this.checkoutParentGroup.controls['user'].value.email)
          this.router.navigateByUrl("/active")
        } else {
          alert("Invalid Email or Password")
        }
      }
    })
  }

  get email(){
    return this.checkoutParentGroup.get('user.email')
  }
  get password(){
    return this.checkoutParentGroup.get('user.password')
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      data => {
        this.social.loginWithGoogle(data.idToken).subscribe({
          next: response =>{
            this.router.navigateByUrl("/orders")
          }
        })
        console.log(data.idToken)
      }
    );
  }
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(
      data => {
        this.social.loginWithFacebook(data.authToken).subscribe({
          next: response =>{
            this.router.navigateByUrl("/orders")
          }
        })
        console.log(data.authToken)
      }
    );
  }
}
