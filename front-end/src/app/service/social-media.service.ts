import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SocialMediaService {

  private baseUrl = 'http://localhost:8080/social';

  constructor(private http: HttpClient) { }

  loginWithGoogle(token): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/google`,{token}).pipe(
      map(
        response => response
      )
    )
  }
  loginWithFacebook(token): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/facebook`,{token}).pipe(
      map(
        response => response
      )
    )
  }
}
