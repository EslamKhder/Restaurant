import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {StateCountryServiceService} from '../../service/state-country-service.service';
import {Country} from '../../model/country';
import {State} from '../../model/state';
import {SpaceValidator} from '../../model/space-validator';
import {CartServiceService} from '../../service/cart-service.service';
import {RequestOrder} from '../../model/request-order';
import {PurchaseRequest} from '../../model/purchase-request';
import {Item} from '../../model/item';
import {CartOrder} from '../../model/cart-order';
import {PurchaseServiceService} from '../../service/purchase-service.service';
import {Address} from '../../model/address';
import {Client} from '../../model/client';
import {Router} from '@angular/router';

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
  totalSize: number = 0;
  totalPrice: number= 0;

  constructor(private formChildGroup: FormBuilder,
              private stateCountry: StateCountryServiceService,
              private card: CartServiceService,
              private ps: PurchaseServiceService,
              private router: Router) { }

  ngOnInit(): void {
    this.myForm()
    this.getAllCountries()
    this.getTotals()
    //this.getAllStates()
    //this.getStatesByCode()
  }

  myForm(){
    this.checkoutParentGroup = this.formChildGroup.group({
      data: this.formChildGroup.group({
        fullName: new FormControl('',[
          Validators.required,
          SpaceValidator.onlyContainSpace,
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
        cardType: [''],
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
      /* #1 */
      let client: Client = new Client();
      client.name = this.checkoutParentGroup.controls['data'].value.fullName;
      client.email = this.checkoutParentGroup.controls['data'].value.gmail;
      client.phoneNumber = this.checkoutParentGroup.controls['data'].value.phone;

      /* #2 */
      let fromAddress: Address =  this.checkoutParentGroup.controls['fromPerson'].value
      fromAddress.state = fromAddress.state['name']
      /* #3 */
      let toAddress: Address =  this.checkoutParentGroup.controls['toPerson'].value;
      toAddress.state = toAddress.state['name']

      /* #4 */
      let requestOrder = new RequestOrder();
      requestOrder.totalPrice = this.totalPrice;
      requestOrder.totalQuantity = this.totalSize;
      /* #5 */
      let orders: CartOrder[] = this.card.orders;
      let items: Item[]  = orders.map(order => new Item(order));
      /* #6 */
      let purchaseRequest = new PurchaseRequest();
      purchaseRequest.client = client;
      purchaseRequest.fromAddress = fromAddress;
      purchaseRequest.toAddress = toAddress;
      purchaseRequest.requestOrder = requestOrder;
      purchaseRequest.items = items;
      this.ps.getOrder(purchaseRequest).subscribe({
       next: response=> {
         alert("Your Name : " + response.name)
         alert("Your Code : " + response.code)
         this.clean()
       },
       error: error =>{
         console.log("Error is : " + error.message)
       }
      })
    }
  }
  clean(){
    this.card.orders = [];
    this.card.totalOrders.next(0);
    this.card.totalPrice.next(0);
    this.checkoutParentGroup.reset();
    this.router.navigateByUrl("/orders")

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

  getTotals(){
    this.card.totalOrders.subscribe(
      data => {
        this.totalSize = data
      }
    )
    this.card.totalPrice.subscribe(
      data => {
        this.totalPrice = data
      }
    )
  }
}
