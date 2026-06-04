import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ProductListComponent } from './features/admin/products/product-list/product-list.component';
import { ProductAddComponent } from './features/admin/products/product-add/product-add.component';
import { ProductEditComponent } from './features/admin/products/product-edit/product-edit.component';
import { CategoryListComponent } from './features/admin/categories/category-list/category-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin/products', component: ProductListComponent },
  { path: 'admin/products/add', component: ProductAddComponent },
  { path: 'admin/products/edit/:id', component: ProductEditComponent },
  { path: 'admin/categories', component: CategoryListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
