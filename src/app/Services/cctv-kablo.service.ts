import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CctvGenelDizaynComponent } from '../Components/CCTV/cctv-genel-dizayn/cctv-genel-dizayn.component';
import { CctvDamarDizaynKablo } from '../Models/cctvDamarDizaynKablo';
import { cctvGenelDizaynKablo } from '../Models/cctvGenelDizaynKablo';
import { CctvIsEmri } from '../Models/cctvIsEmri';
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
    let apiUrl=this.baseUrl+"Cctv/CctvGenelDizayn/GetAllByDate?tarih="+tarih
    return this.httpClient.get<ListResponseModel<cctvGenelDizaynKablo>>(apiUrl)
  }
  addGenelDizayn(kablo:cctvGenelDizaynKablo):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.baseUrl+"Cctv/CctvGenelDizayn/Add",kablo)
  }
  getKablolarByGenelDizaynId(genelDizaynId:number):Observable<ListResponseModel<CctvDamarDizaynKablo>>{

    let apiUrl=this.baseUrl+"Cctv/CctvDamarDizayn/GetAllByGenelDizaynId?id="+genelDizaynId
    return this.httpClient.get<ListResponseModel<CctvDamarDizaynKablo>>(apiUrl)
  }
  getIsEmirleri():Observable<ListResponseModel<CctvIsEmri>>{

    let apiUrl=this.baseUrl+"Cctv/CctvIsEmri/GetAll"
    return this.httpClient.get<ListResponseModel<CctvIsEmri>>(apiUrl)
  }
  deleteCctvGenelDizayn(kablo:cctvGenelDizaynKablo):Observable<ResponseModel>
  {
    let apiUrl=this.baseUrl+"Cctv/CctvGenelDizayn/Delete"
    return this.httpClient.post<ResponseModel>(apiUrl,kablo)

  }
  deleteCctvDamarDizayn(kablo:CctvDamarDizaynKablo):Observable<ResponseModel>
  {
    let apiUrl=this.baseUrl+"Cctv/CctvDamarDizayn/Delete"
    return this.httpClient.post<ResponseModel>(apiUrl,kablo)
  }
  deleteIsEmri(isEmri:CctvIsEmri):Observable<ResponseModel>
  {
    let apiUrl=this.baseUrl+"Cctv/CctvIsEmri/Delete"
    return this.httpClient.post<ResponseModel>(apiUrl,isEmri)
  }
}
