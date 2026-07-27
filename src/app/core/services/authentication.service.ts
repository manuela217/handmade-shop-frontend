import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../shared/models/user';
import { Observable } from 'rxjs';
import { UserDto } from '../../shared/dto/user-dto';
import { JwtClient } from '../../shared/dto/jwt-client';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private apiUrl:string = 'http://localhost:8080/api/v1/security';

  constructor(
    private httpClient:HttpClient
  ) {}

  register(user:User):Observable<User> {
    return this.httpClient.post<User>(this.apiUrl + "/register", user);
  }

  login(userDto:UserDto):Observable<JwtClient> {
    return this.httpClient.post<JwtClient>(this.apiUrl + "/login", userDto);
  }
}
