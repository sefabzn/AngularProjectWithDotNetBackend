import { Injectable } from '@angular/core';
import { Surec } from '../Models/surec';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../Models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { ResponseModel } from '../Models/responseModel';
import { SingleResponseModel } from '../Models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class SurecService {
  constructor(private httpClient:HttpClient) { }
  baseUrl="https://localhost:7289/api/"

  getSurecler():Observable<ListResponseModel<Surec>>{
    let apiUrl=this.baseUrl+"Process/GetAll"
    return this.httpClient.get<ListResponseModel<Surec>>(apiUrl)
  }
  getAllById(isEmriId:number):Observable<ListResponseModel<Surec>>{
    let apiUrl=this.baseUrl+"Process/GetAllByIsEmriId"
    return this.httpClient.get<ListResponseModel<Surec>>(apiUrl+"?id="+isEmriId)
  }
  getById(id:number):Observable<SingleResponseModel<Surec>>{
    let apiUrl=this.baseUrl+"Process/GetById"
    return this.httpClient.get<SingleResponseModel<Surec>>(apiUrl+"?id="+id)
  }
  Add(surec:Surec):Observable<ResponseModel>{
    let apiUrl =  this.baseUrl+"Process/Add";

    return this.httpClient.post<ResponseModel>(apiUrl,surec);
  }
  update(surec:Surec):Observable<ResponseModel>{
    return this.httpClient.put<ResponseModel>(this.baseUrl+"Process/Update",surec)
  }
}
