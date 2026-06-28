import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../../shared/models/order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiUrl:string = "http://localhost:8080/api/v1/orders";

  constructor(
    private httpClient:HttpClient,
    ) {}

  createOrder(order:Order):Observable<Order> {
    return this.httpClient.post<Order>(this.apiUrl,order);
  }

  updateOrderState(orderId:number,state:string):Observable<void> {
    return this.httpClient.put<void>(`${this.apiUrl}/${orderId}/state?state=${state}`,{});
  }

  getOrderByUser(userId:number):Observable<Order[]> {
    return this.httpClient.get<Order[]>(`${this.apiUrl}/by-user/${userId}`);
  }

  getOrderById(orderId:number):Observable<Order> {
    return this.httpClient.get<Order>(`${this.apiUrl}/${orderId}`);
  }
}
