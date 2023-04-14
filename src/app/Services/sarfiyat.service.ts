import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../Models/listResponseModel';
import { Sarfiyat } from '../Models/sarfiyat';
import { ResponseModel } from '../Models/responseModel';
import { SingleResponseModel } from '../Models/singleResponseModel';
@Injectable({
  providedIn: 'root'
})
export class SarfiyatService {

  baseUrl="https://localhost:7289/api/"
  constructor(private httpClient:HttpClient) { }
  getAll():Observable<ListResponseModel<Sarfiyat>>{
    let apiUrl=this.baseUrl+"Sarfiyat/GetAll"
    return this.httpClient.get<ListResponseModel<Sarfiyat>>(apiUrl)
  }
  add(sarfiyat:Sarfiyat):Observable<ResponseModel>{
    let apiUrl=this.baseUrl+"Sarfiyat/Add"
    return this.httpClient.post<ResponseModel>(apiUrl,sarfiyat)

  }
  update(sarfiyat:Sarfiyat):Observable<ResponseModel>{
    return this.httpClient.put<ResponseModel>(this.baseUrl+"Sarfiyat/Update",sarfiyat)
  }
  getAllByDateRange(startDate:string,finishDate:string):Observable<ListResponseModel<Sarfiyat>>{
    let apiUrl=this.baseUrl+"Sarfiyat/GetAllByDateRange?startDate="+startDate+"&finishDate="+finishDate
    return this.httpClient.get<ListResponseModel<Sarfiyat>>(apiUrl)
  }
  delete(sarfiyat:Sarfiyat):Observable<ResponseModel>{

    let apiUrl=this.baseUrl+"Sarfiyat/Delete"

    return this.httpClient.post<ResponseModel>(apiUrl,sarfiyat)
  }
  getById(kabloId:number){
    let apiUrl=this.baseUrl+"Sarfiyat/GetById?id="+kabloId
    return this.httpClient.get<SingleResponseModel<Sarfiyat>>(apiUrl)

  }
}
