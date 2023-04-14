import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../Models/listResponseModel';
import { KesitYapisi } from '../Models/kesitYapisi';
import { ResponseModel } from '../Models/responseModel';
import { SingleResponseModel } from '../Models/singleResponseModel';
@Injectable({
  providedIn: 'root'
})
export class KesitYapisiService {

  baseUrl="https://localhost:7289/api/"

  constructor(private httpClient:HttpClient) { }
  getKesitYapisiList():Observable<ListResponseModel<KesitYapisi>>{
   return  this.httpClient.get<ListResponseModel<KesitYapisi>>(this.baseUrl+"KesitYapisi/GetAll")
  }
  add(kesit:KesitYapisi):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.baseUrl+"KesitYapisi/Add",kesit)
  }
  delete(kesit:KesitYapisi):Observable<ResponseModel>
  {
    let apiUrl=this.baseUrl+"KesitYapisi/Delete"
    return this.httpClient.post<ResponseModel>(apiUrl,kesit)
  }
  getById(kabloId:number){
    let apiUrl=this.baseUrl+"KesitYapisi/GetById?id="+kabloId
    return this.httpClient.get<SingleResponseModel<KesitYapisi>>(apiUrl)

  }
  update(kesit:KesitYapisi):Observable<ResponseModel>{
    return this.httpClient.put<ResponseModel>(this.baseUrl+"KesitYapisi/Update",kesit)
  }
}
