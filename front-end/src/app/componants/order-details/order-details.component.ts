import { Component, OnInit } from '@angular/core';
import {OrderServiceService} from '../../service/order-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Order} from '../../model/order';
import {CartServiceService} from '../../service/cart-service.service';
import {CartOrder} from '../../model/cart-order';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  order: Order = null;
  constructor(private orderService: OrderServiceService,
              private route: ActivatedRoute,
              private router: Router,
              private cartService: CartServiceService) { }

  ngOnInit(): void {
    this.getOrder()
  }

  getOrder(){
    let id = this.route.snapshot.paramMap.get('id');
    this.orderService.getOrderById(id).subscribe(
      data =>{
        this.order = data
      }
    )
  }

  allOrders() {
    this.router.navigateByUrl('/orders')
  }

  addToCard(order: Order) {
    const orderCart = new CartOrder(order);
    this.cartService.addOrderToCart(orderCart);
  }
}
