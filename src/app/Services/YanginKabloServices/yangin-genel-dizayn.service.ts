import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/Models/listResponseModel';
import { ResponseModel } from 'src/app/Models/responseModel';
import { SingleResponseModel } from 'src/app/Models/singleResponseModel';
import { YanginGenelDizaynKablo } from 'src/app/Models/yangin-genel-dizayn-kablo';
@Injectable({
  providedIn: 'root'
})
export class YanginGenelDizaynService {

  baseUrl="https://localhost:7289/api/"
   constructor(private httpClient:HttpClient) { }
  getKablolar():Observable<ListResponseModel<YanginGenelDizaynKablo>>{
    let apiUrl=this.baseUrl+"Yangin/YanginGenelDizayn/GetAll"
    return this.httpClient.get<ListResponseModel<YanginGenelDizaynKablo>>(apiUrl)
  }
  getKablolarByDate(tarih:any):Observable<ListResponseModel<YanginGenelDizaynKablo>>{
    let apiUrl=this.baseUrl+"Yangin/YanginGenelDizayn/GetAllByDate?tarih="+tarih
    return this.httpClient.get<ListResponseModel<YanginGenelDizaynKablo>>(apiUrl)
  }
  getById(kabloId:number){
    let apiUrl=this.baseUrl+"Yangin/YanginGenelDizayn/GetById?id="+kabloId
    return this.httpClient.get<SingleResponseModel<YanginGenelDizaynKablo>>(apiUrl)

  }
  addGenelDizayn(kablo:YanginGenelDizaynKablo):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.baseUrl+"Yangin/YanginGenelDizayn/Add",kablo)
  }
  update(kablo:YanginGenelDizaynKablo):Observable<ResponseModel>{
    return this.httpClient.put<ResponseModel>(this.baseUrl+"Yangin/YanginGenelDizayn/Update",kablo)
  }
  deleteGenelDizayn(kablo:YanginGenelDizaynKablo):Observable<ResponseModel>
  {
    let apiUrl=this.baseUrl+"Yangin/YanginGenelDizayn/Delete"
    return this.httpClient.post<ResponseModel>(apiUrl,kablo)

  }
}
