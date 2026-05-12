import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../core/services/product.service';

@Component({
  selector: 'app-product-add',
  standalone: false,
  templateUrl: './product-add.component.html',
})
export class ProductAddComponent implements OnInit {

  id:number = 0;
  code:string = '';
  name:string = '';
  description:string = '';
  price:number = 0;
  urlImage:string = '';
  userId:string = '1'; //temporal
  categoryId:string = '3'; //temporal

  constructor(private productService:ProductService) {

  }

  ngOnInit(): void {

  }

  addProduct() {
    const formData = new FormData();
    formData.append('id',this.id.toString());
    formData.append('code',this.code);
    formData.append('name',this.name);
    formData.append('description',this.description);
    formData.append('price',this.price.toString());
    formData.append('urlImage',this.urlImage);
    formData.append('userId',this.userId);
    formData.append('categoryId',this.categoryId);

  }
}
