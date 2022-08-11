import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../Models/listResponseModel';
import { Sarfiyat } from '../Models/sarfiyat';
import { ResponseModel } from '../Models/responseModel';
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
  getAllByDate(tarih:any):Observable<ListResponseModel<Sarfiyat>>{
    let apiUrl=this.baseUrl+"Sarfiyat/GetAllByDate?tarih="+tarih
    return this.httpClient.get<ListResponseModel<Sarfiyat>>(apiUrl)
  }
  delete(sarfiyat:Sarfiyat):Observable<ResponseModel>{

    let apiUrl=this.baseUrl+"Sarfiyat/Delete"

    return this.httpClient.post<ResponseModel>(apiUrl,sarfiyat)
  }
}
