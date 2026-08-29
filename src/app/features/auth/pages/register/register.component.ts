import { Component } from '@angular/core';
import { AuthenticationService } from '../../../../core/services/authentication.service';
import { Router } from '@angular/router';
import { User } from '../../../../shared/models/user';
import { UserType } from '../../../../shared/enums/user-type';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
})

export class RegisterComponent {

  username:string = '';
  name:string = '';
  surname:string = '';
  email:string = '';
  address:string = '';
  cellphone:string = '';
  password:string = '';
  userType:string = '';
  
  constructor(
    private authentication:AuthenticationService,
    private router:Router,
    private toastr:ToastrService,
  ) {}

  register() {
    this.username = this.email;
    this.userType = UserType.USER;

    const user = new User (
      null, 
      this.username,
      this.name,
      this.surname,
      this.email,
      this.address,
      this.cellphone,
      this.password,
      this.userType);
      
    this.authentication.register(user).subscribe({
      next: (res) => {
        this.toastr.success('Usuario registrado', 'Éxito');
        this.router.navigate(['user/login']);
      },
      error: () => {
        this.toastr.error('No se pudo registrar el usuario', 'Error');
      }
    });
  }
}
