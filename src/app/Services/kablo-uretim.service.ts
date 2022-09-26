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
  getKablolarbyDateRange(startDate:any,finishDate:any):Observable<ListResponseModel<KabloUretim>>{
    let apiUrl=this.baseUrl+"KabloUretim/GetAllByDateRange?start="+startDate+"&finish="+finishDate
    return this.httpClient.get<ListResponseModel<KabloUretim>>(apiUrl)
  }
  getKablolarbyDateRangeAndMakine(startDate:any,finishDate:any,makineId:number):Observable<ListResponseModel<KabloUretim>>{
    let apiUrl=this.baseUrl+"KabloUretim/GetAllByDateRangeAndMakine?start="+startDate+"&finish="+finishDate+"&makineId="+makineId
    return this.httpClient.get<ListResponseModel<KabloUretim>>(apiUrl)
  }
  add(kablo:KabloUretim):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.baseUrl+"KabloUretim/Add",kablo)
  }
  delete(kablo:KabloUretim){
    return this.httpClient.post<ResponseModel>(this.baseUrl+"KabloUretim/Delete",kablo)
  }
}
