import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/Models/listResponseModel';
import { cctvGenelDizaynKablo } from 'src/app/Models/cctvGenelDizaynKablo';
import { ResponseModel } from 'src/app/Models/responseModel';
import { CctvDamarDizaynKablo } from 'src/app/Models/cctvDamarDizaynKablo';
import { SingleResponseModel } from 'src/app/Models/singleResponseModel';
@Injectable({
  providedIn: 'root'
})
export class CctvGenelDizaynService {
  baseUrl="https://localhost:7289/api/"
  constructor(private httpClient:HttpClient) { 

  }

  getKablolar():Observable<ListResponseModel<cctvGenelDizaynKablo>>{
    let apiUrl=this.baseUrl+"Cctv/CctvGenelDizayn/GetAll"
    return this.httpClient.get<ListResponseModel<cctvGenelDizaynKablo>>(apiUrl)
  }
  getKablolarByDate(tarih:any):Observable<ListResponseModel<cctvGenelDizaynKablo>>{
    let apiUrl=this.baseUrl+"Cctv/CctvGenelDizayn/GetAllByDate?tarih="+tarih
    return this.httpClient.get<ListResponseModel<cctvGenelDizaynKablo>>(apiUrl)
  }
  addGenelDizayn(kablo:cctvGenelDizaynKablo):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.baseUrl+"Cctv/CctvGenelDizayn/Add",kablo)
  }
  update(kablo:cctvGenelDizaynKablo):Observable<ResponseModel>{
    return this.httpClient.put<ResponseModel>(this.baseUrl+"Cctv/CctvGenelDizayn/Update",kablo)
  }
  getById(kabloId:number){
    let apiUrl=this.baseUrl+"Cctv/CctvGenelDizayn/GetById?id="+kabloId
    return this.httpClient.get<SingleResponseModel<cctvGenelDizaynKablo>>(apiUrl)

  }
  deleteGenelDizayn(kablo:cctvGenelDizaynKablo):Observable<ResponseModel>
  {
    let apiUrl=this.baseUrl+"Cctv/CctvGenelDizayn/Delete"
    return this.httpClient.post<ResponseModel>(apiUrl,kablo)

  }
}
