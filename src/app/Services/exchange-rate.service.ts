import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../Models/listResponseModel';
import { SingleResponseModel } from '../Models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {

  baseUrl="https://localhost:7289/api/"
  constructor(private httpClient:HttpClient) {
   }

   getDollarRate():Observable<SingleResponseModel<number>>{
      let apiUrl = this.baseUrl+"ExchangeRate/GetDollarRate"
      return this.httpClient.get<SingleResponseModel<number>>(apiUrl)
   }
   getEuroRate():Observable<SingleResponseModel<number>>{
    let apiUrl = this.baseUrl+"ExchangeRate/GetEuroRate"
    return this.httpClient.get<SingleResponseModel<number>>(apiUrl)
 }
}
