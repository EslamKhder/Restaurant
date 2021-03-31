import {Order} from './order';

export class CartOrder {

  id: number;
  name: string;
  img: string;
  price: number;
  quantity: number;


  constructor(order: Order) {
    this.id = order.id;
    this.name = order.name;
    this.img = order.img;
    this.price = order.price;
    this.quantity = 1; //
  }
}
