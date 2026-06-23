import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ShoppingCart } from '../../../shared/models/shopping-cart';
import { ShoppingCartService } from '../../../core/services/shopping-cart.service';

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
  ) {}

  ngOnInit(): void {
    this.items = this.cartService.convertToListFromMap();
    this.totalCart = this.cartService.totalCart();
  }

  deleteItemCart(productId:number) {
    this.cartService.deleteItemCart(productId);
    this.items = this.cartService.convertToListFromMap();
    this.totalCart = this.cartService.totalCart();

    this.cdr.detectChanges();
  }
}
