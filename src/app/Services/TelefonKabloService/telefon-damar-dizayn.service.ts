import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TelefonDamarDizaynKablo } from 'src/app/Models/telefon-damar-dizayn-kablo';
import { ListResponseModel } from 'src/app/Models/listResponseModel';
import { Observable } from 'rxjs';
import { ResponseModel } from 'src/app/Models/responseModel';
import { SingleResponseModel } from 'src/app/Models/singleResponseModel';
@Injectable({
  providedIn: 'root'
})
export class TelefonDamarDizaynService {
  baseUrl="https://localhost:7289/api/"

  constructor(private httpClient:HttpClient) { }
  DeleteDamarDizayn(kablo:TelefonDamarDizaynKablo):Observable<ResponseModel>
  {
    let apiUrl=this.baseUrl+"Telefon/TelefonDamarDizayn/Delete"
    return this.httpClient.post<ResponseModel>(apiUrl,kablo)
  }
  getKablolarByGenelDizaynId(genelDizaynId:number):Observable<ListResponseModel<TelefonDamarDizaynKablo>>{

    let apiUrl=this.baseUrl+"Telefon/TelefonDamarDizayn/GetAllByGenelDizaynId?id="+genelDizaynId
    return this.httpClient.get<ListResponseModel<TelefonDamarDizaynKablo>>(apiUrl)
  }
  update(kablo:TelefonDamarDizaynKablo):Observable<ResponseModel>{
    return this.httpClient.put<ResponseModel>(this.baseUrl+"Cctv/TelefonDamarDizayn/Update",kablo)
  }
  getById(kabloId:number){
    let apiUrl=this.baseUrl+"Telefon/TelefonDamarDizayn/GetById?id="+kabloId
    return this.httpClient.get<SingleResponseModel<TelefonDamarDizaynKablo>>(apiUrl)

  }
  addDamarDizayn(kablo:TelefonDamarDizaynKablo):Observable<ResponseModel>{

    let apiUrl=this.baseUrl+"Telefon/TelefonDamarDizayn/Add"
    return this.httpClient.post<ResponseModel>(apiUrl,kablo)

  }
}
