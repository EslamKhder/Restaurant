import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  private baseUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient,
              private cook: CookieService) { }

  executeAuthentication(email,password): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}signin`,{email,password}).pipe(
      map(
        response => {
          sessionStorage.setItem("email",response.email)
          sessionStorage.setItem("token",`Bearer ${response.token}`)
          this.cook.set("email",response.email)
          this.cook.set("token",`Bearer ${response.token}`)
          return response;
        }
      )
    )
  }

  userActive(email,password): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}active`,{email,password}).pipe(
      map(
        response => {
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

  activeAccount(mail,code):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}activated`,{mail,code}).pipe(
      map(
        response => {
          return response;
        }
      )
    )
  }

  getAuthentication(){
    return sessionStorage.getItem("email");
  }
  getToken(){
    if(this.getAuthentication()){
      return sessionStorage.getItem('token')
    }
  }
  isLogin(){
    return !(sessionStorage.getItem('email') == null ||
           sessionStorage.getItem('token') == null);
  }
  logOut(){
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('token');
    this.cook.delete('email');
    this.cook.delete('token');
  }
}
