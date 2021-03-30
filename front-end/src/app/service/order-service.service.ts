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


  getOrders(page,size): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.baseUrl}allOrders?page=${page}&size=${size}`).pipe(
      map(
        response => response
      )
    )
  }
  getOrdersByCategoryId(id,page,size): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.baseUrl}category?id=${id}&page=${page}&size=${size}`).pipe(
      map(
        response => response
      )
    )
  }

  getOrdersByKey(word,page,size): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.baseUrl}orderkey?word=${word}&page=${page}&size=${size}`).pipe(
      map(
        response => response
      )
    )
  }
  getOrderById(id): Observable<Order>{
    return this.http.get<Order>(`${this.baseUrl}order?id=${id}`).pipe(
      map(
        response => response
      )
    )
  }
  getOrdersLength(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}orderSize`).pipe(
      map(
        response => response
      )
    )
  }
  getOrdersLengthByCategoryId(id): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}ctegoryidsize?id=${id}`).pipe(
      map(
        response => response
      )
    )
  }
  getOrdersLengthByKey(word): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}keysize?key=${word}`).pipe(
      map(
        response => response
      )
    )
  }

}
