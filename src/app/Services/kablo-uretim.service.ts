import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { KabloUretim } from '../Models/kabloUretim';
import { ListResponseModel } from '../Models/listResponseModel';
import { ResponseModel } from '../Models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class KabloUretimService {

  baseUrl="https://localhost:7289/api/"
  constructor(private httpClient:HttpClient) { }

  getKablolar():Observable<ListResponseModel<KabloUretim>>{
    let apiUrl=this.baseUrl+"KabloUretim/GetAll"
    return this.httpClient.get<ListResponseModel<KabloUretim>>(apiUrl)
  }
  getKablolarbyDate(tarih:any):Observable<ListResponseModel<KabloUretim>>{
    let apiUrl=this.baseUrl+"KabloUretim/GetAllByDate?tarih="+tarih
    return this.httpClient.get<ListResponseModel<KabloUretim>>(apiUrl)
  }
  add(kablo:KabloUretim):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.baseUrl+"KabloUretim/Add",kablo)
  }
}
