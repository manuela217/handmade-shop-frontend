import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ShoppingCart } from '../../../shared/models/shopping-cart';
import { ShoppingCartService } from '../../../core/services/shopping-cart.service';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-summary-order',
  standalone: false,
  templateUrl: './summary-order.component.html',
})
export class SummaryOrderComponent implements OnInit {

  items:ShoppingCart [] = [];
  totalCart:number = 0;
  firstName:string = '';
  lastName:string = '';
  email:string = '';
  address:string = '';

  constructor(
    private cartService:ShoppingCartService,
    private cdr: ChangeDetectorRef,
    private userService:UserService,
  ) {}

  ngOnInit(): void {
    this.items = this.cartService.convertToListFromMap();
    this.totalCart = this.cartService.totalCart();
    this.getUserById(1); // Temporal hasta implementar autenticación
  }

  deleteItemCart(productId:number) {
    this.cartService.deleteItemCart(productId);
    this.items = this.cartService.convertToListFromMap();
    this.totalCart = this.cartService.totalCart();

    this.cdr.detectChanges();
  }

  getUserById(id:number) {
    this.userService.getUserById(id).subscribe(
      data => {
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.email = data.email;
        this.address = data.address;

        this.cdr.detectChanges();
      }
    );
  }
}
