import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Product } from '../../../../shared/models/product';
import { ProductService } from '../../../../core/services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private cdr: ChangeDetectorRef,
    private toastr:ToastrService,
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

  deleteProductById(id:number) {
    if(confirm('¿Desea eliminar el producto?')) {
      this.productService.deleteProductById(id).subscribe({
        next: () => {
          this.toastr.success('Producto eliminado correctamente','Éxito');
          this.listProducts();
        },
        error: (err) => {
          console.error('ERROR DELETE:', err);
          this.toastr.error('No se pudo eliminar el producto','Error');
        }
      });
    }
  }

}