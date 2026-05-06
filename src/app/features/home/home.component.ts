import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Product } from '../../shared/models/product';
import { ProductService } from '../../core/services/product.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit{

  products: Product[] = [];

  constructor(
    private productService:ProductService,
    private cdr: ChangeDetectorRef
    ) {
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = [...data];
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('ERROR HOME:', err);
      }
    });
  }

}