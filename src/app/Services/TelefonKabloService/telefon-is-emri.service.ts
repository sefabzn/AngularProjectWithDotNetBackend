import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/Models/listResponseModel';
import { ResponseModel } from 'src/app/Models/responseModel';
import { TelefonIsEmri } from 'src/app/Models/telefon-is-emri';
HttpClient
@Injectable({
  providedIn: 'root'
})
export class TelefonIsEmriService {
  baseUrl="https://localhost:7289/api/"
 
  constructor(private httpClient:HttpClient) { }
  getIsEmirleri():Observable<ListResponseModel<TelefonIsEmri>>{

    let apiUrl=this.baseUrl+"Telefon/TelefonIsEmri/GetAll"
    return this.httpClient.get<ListResponseModel<TelefonIsEmri>>(apiUrl)
  }
  addIsEmri(isEmri:TelefonIsEmri):Observable<ResponseModel>{
    let apiUrl = this.baseUrl+"Telefon/TelefonIsEmri/Add"
    return this.httpClient.post<ResponseModel>(apiUrl,isEmri)
  }
  deleteIsEmri(isEmri:TelefonIsEmri):Observable<ResponseModel>
  {
    let apiUrl=this.baseUrl+"Telefon/TelefonIsEmri/Delete"
    return this.httpClient.post<ResponseModel>(apiUrl,isEmri)
  }
}
