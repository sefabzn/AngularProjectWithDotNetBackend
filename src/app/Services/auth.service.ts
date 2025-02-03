import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from '../Models/loginModel';
import { RegisterModel } from '../Models/registerModel';
import { TokenModel } from '../Models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = "https://localhost:7289/api/auth/";
  constructor(private httpClient: HttpClient) { }

  login(loginModel: LoginModel): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + "login", loginModel);
  }

  register(registerModel: RegisterModel): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + "register", registerModel);
  }

  isAuthenticated() {
    return localStorage.getItem("token") !== null;
  }
}
