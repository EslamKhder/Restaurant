import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthenticationServiceService} from '../../service/security/authentication-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
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
        email: [''],
        password: ['']
      })
    })
  }

  done() {
    this.auth.createUser(
      this.checkoutParentGroup.controls['user'].value.email,
      this.checkoutParentGroup.controls['user'].value.password
    ).subscribe({
      next: response => {
        this.router.navigateByUrl("/login")
      }
    })


  }

}
