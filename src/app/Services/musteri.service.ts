import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../Models/listResponseModel';
import { ResponseModel } from '../Models/responseModel';
import { SingleResponseModel } from '../Models/singleResponseModel';
import { Musteri } from '../Models/musterı';

@Injectable({
  providedIn: 'root'
})
export class MusteriService {
  private apiUrl = 'https://localhost:7289/api/customer/';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ListResponseModel<Musteri>> {
    return this.httpClient.get<ListResponseModel<Musteri>>(this.apiUrl + 'getall');
  }

  getById(id: number): Observable<SingleResponseModel<Musteri>> {
    return this.httpClient.get<SingleResponseModel<Musteri>>(this.apiUrl + 'getbyid/' + id);
  }

  add(customer: Musteri): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'add', customer);
  }

  update(customer: Musteri): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'update', customer);
  }

  delete(customer: Musteri): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'delete', customer);
  }
}
