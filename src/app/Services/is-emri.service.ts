import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../Models/listResponseModel';
import { IsEmriBase } from '../Models/isEmriBase';
import { Observable } from 'rxjs';
import { ResponseModel } from '../Models/responseModel';
import { SingleResponseModel } from '../Models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class IsEmriService {

  baseUrl="https://localhost:7289/api/IsEmri"
  constructor(private httpClient:HttpClient) { }
  getAll():Observable<ListResponseModel<IsEmriBase>>{

    let apiUrl=this.baseUrl+"IsEmri/GetAll"
    return this.httpClient.get<ListResponseModel<IsEmriBase>>(apiUrl)
  }
  add(isEmri:IsEmriBase):Observable<ResponseModel>{
    let apiUrl = this.baseUrl+"IsEmri/Add"
    return this.httpClient.post<ResponseModel>(apiUrl,isEmri)
  }
  getById(kabloId:number){
    let apiUrl=this.baseUrl+"IsEmri/GetById?id="+kabloId
    return this.httpClient.get<SingleResponseModel<IsEmriBase>>(apiUrl)

  }
  delete(isEmri:IsEmriBase):Observable<ResponseModel>
  {
    let apiUrl=this.baseUrl+"IsEmri/Delete"
    return this.httpClient.post<ResponseModel>(apiUrl,isEmri)
  }
}
