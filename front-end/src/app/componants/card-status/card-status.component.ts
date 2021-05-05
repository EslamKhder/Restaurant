import { Component, OnInit } from '@angular/core';
import {CartServiceService} from '../../service/cart-service.service';
import {AuthenticationServiceService} from '../../service/security/authentication-service.service';

@Component({
  selector: 'app-card-status',
  templateUrl: './card-status.component.html',
  styleUrls: ['./card-status.component.css']
})
export class CardStatusComponent implements OnInit {

  orderSize: number = 0;
  orderPrice: number = 0;

  constructor(private cart: CartServiceService,
              private auth: AuthenticationServiceService) { }

  ngOnInit(): void {
    this.getCartStatus()
  }

  getCartStatus(){
    this.cart.totalOrders.subscribe(
      data => {
        this.orderSize = data
      }
    )
    this.cart.totalPrice.subscribe(
      data => {
        this.orderPrice = data
      }
    )
  }
  isUserLogin(){
    return this.auth.isLogin()
  }

}
