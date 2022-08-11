import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../Models/listResponseModel';
import { Makine } from '../Models/makine';
import { ResponseModel } from '../Models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class MakineService {

  baseUrl="https://localhost:7289/api/"
  constructor(private httpClient:HttpClient) { }

  getMakinas():Observable<ListResponseModel<Makine>>
  {
    return this.httpClient.get<ListResponseModel<Makine>>(this.baseUrl+"Makineler/GetAll")
  }
  add(makine:Makine):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.baseUrl+"Makineler/Add",makine)
  }
  delete(makine:Makine):Observable<ResponseModel>
  {
    let apiUrl=this.baseUrl+"Makineler/Delete"
    return this.httpClient.post<ResponseModel>(apiUrl,makine)
  }
}
