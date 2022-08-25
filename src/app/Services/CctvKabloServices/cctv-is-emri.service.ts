import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/Models/listResponseModel';
import { CctvIsEmri } from 'src/app/Models/cctvIsEmri';
import { ResponseModel } from 'src/app/Models/responseModel';
@Injectable({
  providedIn: 'root'
})
export class CctvIsEmriService {
  
  baseUrl="https://localhost:7289/api/"
  constructor(private httpClient:HttpClient) { }
  getIsEmirleri():Observable<ListResponseModel<CctvIsEmri>>{

    let apiUrl=this.baseUrl+"Cctv/CctvIsEmri/GetAll"
    return this.httpClient.get<ListResponseModel<CctvIsEmri>>(apiUrl)
  }
  addIsEmri(isEmri:CctvIsEmri):Observable<ResponseModel>{
    let apiUrl = this.baseUrl+"Cctv/CctvIsEmri/Add"
    return this.httpClient.post<ResponseModel>(apiUrl,isEmri)
  }
  deleteIsEmri(isEmri:CctvIsEmri):Observable<ResponseModel>
  {
    let apiUrl=this.baseUrl+"Cctv/CctvIsEmri/Delete"
    return this.httpClient.post<ResponseModel>(apiUrl,isEmri)
  }
}
