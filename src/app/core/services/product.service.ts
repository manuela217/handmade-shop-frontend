import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../shared/models/product';
import { HeaderService } from './header.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private apiUrl:string = "http://localhost:8080/api/v1/admin/products";

  constructor(
    private httpClient:HttpClient,
    private headerService:HeaderService,
  ) {}

  getProducts():Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiUrl,{ headers: this.headerService.getHeaders() });
  }

  createProduct(formData:any):Observable<any> {
    return this.httpClient.post<Product>(this.apiUrl, formData,{ headers: this.headerService.getHeaders() });
  }

  deleteProductById(id:number):Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/${id}`,{ headers: this.headerService.getHeaders() });
  }

  getProductById(id:number):Observable<Product> {
    return this.httpClient.get<Product>(`${this.apiUrl}/${id}`,{ headers: this.headerService.getHeaders() });
  }

  updateProduct(formData:any): Observable<any> {
    return this.httpClient.put(this.apiUrl, formData,{ headers: this.headerService.getHeaders() });
  }
}
