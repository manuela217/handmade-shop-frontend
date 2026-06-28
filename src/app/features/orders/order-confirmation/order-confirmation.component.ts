import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../../core/services/order.service';
import { ShoppingCartService } from '../../../core/services/shopping-cart.service';
import { Toast, ToastrService } from 'ngx-toastr';
import { OrderState } from '../../../shared/models/order-state';

@Component({
  selector: 'app-order-confirmation',
  standalone: false,
  templateUrl: './order-confirmation.component.html',
})

export class OrderConfirmationComponent implements OnInit{

  orderId:number = 0;

  constructor(
    private route:ActivatedRoute,
    private orderService:OrderService,
    private shoppingCartService:ShoppingCartService,
    private toastr:ToastrService,
  ) {}

  ngOnInit(): void {
    this.orderId = Number(
      this.route.snapshot.paramMap.get('id')
    );
    this.confirmOrder();
  }

  confirmOrder() {
    this.orderService.updateOrderState(
      this.orderId,OrderState.CONFIRMED
    )
    .subscribe({
      next: () => {
       this.shoppingCartService.clearCart();
       this.toastr.success('Compra realizada correctamente','Éxito');
      }
    });
  }
}
