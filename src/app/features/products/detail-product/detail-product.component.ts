import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProductService } from '../../../core/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from '../../../core/services/shopping-cart.service';

@Component({
  selector: 'app-detail-product',
  standalone: false,
  templateUrl: './detail-product.component.html',
})
export class DetailProductComponent implements OnInit {

  id:number = 0;
  name:string = '';
  description:string = '';
  price:number = 0;
  urlImage:string = '';
  quantity:number = 1;

  ngOnInit(): void {
    this.getProductById();
  }

  constructor (
    private productService:ProductService,
    private activatedRoute:ActivatedRoute,
    private shoppingCartService:ShoppingCartService,
    private cdr: ChangeDetectorRef,
  ){}

  getProductById() {
    this.activatedRoute.params.subscribe(
      prod => {
        let id = prod['id'];
        if(id) {
          this.productService.getProductById(id).subscribe(
            data => {
              this.id = data.id;
              this.name = data.name;
              this.description = data.description;
              this.urlImage = data.urlImage;
              this.price = data.price;

              this.cdr.detectChanges();
            }
          );
        }
      }
    );
  }

  addCart(id:number) {
    console.log('id producto: ',id);
    console.log('nombre producto: ',this.name);
    console.log('precio producto: ',this.price);
    console.log('cantidad producto: ',this.quantity);
  }
}
