import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {StateCountryServiceService} from '../../service/state-country-service.service';
import {Country} from '../../model/country';
import {State} from '../../model/state';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  checkoutParentGroup: FormGroup;
  countries: Country[] = [];
  states: State[] = [];
  constructor(private formChildGroup: FormBuilder,
              private stateCountry: StateCountryServiceService) { }

  ngOnInit(): void {
    this.myForm()
    this.getAllCountries()
    //this.getAllStates()
    //this.getStatesByCode()
  }

  myForm(){
    this.checkoutParentGroup = this.formChildGroup.group({
      data: this.formChildGroup.group({
        fullName: [''],
        gmail: [''],
        phone: ['']
      }),
      fromPerson: this.formChildGroup.group({
        country: [''],
        state: [''],
        zipCode: ['']
      }),
      toPerson: this.formChildGroup.group({
        country: [''],
        state: [''],
        zipCode: ['']
      }),
      creditCard: this.formChildGroup.group({
        cardType: ['Visa'],
        cardNumber: [''],
        code: ['']
      })
    })
  }

  done() {
    console.log(this.checkoutParentGroup.get('data.fullName').value)
    console.log(this.checkoutParentGroup.get('fromPerson').value)
    console.log(this.checkoutParentGroup.get('toPerson').value)
    console.log(this.checkoutParentGroup.get('creditCard').value)
  }

  similarGroup(event: Event) {
    if((<HTMLInputElement>event.target).checked){
      this.checkoutParentGroup.controls.toPerson
        .setValue(this.checkoutParentGroup.controls.fromPerson.value)
    } else {
      this.checkoutParentGroup.controls.toPerson.reset()
    }
  }

  getAllCountries(){
    this.stateCountry.getAllCountry().subscribe(
      data => {
        this.countries = data
      }
    )
  }
  /*getAllStates() {
    this.stateCountry.getAllStates().subscribe(
      data => {
        this.states = data
      }
    )
  }*/
  getStatesByCode(){
    const code = this.checkoutParentGroup.get('fromPerson.country').value
    alert(code)
    this.stateCountry.getStatesByCode(code).subscribe(
      data =>{
        this.states = data
      }
    )
  }
}
