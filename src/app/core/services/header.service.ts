import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SessionStorageService } from './session-storage.service';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {

  constructor(
    private sessionStorage: SessionStorageService,
  ) {}

  getHeaders(): HttpHeaders {

    const jwtClient = this.sessionStorage.getItem('token');

    return new HttpHeaders({
      'Authorization': jwtClient ? jwtClient.token : ''
    });

  }

}
