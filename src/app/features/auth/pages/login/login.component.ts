import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../../core/services/authentication.service';
import { UserDto } from '../../../../shared/dto/user-dto';
import { SessionStorageService } from '../../../../core/services/session-storage.service';
import { Router } from '@angular/router';
import { UserType } from '../../../../shared/enums/user-type';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  email:string = '';
  password:string = '';


  ngOnInit(): void {

  }

  constructor(
    private authentication:AuthenticationService,
    private sessionStorage:SessionStorageService,
    private router:Router,
  ) {}

  login() {
    const userDto = new UserDto(this.email,this.password);

    this.authentication.login(userDto).subscribe(
      jwtClient  => {
        this.sessionStorage.setItem('token',jwtClient);
        if (jwtClient.userType === UserType.ADMIN) {
          this.router.navigate(['/admin/products']);
        } else {
          this.router.navigate(['/']);
        }
      });
  }
}
