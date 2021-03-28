import { Component, OnInit } from '@angular/core';
import {Order} from '../../model/order';
import {OrderServiceService} from '../../service/order-service.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit {

  orders: Order[] = [];
  constructor(private order: OrderServiceService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.finishOrders();
  }

  finishOrders(){
    let result = this.route.snapshot.paramMap.has('id');
    if(result){
      this.getOrderByCategoryId()
    } else {
      this.getOrders();
    }
  }
  getOrders(){
    this.order.getOrders().subscribe(
      data => {
        this.orders = data
      }
    )
  }
  getOrderByCategoryId(){
    let idCategory = this.route.snapshot.paramMap.get('id');
    this.order.getOrdersByCategoryId(idCategory).subscribe(
      data => {
        this.orders = data
      }
    )
  }
}
