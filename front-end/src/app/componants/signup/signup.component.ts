import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationServiceService} from '../../service/security/authentication-service.service';
import {Router} from '@angular/router';
import {SpaceValidator} from '../../model/space-validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: [
    './signup.component.css',
    '../../../assets/css/login-signup.css'
  ]
})
export class SignupComponent implements OnInit {

  checkoutParentGroup: FormGroup;

  constructor(private formChildGroup: FormBuilder,
              private auth :AuthenticationServiceService,
              private router: Router) { }

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

  done() {
    if(this.checkoutParentGroup.invalid){
      this.checkoutParentGroup.markAllAsTouched()
      return
    }
    this.auth.createUser(
      this.checkoutParentGroup.controls['user'].value.email,
      this.checkoutParentGroup.controls['user'].value.password
    ).subscribe({
      next: response => {
        if (response.result == 1){
          sessionStorage.setItem("emailActive",this.checkoutParentGroup.controls['user'].value.email),
          this.router.navigateByUrl("/active")
        } else {
          alert("Email is Exist")
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

}
