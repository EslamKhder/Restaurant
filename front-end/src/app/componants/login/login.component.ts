import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthenticationServiceService} from '../../service/security/authentication-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
        email: [''],
        password: ['']
      })
    })
  }

  login() {
    this.auth.executeAuthentication(
      this.checkoutParentGroup.controls['user'].value.email,
      this.checkoutParentGroup.controls['user'].value.password
    ).subscribe({
      next: response =>{
        this.router.navigateByUrl("/orders")
      },
      error: er=> {
        alert("Invalid Email or Password")
      }
    })
  }
}
