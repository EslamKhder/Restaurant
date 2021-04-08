import { Injectable } from '@angular/core';
import {CartOrder} from '../model/cart-order';
import {BehaviorSubject, Subject} from 'rxjs';
import {templateJitUrl} from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  orders: CartOrder[] = [];
  totalOrders: Subject<number> = new BehaviorSubject<number>(0);
  totalPrice: Subject<number> = new BehaviorSubject<number>(0);

  constructor() { }

  addOrderToCart(order: CartOrder){
    let isExist: boolean = false;
    let existOrder :CartOrder = undefined;
    if(this.orders.length > 0){
      /*for(let temp of this.orders){
        if(temp.id === order.id){
          existOrder = temp;
          break;
        }
      }*/
      existOrder = this.orders.find(temp =>temp.id === order.id);
    }
    isExist = (existOrder != undefined); // true   false
     if(isExist){
      existOrder.quantity++;
    }else {
      this.orders.push(order)
    }
     console.log(this.orders)
     this.calculateTotals();
  }
  calculateTotals() {
    let totalElementsSizeOrder: number = 0;
    let totalPriceOrders: number = 0;
    for (let temp of this.orders) {
      totalElementsSizeOrder += temp.quantity; // totalElementsSizeOrder = totalElementsSizeOrder +temp.quantity;
      totalPriceOrders += temp.quantity * temp.price;
    }
    this.totalOrders.next(totalElementsSizeOrder);
    this.totalPrice.next(totalPriceOrders);
    console.log("Size = " + this.totalOrders)
    console.log("Price = " + this.totalPrice)
  }

  removeOrder(order: CartOrder){
    order.quantity--;
    if(order.quantity === 0){
      this.remove(order)
    } else {
      this.calculateTotals()
    }
  }
  remove(order: CartOrder){
    const index = this.orders.findIndex(temp => temp.id === order.id) // index or -1
    if(index > -1){
      this.orders.splice(index,1)
      this.calculateTotals()
    }
  }
}

// // [5,6,8,9]    // index = 2

// .slice(2,1)
/*
      "5" == 5    true
      "5" === 5   false
      "5" == "5"  true
      "5" === "5" true
* */
