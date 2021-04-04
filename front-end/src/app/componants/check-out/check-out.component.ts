import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
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
  statesFromPerson: State[] = [];
  statesToPerson: State[] = [];

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
        fullName: new FormControl('',[
          Validators.required,
          Validators.minLength(6)]),
        gmail: new FormControl('',[
          Validators.required,
          Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')
        ]),
        phone: new FormControl('',[
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11),
          Validators.pattern('^[0-9]*$')
        ])
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

  get fullName(){
    return this.checkoutParentGroup.get('data.fullName')
  }
  get email(){
    return this.checkoutParentGroup.get('data.gmail')
  }
  get phone(){
    return this.checkoutParentGroup.get('data.phone')
  }


  done() {
    if (this.checkoutParentGroup.invalid) {
      this.checkoutParentGroup.markAllAsTouched()
    } else {
      console.log(this.checkoutParentGroup.get('data').value)
      console.log(this.checkoutParentGroup.get('fromPerson').value)
      console.log(this.checkoutParentGroup.get('toPerson').value)
      console.log(this.checkoutParentGroup.get('creditCard').value)
    }

  }

  similarGroup(event: Event) {
    if((<HTMLInputElement>event.target).checked){
      this.checkoutParentGroup.controls.toPerson
        .setValue(this.checkoutParentGroup.controls.fromPerson.value)
      this.statesToPerson = this.statesFromPerson

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
  getStatesByCode(typeForm){
    const code = this.checkoutParentGroup.get(`${typeForm}.country`).value

    this.stateCountry.getStatesByCode(code).subscribe(
      data =>{
        if(typeForm === 'fromPerson'){
          this.statesFromPerson = data
        } else {
          this.statesToPerson = data
        }
        this.checkoutParentGroup.get(`${typeForm}.state`).setValue(data[0])
      }
    )
  }
}
