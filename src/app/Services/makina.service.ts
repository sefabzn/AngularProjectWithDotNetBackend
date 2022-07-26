import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../Models/listResponseModel';
import { Makina } from '../Models/makina';
import { ResponseModel } from '../Models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class MakinaService {

  apiUrl="https://localhost:7289/api/"
  constructor(private httpClient:HttpClient) { }

  getMakinas():Observable<ListResponseModel<Makina>>
  {
    return this.httpClient.get<ListResponseModel<Makina>>(this.apiUrl+"Makinalar/GetAll")
  }
  add(makina:Makina):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"Makinalar/Add",makina)
  }
}
