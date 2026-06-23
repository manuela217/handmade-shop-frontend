import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../shared/models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private apiUrl:string = 'http://localhost:8080/api/v1/users';

  constructor(
    private httpClient:HttpClient
  ) {}

  getUserById(id:number):Observable<User> {
    return this.httpClient.get<User>(`${this.apiUrl}/${id}`);
  }

}
