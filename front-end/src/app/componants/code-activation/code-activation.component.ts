import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SpaceValidator} from '../../model/space-validator';
import {AuthenticationServiceService} from '../../service/security/authentication-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-code-activation',
  templateUrl: './code-activation.component.html',
  styleUrls: [
    './code-activation.component.css',
    '../../../assets/css/login-signup.css'
  ]
})
export class CodeActivationComponent implements OnInit {

  email: string = "";
  checkoutParentGroup: FormGroup;
  constructor(private formChildGroup: FormBuilder,
              private auth: AuthenticationServiceService,
              private router: Router) { }

  ngOnInit(): void {
    this.email = sessionStorage.getItem("emailActive");
    this.myFormLogin()
  }

  myFormLogin(){
    this.checkoutParentGroup = this.formChildGroup.group({
      user:this.formChildGroup.group({
        code: new FormControl('',[
          Validators.required,
          SpaceValidator.onlyContainSpace
        ])
      })
    })
  }
  get code(){
    return this.checkoutParentGroup.get('user.code')
  }

  done() {
    console.log(this.checkoutParentGroup.controls['user'].value.code)
    if (this.checkoutParentGroup.invalid) {
      this.checkoutParentGroup.markAllAsTouched()
      return
    }
    this.auth.activeAccount(
      this.email,
      this.checkoutParentGroup.controls['user'].value.code
    ).subscribe({
      next: response => {
        if (response.result == 1){
          sessionStorage.removeItem("emailActive")
          this.router.navigateByUrl("/login")
        } else {
          alert("Invalid Code");
        }
      }
    })

  }

}
