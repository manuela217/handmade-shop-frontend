import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from '../../../../../core/services/category.service';
import { Category } from '../../../../../shared/models/category';

@Component({
  selector: 'app-category-edit',
  standalone: false,
  templateUrl: './category-edit.component.html',
})
export class CategoryEditComponent implements OnInit {

  id?: number;
  name: string = '';

  constructor(
    private categoryService:CategoryService,
    private toastr:ToastrService,
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.getCategoryById();
  }

  getCategoryById() {
    this.activatedRoute.params.subscribe(
      category => {
        let id = category['id'];
        if(id) {
          this.categoryService.getCategoryById(id).subscribe(
            data => {
              this.id = data.id;
              this.name = data.name;

              this.cdr.detectChanges();
            }
          )
        }
      }
    );
  }

  updateCategory() {
    const category = new Category(this.id!, this.name);
    this.categoryService.updateCategory(category).subscribe({
      next: () => {
        this.toastr.success('Categoría actualizada correctamente','Éxito');
        this.router.navigate(['/admin/categories']);
      },
      error: (err) => {
        console.error('ERROR:', err);
        this.toastr.error('No se pudo actualizar la categoría','Error');
      }
    });
  }

}
