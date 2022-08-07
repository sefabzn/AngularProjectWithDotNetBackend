import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GunlukRapor } from '../Models/gunlukRapor';
import { ListResponseModel } from '../Models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class GunlukRaporService {
  baseUrl="https://localhost:7289/api/"

  constructor(private httpClient:HttpClient) { }
  getGunlukRaporlar(makineIsmi:string,tarih:string):Observable<ListResponseModel<GunlukRapor>>{
    let apiUrl=this.baseUrl+"Makineler/GetGunlukRaporlar?makineIsmi="+makineIsmi+"&Tarih="+tarih
    return this.httpClient.get<ListResponseModel<GunlukRapor>>(apiUrl)
  }
}

