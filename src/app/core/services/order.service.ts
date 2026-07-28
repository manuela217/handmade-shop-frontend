import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../../shared/models/order';
import { Observable } from 'rxjs';
import { HeaderService } from './header.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiUrl:string = "http://localhost:8080/api/v1/orders";

  constructor(
    private httpClient:HttpClient,
    private headerService:HeaderService,
  ) {}

  createOrder(order:Order):Observable<Order> {
    return this.httpClient.post<Order>(this.apiUrl,order,{ headers:this.headerService.headers });
  }

  updateOrderState(orderId:number,state:string):Observable<void> {
    return this.httpClient.put<void>(`${this.apiUrl}/${orderId}/state?state=${state}`,{},{ headers:this.headerService.headers });
  }

  getOrderByUser(userId:number):Observable<Order[]> {
    return this.httpClient.get<Order[]>(`${this.apiUrl}/by-user/${userId}`,{ headers:this.headerService.headers });
  }

  getOrderById(orderId:number):Observable<Order> {
    return this.httpClient.get<Order>(`${this.apiUrl}/${orderId}`,{ headers:this.headerService.headers });
  }
}
