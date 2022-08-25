import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from 'src/app/Models/listResponseModel';
import { Observable } from 'rxjs';
import { ResponseModel } from 'src/app/Models/responseModel';
import { TelefonGenelDizaynKablo } from 'src/app/Models/telefon-genel-dizayn-kablo';
@Injectable({
  providedIn: 'root'
})
export class TelefonGenelDiaynService {
  
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
 
  deleteGenelDizayn(kablo:TelefonGenelDizaynKablo):Observable<ResponseModel>
  {
    let apiUrl=this.baseUrl+"Telefon/TelefonGenelDizayn/Delete"
    return this.httpClient.post<ResponseModel>(apiUrl,kablo)

  }
}
