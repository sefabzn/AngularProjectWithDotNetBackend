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

  apiUrl="https://localhost:7289/api/"
  constructor(private httpClient:HttpClient) { }

  getMakinas():Observable<ListResponseModel<Makine>>
  {
    return this.httpClient.get<ListResponseModel<Makine>>(this.apiUrl+"Makineler/GetAll")
  }
  add(makina:Makine):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"Makineler/Add",makina)
  }
}
