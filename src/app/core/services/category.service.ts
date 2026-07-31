import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../../shared/models/category';
import { Observable } from 'rxjs';
import { HeaderService } from './header.service';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {

  private apiUrl:string = 'http://localhost:8080/api/v1/admin/categories';

  constructor(
    private http:HttpClient,
    private headerService:HeaderService
  ) {}

  getCategoryList():Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl,{ headers: this.headerService.getHeaders() });
  }

  createCategory(category:Category):Observable<Category> {
    return this.http.post<Category>(this.apiUrl,category,{ headers: this.headerService.getHeaders() });
  }

  deleteCategoryById(id:number):Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`,{ headers: this.headerService.getHeaders() });
  }

  getCategoryById(id:number):Observable<Category> {
    return this.http.get<Category>(`${this.apiUrl}/${id}`,{ headers: this.headerService.getHeaders() });
  }

  updateCategory(category: Category): Observable<Category> {
    return this.http.put<Category>(this.apiUrl, category,{ headers: this.headerService.getHeaders() });
  }

}
