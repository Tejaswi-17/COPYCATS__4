import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }

  postLogin(s:any){
    return this.http.post('https://apiv2.shiprocket.in/v1/external/auth/login',s)
  }
}
