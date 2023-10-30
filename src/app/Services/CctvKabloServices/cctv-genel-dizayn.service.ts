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

  getAll(tur?:string):Observable<ListResponseModel<cctvGenelDizaynKablo>>{
    if (tur) {
    let apiUrl=this.baseUrl+"GenelDizayn/GetAll/"+tur
    return this.httpClient.get<ListResponseModel<cctvGenelDizaynKablo>>(apiUrl)
      
    }
    let apiUrl=this.baseUrl+"GenelDizayn/GetAll"
    return this.httpClient.get<ListResponseModel<cctvGenelDizaynKablo>>(apiUrl)
  }
  getAllByDate(tarih:any):Observable<ListResponseModel<cctvGenelDizaynKablo>>{
    let apiUrl=this.baseUrl+"GenelDizayn/GetAllByDate?tarih="+tarih
    return this.httpClient.get<ListResponseModel<cctvGenelDizaynKablo>>(apiUrl)
  }
  add(kablo:cctvGenelDizaynKablo):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.baseUrl+"GenelDizayn/Add",kablo)
  }
  update(kablo:cctvGenelDizaynKablo):Observable<ResponseModel>{
    return this.httpClient.put<ResponseModel>(this.baseUrl+"GenelDizayn/Update",kablo)
  }
  getById(kabloId:number){
    let apiUrl=this.baseUrl+"GenelDizayn/GetById?id="+kabloId
    return this.httpClient.get<SingleResponseModel<cctvGenelDizaynKablo>>(apiUrl)

  }
  deleteGenelDizayn(kablo:cctvGenelDizaynKablo):Observable<ResponseModel>
  {
    let apiUrl=this.baseUrl+"GenelDizayn/Delete"
    return this.httpClient.post<ResponseModel>(apiUrl,kablo)

  }
}
