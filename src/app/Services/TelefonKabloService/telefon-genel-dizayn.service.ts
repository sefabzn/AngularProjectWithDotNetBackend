import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from 'src/app/Models/listResponseModel';
import { Observable } from 'rxjs';
import { ResponseModel } from 'src/app/Models/responseModel';
import { TelefonGenelDizaynKablo } from 'src/app/Models/telefon-genel-dizayn-kablo';
import { SingleResponseModel } from 'src/app/Models/singleResponseModel';
@Injectable({
  providedIn: 'root'
})
export class TelefonGenelDizaynService {
  
  baseUrl="https://localhost:7289/api/"
  constructor(private httpClient:HttpClient) { }
  getKablolar():Observable<ListResponseModel<TelefonGenelDizaynKablo>>{
    let apiUrl=this.baseUrl+"Telefon/TelefonGenelDizayn/GetAll"
    return this.httpClient.get<ListResponseModel<TelefonGenelDizaynKablo>>(apiUrl)
  }
  getKablolarByDate(tarih:any):Observable<ListResponseModel<TelefonGenelDizaynKablo>>{
    let apiUrl=this.baseUrl+"Telefon/TelefonGenelDizayn/GetAllByDate?tarih="+tarih
    return this.httpClient.get<ListResponseModel<TelefonGenelDizaynKablo>>(apiUrl)
  }
  addGenelDizayn(kablo:TelefonGenelDizaynKablo):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.baseUrl+"Telefon/TelefonGenelDizayn/Add",kablo)
  }
  update(kablo:TelefonGenelDizaynKablo):Observable<ResponseModel>{
    return this.httpClient.put<ResponseModel>(this.baseUrl+"Telefon/TelefonGenelDizayn/Update",kablo)
  }
  getById(kabloId:number){
    let apiUrl=this.baseUrl+"Telefon/TelefonGenelDizayn/GetById?id="+kabloId
    return this.httpClient.get<SingleResponseModel<TelefonGenelDizaynKablo>>(apiUrl)

  }
  deleteGenelDizayn(kablo:TelefonGenelDizaynKablo):Observable<ResponseModel>
  {
    let apiUrl=this.baseUrl+"Telefon/TelefonGenelDizayn/Delete"
    return this.httpClient.post<ResponseModel>(apiUrl,kablo)

  }
}
