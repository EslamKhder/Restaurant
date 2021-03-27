import { Component, OnInit } from '@angular/core';
import {Order} from '../../model/order';
import {OrderServiceService} from '../../service/order-service.service';

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit {

  orders: Order[] = [];
  constructor(private order: OrderServiceService) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(){
    this.order.getOrders().subscribe(
      data => {
        this.orders = data
      }
    )
  }
}
