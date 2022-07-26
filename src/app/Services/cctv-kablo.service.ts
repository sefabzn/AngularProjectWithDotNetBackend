import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CctvDamarDizaynKablo } from '../Models/cctvDamarDizaynKablo';
import { cctvGenelDizaynKablo } from '../Models/cctvGenelDizaynKablo';
import { ListResponseModel } from '../Models/listResponseModel';
import { ResponseModel } from '../Models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CctvKabloService {

  baseUrl="https://localhost:7289/api/"
  constructor(private httpClient:HttpClient) { }

  getKablolar():Observable<ListResponseModel<cctvGenelDizaynKablo>>{
    let apiUrl=this.baseUrl+"Cctv/CctvGenelDizayn/GetAll"
    return this.httpClient.get<ListResponseModel<cctvGenelDizaynKablo>>(apiUrl)
  }
  getKablolarByDate(tarih:any):Observable<ListResponseModel<cctvGenelDizaynKablo>>{
    let apiUrl=this.baseUrl+"KabloUretim/GetAllByDate?tarih="+tarih
    return this.httpClient.get<ListResponseModel<cctvGenelDizaynKablo>>(apiUrl)
  }
  add(kablo:cctvGenelDizaynKablo):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.baseUrl+"KabloUretim/Add",kablo)
  }
  getKablolarByGenelDizaynId(genelDizaynId:number):Observable<ListResponseModel<CctvDamarDizaynKablo>>{

    let apiUrl=this.baseUrl+"Cctv/CctvDamarDizayn/GetAllByGenelDizaynId?id="+genelDizaynId
    return this.httpClient.get<ListResponseModel<CctvDamarDizaynKablo>>(apiUrl)

  }
}
