import { Component } from '@angular/core';
import { SessionStorageService } from '../../../core/services/session-storage.service';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
})

export class Navbar {

  constructor(
    private sessionStorageService:SessionStorageService,
  ) {}

  isLoggedIn(): boolean {
    return this.sessionStorageService.getItem('token') !== null;
  }
}
