import { Component, OnInit } from '@angular/core';
import {CartOrder} from '../../model/cart-order';
import {CartServiceService} from '../../service/cart-service.service';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit {

  orders: CartOrder[] = [];
  constructor(private cart: CartServiceService) { }

  ngOnInit(): void {
    this.getAllOrders()
  }

  getAllOrders(){
    this.orders = this.cart.orders;
  }

  addOrder(temp: CartOrder) {
    this.cart.addOrderToCart(temp)
  }
}
