import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from '../../../../core/services/session-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  standalone: false,
  templateUrl: './logout.component.html',
})
export class LogoutComponent implements OnInit {

  constructor(
    private sessionStorage:SessionStorageService,
    private router:Router,
  ) {}

  ngOnInit(): void {
    console.log('LogoutComponent: ' + this.sessionStorage.getItem('token'));
    this.sessionStorage.removeItem('token');
    console.log('LogoutComponent eliminado: ' + this.sessionStorage.getItem('token'));
    this.router.navigate(['/']);
  }
}
