import { Injectable } from '@angular/core';
import { Process } from '../Models/process';
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
  baseUrl="https://localhost:7289/api/Process"

  getSurecler():Observable<ListResponseModel<Process>>{
    let apiUrl=this.baseUrl+"/GetAll"
    return this.httpClient.get<ListResponseModel<Process>>(apiUrl)
  }
  getAllById(isEmriId:number):Observable<ListResponseModel<Process>>{
    let apiUrl=this.baseUrl+"/GetAllByIsEmriId"
    return this.httpClient.get<ListResponseModel<Process>>(apiUrl+"?id="+isEmriId)
  }
  getById(id:number):Observable<SingleResponseModel<Process>>{
    let apiUrl=this.baseUrl+"/GetById"
    return this.httpClient.get<SingleResponseModel<Process>>(apiUrl+"?id="+id)
  }
  Add(process:Process):Observable<ResponseModel>{
    let apiUrl =  this.baseUrl+"/Add";

    return this.httpClient.post<ResponseModel>(apiUrl,process);
  }
  update(process:Process):Observable<ResponseModel>{
    return this.httpClient.put<ResponseModel>(this.baseUrl+"Process/Update",process)
  }
}
