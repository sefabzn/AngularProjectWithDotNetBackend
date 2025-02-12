import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../Models/listResponseModel';
import { SevkIrsaliye } from '../Models/sevkIrsaliye';
import { SevkIrsaliyeCreateDto } from '../Models/sevkIrsaliyeCreateDto';
import { SevkIrsaliyeKalem } from '../Models/sevkIrsaliyeKalem';
import { ResponseModel } from '../Models/responseModel';
import { SingleResponseModel } from '../Models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class SevkIrsaliyeService {
  private apiUrl = 'https://localhost:7289/api/DeliveryNote';

constructor(private http: HttpClient) {}

createDeliveryNote(dto: SevkIrsaliyeCreateDto): Observable<ResponseModel> {
  return this.http.post<ResponseModel>(`${this.apiUrl}/Create`, dto);
}

getAllWithItemsAndCustomer(): Observable<ListResponseModel<SevkIrsaliye>> {
  return this.http.get<ListResponseModel<SevkIrsaliye>>(`${this.apiUrl}/GetAllWithItemsAndCustomerAsync`);
}

deleteDeliveryNote(deliveryNote: SevkIrsaliye): Observable<ResponseModel> {
  return this.http.delete<ResponseModel>(`${this.apiUrl}/Delete`, { body: deliveryNote });
}

updateDeliveryNote(dto: SevkIrsaliyeCreateDto): Observable<ResponseModel> {
  return this.http.put<ResponseModel>(`${this.apiUrl}/Update`, dto);
}

getDeliveryNoteById(id: number): Observable<SingleResponseModel<SevkIrsaliye>>  {
  return this.http.get<SingleResponseModel<SevkIrsaliye>>(`${this.apiUrl}/GetById/${id}`);
}

deleteDeliveryNoteItem(item: SevkIrsaliyeKalem): Observable<ResponseModel> {
  return this.http.delete<ResponseModel>(`${this.apiUrl}/DeleteItem`, { body: item });
}
}
