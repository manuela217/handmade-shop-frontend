import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Product } from '../../../shared/models/product';
import { ProductService } from '../../../core/services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.listProducts();
  }

  listProducts() {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = [...data];
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('ERROR:', err);
      }
    });
  }

}