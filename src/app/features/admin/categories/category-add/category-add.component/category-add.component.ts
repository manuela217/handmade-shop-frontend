import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../../../core/services/category.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../../../../../shared/models/category';

@Component({
  selector: 'app-category-add',
  standalone: false,
  templateUrl: './category-add.component.html',
})
export class CategoryAddComponent implements OnInit {

  id?: number;
  name:string = '';

  constructor(
    private categoryService:CategoryService,
    private toastr:ToastrService,
    private router:Router,
    private activateRoute:ActivatedRoute,
  ) {}

  ngOnInit(): void {
  }

  addCategory() {
    let category = new Category(null as any, this.name);

    this.categoryService.createCategory(category).subscribe({
      next: (data) => {
        this.toastr.success('Categoría añadida correctamente', 'Éxito');
        this.router.navigate(['/admin/categories']);
      },
      error: (err) => {
        console.error('ERROR:', err);
        this.toastr.error('No se pudo añadir la categoría', 'Error')
      }
    });
  }
}
