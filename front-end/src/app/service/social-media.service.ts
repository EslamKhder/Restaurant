import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class SocialMediaService {

  private baseUrl = 'http://localhost:8080/social';

  constructor(private http: HttpClient,
              private cook: CookieService) { }

  loginWithGoogle(token): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/google`,{token}).pipe(
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
  loginWithFacebook(token): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/facebook`,{token}).pipe(
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
}
