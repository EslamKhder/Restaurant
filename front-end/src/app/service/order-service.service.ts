import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Order} from '../model/order';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  private baseUrl = 'http://localhost:8080/api/';
  //private baseUrl = 'http://localhost:8080/api/allOrders';
  //private url = 'http://localhost:8080/api/category?id=';
  constructor(private http: HttpClient) { }


  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.baseUrl}allOrders`).pipe(
      map(
        response => response
      )
    )
  }
  getOrdersByCategoryId(id): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.baseUrl}category?id=${id}`).pipe(
      map(
        response => response
      )
    )
  }
}
