import { Injectable } from '@angular/core';
import { ListResponseModel } from '../Models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseModel } from '../Models/responseModel';
import { SingleResponseModel } from '../Models/singleResponseModel';
import { GenelDizaynBase } from '../Models/genelDizaynBase';

@Injectable({
  providedIn: 'root'
})
export class GenelDizaynService {
  baseUrl="https://localhost:7289/api/GenelDizayn"
  constructor(private httpClient:HttpClient) { 

  }

  getAll(tur?:string):Observable<ListResponseModel<GenelDizaynBase>>{
    if (tur) {
    let apiUrl=this.baseUrl+"GenelDizayn/GetAll/"+tur
    return this.httpClient.get<ListResponseModel<GenelDizaynBase>>(apiUrl)
      
    }
    let apiUrl=this.baseUrl+"GenelDizayn/GetAll"
    return this.httpClient.get<ListResponseModel<GenelDizaynBase>>(apiUrl)
  }
  getAllByDate(tarih:any):Observable<ListResponseModel<GenelDizaynBase>>{
    let apiUrl=this.baseUrl+"GenelDizayn/GetAllByDate?tarih="+tarih
    return this.httpClient.get<ListResponseModel<GenelDizaynBase>>(apiUrl)
  }
  add(kablo:GenelDizaynBase):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.baseUrl+"GenelDizayn/Add",kablo)
  }
  update(kablo:GenelDizaynBase):Observable<ResponseModel>{
    return this.httpClient.put<ResponseModel>(this.baseUrl+"GenelDizayn/Update",kablo)
  }
  getById(kabloId:number){
    let apiUrl=this.baseUrl+"GenelDizayn/GetById?id="+kabloId
    return this.httpClient.get<SingleResponseModel<GenelDizaynBase>>(apiUrl)

  }
  deleteGenelDizayn(kablo:GenelDizaynBase):Observable<ResponseModel>
  {
    let apiUrl=this.baseUrl+"GenelDizayn/Delete"
    return this.httpClient.post<ResponseModel>(apiUrl,kablo)

  }
}
