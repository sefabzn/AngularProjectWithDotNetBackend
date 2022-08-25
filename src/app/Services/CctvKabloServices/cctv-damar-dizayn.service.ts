import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CctvDamarDizaynKablo } from 'src/app/Models/cctvDamarDizaynKablo';
import { Observable } from 'rxjs';
import { ResponseModel } from 'src/app/Models/responseModel';
import { ListResponseModel } from 'src/app/Models/listResponseModel';
@Injectable({
  providedIn: 'root'
})
export class CctvDamarDizaynService {

  baseUrl="https://localhost:7289/api/"

  constructor(private httpClient:HttpClient) { }
  deleteDamarDizayn(kablo:CctvDamarDizaynKablo):Observable<ResponseModel>
  {
    let apiUrl=this.baseUrl+"Cctv/CctvDamarDizayn/Delete"
    return this.httpClient.post<ResponseModel>(apiUrl,kablo)
  }
  getKablolarByGenelDizaynId(genelDizaynId:number):Observable<ListResponseModel<CctvDamarDizaynKablo>>{

    let apiUrl=this.baseUrl+"Cctv/CctvDamarDizayn/GetAllByGenelDizaynId?id="+genelDizaynId
    return this.httpClient.get<ListResponseModel<CctvDamarDizaynKablo>>(apiUrl)
  }
 
  addDamarDizayn(kablo:CctvDamarDizaynKablo):Observable<ResponseModel>{

    let apiUrl=this.baseUrl+"Cctv/CctvDamarDizayn/Add"
    return this.httpClient.post<ResponseModel>(apiUrl,kablo)

  }
}
