import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  private baseUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  executeAuthentication(email,password): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}signin`,{email,password}).pipe(
      map(
        response => {
          sessionStorage.setItem("token",`Bearer ${response.token}`)
          return response;
        }
      )
    )
  }
  createUser(email,password):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}signup`,{email,password}).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }
}
