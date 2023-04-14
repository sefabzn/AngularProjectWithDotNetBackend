import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../Models/listResponseModel';
import { MakineKesitHizTablosu } from '../Models/makineKesitHizTablosu';

@Injectable({
  providedIn: 'root'
})
export class MakineKesitHizTablosuService {

  baseUrl="https://localhost:7289/api/"

  constructor(private httpClient:HttpClient) { }
  
  getAll():Observable<ListResponseModel<MakineKesitHizTablosu>>{
    let apiUrl =this.baseUrl+"MakineKesitHizTablosu/GetAll"
    return this.httpClient.get<ListResponseModel<MakineKesitHizTablosu>>(apiUrl)
  }
  
}
