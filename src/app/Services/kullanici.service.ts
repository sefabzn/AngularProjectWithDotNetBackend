import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Kullanici } from '../Models/kullanici';
import { ListResponseModel } from '../Models/listResponseModel';
import { ResponseModel } from '../Models/responseModel';
import { SingleResponseModel } from '../Models/singleResponseModel';
@Injectable({
  providedIn: 'root'
})
export class KullaniciService {
  baseUrl="https://localhost:7289/api/"

  constructor(private httpClient:HttpClient) { }
  
  getKullanicis():Observable<ListResponseModel<Kullanici>>
  {
    let apiUrl=this.baseUrl+"Kullanicilar/GetAll"
    return this.httpClient.get<ListResponseModel<Kullanici>>(apiUrl)
  }
  getKullanicisByMakineId(makineId:number):Observable<ListResponseModel<Kullanici>>
  {
    let apiUrl=this.baseUrl+"Kullanicilar/GetAllByMakineId?id="+makineId
    return this.httpClient.get<ListResponseModel<Kullanici>>(apiUrl)
  }
  delete(kullanici:Kullanici):Observable<ResponseModel>
  {
    let apiUrl=this.baseUrl+"Kullanicilar/Delete"
    return this.httpClient.post<ResponseModel>(apiUrl,kullanici)
  }
  getById(kabloId:number){
    let apiUrl=this.baseUrl+"Kullanicilar/GetById?id="+kabloId
    return this.httpClient.get<SingleResponseModel<Kullanici>>(apiUrl)

  }
  update(kullanici:Kullanici):Observable<ResponseModel>{
    return this.httpClient.put<ResponseModel>(this.baseUrl+"Kullanicilar/Update",kullanici)
  }
}
