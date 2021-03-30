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
  page: number = 1;
  pageLength: number = 5;
  orderSize: number = 17;
  // 5 5 5 2
  // 0 1 2 3
  constructor(private order: OrderServiceService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      () => {
        this.finishOrders();
      }
    )
  }

  finishOrders(){
    let result1 = this.route.snapshot.paramMap.has('id');
    let result2 = this.route.snapshot.paramMap.has('key');
    if(result1){
      this.getOrderByCategoryId()
    } else if (result2) {
      this.getAllOrdersContainingKey()
    } else {
      this.getOrders();
    }
  }
  getOrders(){
    this.order.getOrders(this.page-1,this.pageLength).subscribe(
      data => {
        this.orders = data
        console.log(data)
      }
    )
  }
  getOrderByCategoryId(){
    let idCategory = this.route.snapshot.paramMap.get('id');
    this.order.getOrdersByCategoryId(idCategory,this.page-1,this.pageLength).subscribe(
      data => {
        this.orders = data
      }
    )
  }
  getAllOrdersContainingKey(){
    let keyWord = this.route.snapshot.paramMap.get('key');
    this.order.getOrdersByKey(keyWord,this.page-1,this.pageLength).subscribe(
      data => {
        this.orders = data
      }
    )
  }

  doing() {
    alert(this.page-1)
    this.finishOrders()
  }
}
