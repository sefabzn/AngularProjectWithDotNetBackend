import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../Models/listResponseModel';
import { Observable } from 'rxjs';
import { ResponseModel } from '../Models/responseModel';
import { SingleResponseModel } from '../Models/singleResponseModel';
import { IsEmriModel } from '../Models/isEmri';

@Injectable({
  providedIn: 'root'
})
export class IsEmriService {

  baseUrl="https://localhost:7289/api/IsEmri/"

  constructor(private httpClient:HttpClient) { }
  getAll():Observable<ListResponseModel<IsEmriModel>>{

    let apiUrl=this.baseUrl+"GetAll"
    return this.httpClient.get<ListResponseModel<IsEmriModel>>(apiUrl)
  }
  add(isEmriModel:IsEmriModel):Observable<any>{
    return this.httpClient.post<any>(this.baseUrl + "Add", isEmriModel);
  }
  getById(kabloId:number){
    let apiUrl=this.baseUrl+"GetById?id="+kabloId
    return this.httpClient.get<SingleResponseModel<IsEmriModel>>(apiUrl)

  }
  delete(isEmri:IsEmriModel):Observable<ResponseModel>
  {
    let apiUrl=this.baseUrl+"Delete"
    return this.httpClient.post<ResponseModel>(apiUrl,isEmri)
  }
}
