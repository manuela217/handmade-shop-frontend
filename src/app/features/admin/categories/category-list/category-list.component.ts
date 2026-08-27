import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Category } from '../../../../shared/models/category';
import { CategoryService } from '../../../../core/services/category.service';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

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
        this.categories = data;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('ERROR:', err);
        this.toastr.error('No se pudieron cargar las categorías','Error');
      }
    });
  }

  deleteCategoryById(id:number) {
    Swal.fire({
      title: "¿Eliminar categoría?",
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#8d917b",
      cancelButtonColor: "#bfc4ab",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        this.categoryService.deleteCategoryById(id).subscribe({
          next: () => {
            this.toastr.success('Categoría eliminada correctamente','Éxito');
            this.listCategories();
          },
          error: (err) => {
            console.error('ERROR DELETE:', err);
            this.toastr.error('No se pudo eliminar la categoría','Error');
          }
        });
      }
    });
  }

}
