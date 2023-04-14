import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/Models/listResponseModel';
import { ResponseModel } from 'src/app/Models/responseModel';
import { SingleResponseModel } from 'src/app/Models/singleResponseModel';
import { YanginDamarDizaynKablo } from 'src/app/Models/yangin-damar-dizayn-kablo';
@Injectable({
  providedIn: 'root'
})
export class YanginDamarDizaynService {
  baseUrl="https://localhost:7289/api/"

  constructor(private httpClient:HttpClient) { }
  DeleteDamarDizayn(kablo:YanginDamarDizaynKablo):Observable<ResponseModel>
  {
    let apiUrl=this.baseUrl+"Yangin/YanginDamarDizayn/Delete"
    return this.httpClient.post<ResponseModel>(apiUrl,kablo)
  }
  getKablolarByGenelDizaynId(genelDizaynId:number):Observable<ListResponseModel<YanginDamarDizaynKablo>>{

    let apiUrl=this.baseUrl+"Yangin/YanginDamarDizayn/GetAllByGenelDizaynId?id="+genelDizaynId
    return this.httpClient.get<ListResponseModel<YanginDamarDizaynKablo>>(apiUrl)
  }
  update(kablo:YanginDamarDizaynKablo):Observable<ResponseModel>{
    return this.httpClient.put<ResponseModel>(this.baseUrl+"Yangin/YanginDamarDizayn/Update",kablo)
  }
  getById(kabloId:number){
    let apiUrl=this.baseUrl+"Yangin/YanginDamarDizayn/GetById?id="+kabloId
    return this.httpClient.get<SingleResponseModel<YanginDamarDizaynKablo>>(apiUrl)

  }
  addDamarDizayn(kablo:YanginDamarDizaynKablo):Observable<ResponseModel>{

    let apiUrl=this.baseUrl+"Yangin/YanginDamarDizayn/Add"
    return this.httpClient.post<ResponseModel>(apiUrl,kablo)

  }
}
