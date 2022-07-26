import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Kullanici } from '../Models/kullanici';
import { ListResponseModel } from '../Models/listResponseModel';
@Injectable({
  providedIn: 'root'
})
export class KullaniciService {
  baseUrl="https://localhost:7289/api"

  constructor(private httpClient:HttpClient) { }
  
  getKullanicis():Observable<ListResponseModel<Kullanici>>
  {
    let apiUrl=this.baseUrl+"/Kullanicilar/GetAll"
    return this.httpClient.get<ListResponseModel<Kullanici>>(apiUrl)
  }
  getKullanicisByMakineId(makineId:number):Observable<ListResponseModel<Kullanici>>
  {
    let apiUrl=this.baseUrl+"/Kullanicilar/GetAllByMakineId?id="+makineId
    return this.httpClient.get<ListResponseModel<Kullanici>>(apiUrl)
  }
}
