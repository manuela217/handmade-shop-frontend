import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from '../../../../core/services/session-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  standalone: false,
  template: '',
})

export class LogoutComponent implements OnInit {

  constructor(
    private sessionStorage:SessionStorageService,
    private router:Router,
  ) {}

  ngOnInit(): void {
    this.sessionStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
