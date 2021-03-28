import { Component, OnInit } from '@angular/core';
import {OrderServiceService} from '../../service/order-service.service';
import {Order} from '../../model/order';

@Component({
  selector: 'app-search-order',
  templateUrl: './search-order.component.html',
  styleUrls: ['./search-order.component.css']
})
export class SearchOrderComponent implements OnInit {

  orders: Order[] = [];
  constructor(private orderService: OrderServiceService) { }

  ngOnInit(): void {
  }

  doSearch(value: string) {
    this.orderService.getOrdersByKey(value).subscribe(
      data => {
        this.orders = data
      }
    )
  }
}
