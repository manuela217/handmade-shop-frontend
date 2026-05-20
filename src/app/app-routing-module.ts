import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ProductListComponent } from './features/admin/products/product-list/product-list.component';
import { ProductAddComponent } from './features/admin/products/product-add/product-add.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin/products', component: ProductListComponent },
  { path: 'admin/products/add', component: ProductAddComponent },
  { path: 'admin/products/update/:id', component: ProductAddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
