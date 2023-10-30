import { Injectable } from '@angular/core';
import { DamarDizaynBase } from '../Models/damarDizaynBase';
import { ResponseModel } from '../Models/responseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../Models/listResponseModel';
import { SingleResponseModel } from '../Models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class DamarDizaynService {

  baseUrl="https://localhost:7289/api/DamarDizayn"

  constructor(private httpClient:HttpClient) { }
  delete(kablo:DamarDizaynBase):Observable<ResponseModel>
  {
    let apiUrl=this.baseUrl+"DamarDizayn/Delete"
    return this.httpClient.post<ResponseModel>(apiUrl,kablo)
  }
  getAllByGenelDizaynId(genelDizaynId:number):Observable<ListResponseModel<DamarDizaynBase>>{

    let apiUrl=this.baseUrl+"DamarDizayn/GetAllByGenelDizaynId?id="+genelDizaynId
    return this.httpClient.get<ListResponseModel<DamarDizaynBase>>(apiUrl)
  }
  update(kablo:DamarDizaynBase):Observable<ResponseModel>{
    return this.httpClient.put<ResponseModel>(this.baseUrl+"Cctv/CctvDamarDizayn/Update",kablo)
  }
  getById(kabloId:number){
    let apiUrl=this.baseUrl+"DamarDizayn/GetById?id="+kabloId
    return this.httpClient.get<SingleResponseModel<DamarDizaynBase>>(apiUrl)

  }
  add(kablo:DamarDizaynBase):Observable<ResponseModel>{

    let apiUrl=this.baseUrl+"DamarDizayn/Add"
    return this.httpClient.post<ResponseModel>(apiUrl,kablo)

  }
}
