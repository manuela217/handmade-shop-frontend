import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../core/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

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
  categoryId:string = '3'; //temporal
  selectFile!:File;

  constructor(private productService:ProductService, private router:Router, private activatedRoute:ActivatedRoute, private cdr: ChangeDetectorRef) {

  }

  ngOnInit(): void {

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
        console.log('PRODUCTO CREADO:', data);
        this.router.navigate(['/admin/products']);
      },
      error: (err) => {
        console.error('ERROR:', err);
      }
    });
  }

  onFileSelect(event:any) {
    this.selectFile = event.target.files[0];
  }
}
