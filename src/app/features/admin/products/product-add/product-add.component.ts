import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../core/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Category } from '../../../../shared/models/category';
import { CategoryService } from '../../../../core/services/category.service';

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
  userId:string = '1'; //temporal
  categoryId:string = '';
  selectFile!:File;

  categories:Category [] = [];

  constructor(
    private productService:ProductService, 
    private router:Router, 
    private activatedRoute:ActivatedRoute, 
    private cdr:ChangeDetectorRef,
    private toastr:ToastrService,
    private categoryService:CategoryService,
    ) {

  }

  ngOnInit(): void {
    this.getCategories();
  }

  addProduct() {
    const formData = new FormData();
    formData.append('code',this.code);
    formData.append('name',this.name);
    formData.append('description',this.description);
    formData.append('price',this.price.toString());
    formData.append('image', this.selectFile);
    formData.append('urlImage',this.urlImage);
    formData.append('userId',this.userId);
    formData.append('categoryId',this.categoryId);

    this.productService.createProduct(formData).subscribe({
      next: (data) => {
        this.toastr.success('Producto añadido correctamente', 'Éxito')
        this.router.navigate(['/admin/products']);
      },
      error: (err) => {
        console.error('ERROR:', err);
        this.toastr.error('No se pudo añadir el producto', 'Error')
      }
    });
  }

  onFileSelect(event:any) {
    this.selectFile = event.target.files[0];
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
