import { Component } from '@angular/core';
import { AuthenticationService } from '../../../../core/services/authentication.service';
import { UserDto } from '../../../../shared/dto/user-dto';
import { SessionStorageService } from '../../../../core/services/session-storage.service';
import { Router } from '@angular/router';
import { UserType } from '../../../../shared/enums/user-type';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
})

export class LoginComponent {
  email:string = '';
  password:string = '';

  constructor(
    private authentication:AuthenticationService,
    private sessionStorage:SessionStorageService,
    private router:Router,
    private toastr: ToastrService,
  ) {}

  login() {
    const userDto = new UserDto(this.email, this.password);
  
    this.authentication.login(userDto).subscribe({
      next: (jwtClient) => {
        this.sessionStorage.setItem('token', jwtClient);
  
        if (jwtClient.userType === UserType.ADMIN) {
          this.router.navigate(['/admin/products']);
        } else {
          this.router.navigate(['/']);
        }
      },
      error: (err) => {
        console.error('ERROR:', err);
        this.toastr.error('Correo electrónico o contraseña incorrectos','Error');
      }
    });
  }
  
}
