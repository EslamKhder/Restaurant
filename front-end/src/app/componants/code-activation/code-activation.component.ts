import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SpaceValidator} from '../../model/space-validator';

@Component({
  selector: 'app-code-activation',
  templateUrl: './code-activation.component.html',
  styleUrls: [
    './code-activation.component.css',
    '../../../assets/css/login-signup.css'
  ]
})
export class CodeActivationComponent implements OnInit {

  checkoutParentGroup: FormGroup;
  constructor(private formChildGroup: FormBuilder) { }

  ngOnInit(): void {
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
    if (this.checkoutParentGroup.invalid) {
      this.checkoutParentGroup.markAllAsTouched()
      return
    }
  }

}
