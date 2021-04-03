import { Component, OnInit } from '@angular/core';
import {CartOrder} from '../../model/cart-order';
import {CartServiceService} from '../../service/cart-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit {

  orders: CartOrder[] = [];
  totalOrder: number = 0;
  totalPrice: number = 0;
  constructor(private cart: CartServiceService,
              private router: Router) { }

  ngOnInit(): void {
    this.getAllOrders()
    this.getTotals()
    this.cart.calculateTotals()
  }

  getTotals(){
    this.cart.totalOrders.subscribe(
      data => {
        this.totalOrder = data
      }
    )
    this.cart.totalPrice.subscribe(
      data => {
        this.totalPrice = data
      }
    )
  }
  getAllOrders(){
    this.orders = this.cart.orders;
  }

  addOrder(temp: CartOrder) {
    this.cart.addOrderToCart(temp)
  }

  removeOrder(temp: CartOrder) {
    this.cart.removeOrder(temp)
  }

  remove(temp: CartOrder) {
    this.cart.remove(temp)
  }

  checkOut() {
    this.router.navigateByUrl('/checkout')
  }
}
