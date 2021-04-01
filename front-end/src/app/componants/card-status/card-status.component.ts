import { Component, OnInit } from '@angular/core';
import {CartServiceService} from '../../service/cart-service.service';

@Component({
  selector: 'app-card-status',
  templateUrl: './card-status.component.html',
  styleUrls: ['./card-status.component.css']
})
export class CardStatusComponent implements OnInit {

  orderSize: number = 0;
  orderPrice: number = 0;

  constructor(private cart: CartServiceService) { }

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

}
