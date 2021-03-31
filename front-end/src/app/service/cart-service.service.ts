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

}
