import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../../core/services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-edit',
  standalone: false,
  templateUrl: './product-edit.component.html',
})
export class ProductEditComponent implements OnInit {
  id?: number;
  code:string = '';
  name:string = '';
  description:string = '';
  price:number = 0;
  urlImage:string = '';
  userId:string = '1'; //temporal
  categoryId:string = '3'; //temporal
  selectFile!: File;

  ngOnInit(): void {
    this.getProductById();
  }

  constructor(
    private productService:ProductService, 
    private router:Router, 
    private activatedRoute:ActivatedRoute, 
    private cdr: ChangeDetectorRef,
    private toastr:ToastrService
    ) {

  }
  
  getProductById() {
    this.activatedRoute.params.subscribe(
      prod => {
        let id = prod['id'];
        if (id) {
          this.productService.getProductById(id).subscribe(
            data => {
              this.id = data.id;
              this.code = data.code;
              this.name = data.name;
              this.description = data.description;
              this.urlImage = data.urlImage;
              this.price = data.price;
              this.userId = data.userId;
              this.categoryId = data.categoryId;
              this.cdr.detectChanges();
            }
          );
        }
      }
    );
  }

  updateProduct() {

    const formData = new FormData();
  
    formData.append('id', this.id!.toString());
    formData.append('code', this.code);
    formData.append('name', this.name);
    formData.append('description', this.description);
    formData.append('price', this.price.toString());
    if(this.selectFile){
      formData.append('image', this.selectFile);
    }
    formData.append('urlImage', this.urlImage);
    formData.append('userId', this.userId.toString());
    formData.append('categoryId', this.categoryId.toString());
  
    this.productService.updateProduct(formData).subscribe({
      next: () => {
        this.toastr.success('Producto editado correctamente','Éxito');
        this.router.navigate(['/admin/products']);
      },
      error: (err) => {
        console.error('ERROR:', err);
        this.toastr.error('No se pudo actualizar el producto','Error');
      }
    });
  
  }

  onFileSelect(event:any) {
    this.selectFile = event.target.files[0];
  }
}
