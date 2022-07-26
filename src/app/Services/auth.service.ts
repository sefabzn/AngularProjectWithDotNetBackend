import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from '../Models/loginModel';
import { SingleResponseModel } from '../Models/singleResponseModel';
import { TokenModel } from '../Models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl="https://localhost:7289/api/auth/"
  constructor(private httpClient:HttpClient) { }

  login(loginModel:LoginModel):Observable<TokenModel>{
    return this.httpClient.post<TokenModel>(this.baseUrl+"login",loginModel)
  }
  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }
    else{
      return false;
    }
  }

}
