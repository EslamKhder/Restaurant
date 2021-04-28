import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PurchaseRequest} from '../model/purchase-request';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PurchaseServiceService {

  private baseUrl = 'http://localhost:8080/api/buy/purchase';
  constructor(private http: HttpClient) { }

  getOrder(purchaseRequest: PurchaseRequest): Observable<any>{
    return this.http.post<PurchaseRequest>(this.baseUrl,purchaseRequest);
  }
}
