import { Injectable } from '@angular/core';
import {CartOrder} from '../model/cart-order';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  orders: CartOrder[] = [];
  totalOrders: number = 0;
  totalPrice: number = 0;

  constructor() { }

  addOrderToCart(order: CartOrder){
    let isExist: boolean = false;
    let existOrder :CartOrder = undefined;
    if(this.orders.length > 0){
      for(let temp of this.orders){
        if(temp.id === order.id){
          existOrder = temp;
          break;
        }
      }
    }
    isExist = (existOrder != undefined); // true   false
     if(isExist){
      existOrder.quantity++;
    }else {
      this.orders.push(order)
    }
  }

}
/*
      "5" == 5    true
      "5" === 5   false
      "5" == "5"  true
      "5" === "5" true
* */
