import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../../core/services/product.service';

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

  ngOnInit(): void {
    this.getProductById();
  }

  constructor(private productService:ProductService, private router:Router, private activatedRoute:ActivatedRoute, private cdr: ChangeDetectorRef) {

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
    formData.append('urlImage', this.urlImage);
    formData.append('userId', this.userId.toString());
    formData.append('categoryId', this.categoryId.toString());
  
    this.productService.updateProduct(formData).subscribe(
      () => {
        this.router.navigate(['/admin/products']);
      }
    );
  
  }
}
