import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Category } from '../../../../shared/models/category';
import { CategoryService } from '../../../../core/services/category.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-category-list',
  standalone: false,
  templateUrl: './category-list.component.html',
})
export class CategoryListComponent implements OnInit {

  categories:Category [] = [];

  constructor(
    private categoryService:CategoryService,
    private toastr:ToastrService,
    private cdr: ChangeDetectorRef
    ) {}

  ngOnInit(): void {
    this.listCategories();
  }

  listCategories() {
    this.categoryService.getCategoryList().subscribe({
      next: (data) => {
        console.log(data);
        this.categories = data;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('ERROR:', err);
        this.toastr.error('No se pudieron cargar las categorías','Error');
      }
    });
  }

}
