import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/Models/listResponseModel';
import { ResponseModel } from 'src/app/Models/responseModel';
import { YanginIsEmri } from 'src/app/Models/yangin-is-emri';
@Injectable({
  providedIn: 'root'
})
export class YanginIsEmriService {

  baseUrl="https://localhost:7289/api/"
  constructor(private httpClient:HttpClient) { }
  getIsEmirleri():Observable<ListResponseModel<YanginIsEmri>>{

    let apiUrl=this.baseUrl+"Yangin/YanginIsEmri/GetAll"
    return this.httpClient.get<ListResponseModel<YanginIsEmri>>(apiUrl)
  }
  addIsEmri(isEmri:YanginIsEmri):Observable<ResponseModel>{
    let apiUrl = this.baseUrl+"Yangin/YanginIsEmri/Add"
    return this.httpClient.post<ResponseModel>(apiUrl,isEmri)
  }
  deleteIsEmri(isEmri:YanginIsEmri):Observable<ResponseModel>
  {
    let apiUrl=this.baseUrl+"Yangin/YanginIsEmri/Delete"
    return this.httpClient.post<ResponseModel>(apiUrl,isEmri)
  }
}
