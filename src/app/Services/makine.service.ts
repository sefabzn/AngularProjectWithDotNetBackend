import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../Models/listResponseModel';
import { Makine } from '../Models/makine';
import { ResponseModel } from '../Models/responseModel';
import { SingleResponseModel } from '../Models/singleResponseModel';
import { GunlukRapor } from '../Models/gunlukRapor';
import { RaporAnalizDto } from '../Models/raporAnaliz';

@Injectable({
  providedIn: 'root'
})
export class MakineService {

  baseUrl="https://localhost:7289/api/Makineler"
  constructor(private httpClient:HttpClient) { }

  getMakinas():Observable<ListResponseModel<Makine>>
  {
    return this.httpClient.get<ListResponseModel<Makine>>(this.baseUrl+"/GetAll")
  }
  getRaporByDateRange(makineId:number,startDate:Date,finishDate:Date){
    return this.httpClient.get<ListResponseModel<GunlukRapor>>(this.baseUrl+"/GetRaporByDateRange?makineId="+makineId+"&startDate="+startDate+"&finishDate="+finishDate)
  }
  add(makine:Makine):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.baseUrl+"/Add",makine)
  }
  update(makine:Makine):Observable<ResponseModel>{
    return this.httpClient.put<ResponseModel>(this.baseUrl+"/Update",makine)
  }
  getById(kabloId:number){
    let apiUrl=this.baseUrl+"/GetById?id="+kabloId
    return this.httpClient.get<SingleResponseModel<Makine>>(apiUrl)

  }
  getRaporAnalysis(makineId:number,startDate:Date,finishDate:Date){
    return this.httpClient.get<SingleResponseModel<RaporAnalizDto>>(this.baseUrl+"/GetRaporAnalysis?makineId="+makineId+"&startDate="+startDate+"&finishDate="+finishDate)
  }
  delete(makine:Makine):Observable<ResponseModel>
  {
    let apiUrl=this.baseUrl+"/Delete"
    return this.httpClient.post<ResponseModel>(apiUrl,makine)
  }

}
