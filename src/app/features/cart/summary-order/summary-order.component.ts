import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ShoppingCart } from '../../../shared/models/shopping-cart';
import { ShoppingCartService } from '../../../core/services/shopping-cart.service';
import { UserService } from '../../../core/services/user.service';
import { OrderProduct } from '../../../shared/models/order-product';
import { Order } from '../../../shared/models/order';
import { OrderState } from '../../../shared/models/order-state';
import { OrderService } from '../../../core/services/order.service';

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
  orderProducts:OrderProduct [] = [];
  userId:number = 1; // Temporal hasta implementar autenticación

  constructor(
    private cartService:ShoppingCartService,
    private cdr: ChangeDetectorRef,
    private userService:UserService,
    private orderService:OrderService,
  ) {}

  ngOnInit(): void {
    this.items = this.cartService.convertToListFromMap();
    this.totalCart = this.cartService.totalCart();
    this.getUserById(this.userId); 
  }

  generateOrder() {

    this.orderProducts = [];

    this.items.forEach(
      item => {
        let orderProduct = new OrderProduct(null,item.productId,item.quantity,item.price);
        this.orderProducts.push(orderProduct);
      }
    );

    let order = new Order(null,new Date(),this.orderProducts,this.userId,OrderState.CANCELLED);
    console.log('Pedido: ' + order.orderState);
    this.orderService.createOrder(order).subscribe(
      data => {
        console.log('Pedido creado con id: ' + data.id);
      }
    );
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
