import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../Models/listResponseModel';
import { OperatorIsEmri } from '../Models/operatorIsEmri';
import { ResponseModel } from '../Models/responseModel';
import { SingleResponseModel } from '../Models/singleResponseModel';
@Injectable({
  providedIn: 'root'
})
export class OperatorIsEmriService {

  constructor(private httpClient:HttpClient) { }
  baseUrl="https://localhost:7289/api/"

  add(isEmri:OperatorIsEmri):Observable<ResponseModel>{
    let apiUrl=this.baseUrl+"OperatorIsEmri/Add"

    return this.httpClient.post<ResponseModel>(apiUrl,isEmri)
  }
  update(isEmri:OperatorIsEmri):Observable<ResponseModel>{
    return this.httpClient.put<ResponseModel>(this.baseUrl+"OperatorIsEmri/Update",isEmri)
  }
  getIsEmirleri():Observable<ListResponseModel<OperatorIsEmri>>{
    let apiUrl=this.baseUrl+"OperatorIsEmri/GetAll"
    return this.httpClient.get<ListResponseModel<OperatorIsEmri>>(apiUrl);
  }
  delete(isEmri:OperatorIsEmri):Observable<ResponseModel>
  {
    let apiUrl=this.baseUrl+"OperatorIsEmri/Delete"
    return this.httpClient.post<ResponseModel>(apiUrl,isEmri)
  }
  getById(kabloId:number){
    let apiUrl=this.baseUrl+"OperatorIsEmri/GetById?id="+kabloId
    return this.httpClient.get<SingleResponseModel<OperatorIsEmri>>(apiUrl)

  }
}
