import { Component, OnInit } from '@angular/core';
import { Product } from '../../../shared/models/product';
import { ProductService } from '../../../core/services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {

  products:Product[] = [];

  constructor(private productService:ProductService) {}

  ngOnInit(): void {
    
  }

  listProducts() {
    this.productService.getProducts().subscribe(
      data => {
        this.products = data
        console.log(data);
      }
    );
  }
}
