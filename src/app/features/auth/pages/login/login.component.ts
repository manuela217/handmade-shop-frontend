import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../../core/services/authentication.service';
import { UserDto } from '../../../../shared/dto/user-dto';
import { SessionStorageService } from '../../../../core/services/session-storage.service';

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
  ) {}

  login() {
    let userDto = new UserDto(this.email,this.password);
    this.authentication.login(userDto).subscribe(
      token => {
        console.log(token);
        this.sessionStorage.setItem('token',token);
      });
    console.log(userDto);
  }
}
