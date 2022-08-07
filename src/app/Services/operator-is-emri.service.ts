import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../Models/listResponseModel';
import { OperatorIsEmri } from '../Models/operatorIsEmri';
@Injectable({
  providedIn: 'root'
})
export class OperatorIsEmriService {

  constructor(private httpClient:HttpClient) { }
  baseUrl="https://localhost:7289/api/"

  getIsEmirleri():Observable<ListResponseModel<OperatorIsEmri>>{
    let apiUrl=this.baseUrl+"OperatorIsEmri/GetAll"
    return this.httpClient.get<ListResponseModel<OperatorIsEmri>>(apiUrl);
  }
}