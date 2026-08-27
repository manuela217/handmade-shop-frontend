import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../core/services/product.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Category } from '../../../../shared/models/category';
import { CategoryService } from '../../../../core/services/category.service';
import { SessionStorageService } from '../../../../core/services/session-storage.service';

@Component({
  selector: 'app-product-add',
  standalone: false,
  templateUrl: './product-add.component.html',
})

export class ProductAddComponent implements OnInit {
  id?: number;
  code:string = '';
  name:string = '';
  description:string = '';
  price:number = 0;
  urlImage:string = '';
  userId:string = '0';
  categoryId:string = '';
  user:number = 0;
  selectFile!:File;

  categories:Category [] = [];

  constructor(
    private productService:ProductService, 
    private router:Router, 
    private cdr:ChangeDetectorRef,
    private toastr:ToastrService,
    private categoryService:CategoryService,
    private sessionStorage:SessionStorageService,
    ) {

  }

  ngOnInit(): void {
    this.getCategories();
    this.user = this.sessionStorage.getItem('token').id;
    this.userId = this.user.toString();
  }

  addProduct() {
    const formData = new FormData();
    formData.append('code',this.code);
    formData.append('name',this.name);
    formData.append('description',this.description);
    formData.append('price',this.price.toString());
    if (this.selectFile) {
      formData.append('image', this.selectFile);
    }
    formData.append('urlImage',this.urlImage);
    formData.append('userId',this.userId);
    formData.append('categoryId',this.categoryId);

    this.productService.createProduct(formData).subscribe({
      next: () => {
        this.toastr.success('Producto añadido correctamente', 'Éxito')
        this.router.navigate(['/admin/products']);
      },
      error: (err) => {
        console.error('ERROR:', err);
        this.toastr.error('No se pudo añadir el producto', 'Error')
      }
    });
  }

  onFileSelect(event: Event) {
    const input = event.target as HTMLInputElement;
  
    if (input.files && input.files.length > 0) {
      this.selectFile = input.files[0];
    }
  }

  getCategories() {
    return this.categoryService.getCategoryList().subscribe({
      next: (data) => {
        this.categories = data;
        this.cdr.detectChanges();
      }
    });
  }
}
