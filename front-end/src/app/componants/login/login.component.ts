import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  checkoutParentGroup: FormGroup;

  constructor(private formChildGroup: FormBuilder) { }

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
    alert(this.checkoutParentGroup.controls['user'].value.email)
    alert(this.checkoutParentGroup.controls['user'].value.password)
  }
}
