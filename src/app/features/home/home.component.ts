import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/models/product';
import { ProductService } from '../../core/services/product.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit{

  products: Product[] = [];

  constructor(private productService:ProductService) {

  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      data => this.products = data
    );
  }
}
