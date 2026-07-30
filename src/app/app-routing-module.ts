import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ProductListComponent } from './features/admin/products/product-list/product-list.component';
import { ProductAddComponent } from './features/admin/products/product-add/product-add.component';
import { ProductEditComponent } from './features/admin/products/product-edit/product-edit.component';
import { CategoryListComponent } from './features/admin/categories/category-list/category-list.component';
import { CategoryAddComponent } from './features/admin/categories/category-add/category-add.component/category-add.component';
import { CategoryEditComponent } from './features/admin/categories/category-edit/category-edit.component/category-edit.component';
import { DetailProductComponent } from './features/products/detail-product/detail-product.component';
import { SummaryOrderComponent } from './features/cart/summary-order/summary-order.component';
import { OrderConfirmationComponent } from './features/orders/order-confirmation/order-confirmation.component';
import { RegisterComponent } from './features/auth/pages/register/register.component';
import { LoginComponent } from './features/auth/pages/login/login.component';
import { LogoutComponent } from './features/auth/pages/logout/logout.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin/products', component: ProductListComponent },
  { path: 'admin/products/add', component: ProductAddComponent },
  { path: 'admin/products/edit/:id', component: ProductEditComponent },
  { path: 'admin/categories', component: CategoryListComponent },
  { path: 'admin/categories/add', component: CategoryAddComponent },
  { path: 'admin/categories/edit/:id', component: CategoryEditComponent },
  { path: 'products/detail/:id', component: DetailProductComponent },
  { path: 'cart/summary', component: SummaryOrderComponent },
  { path: 'orders/confirmation/:id', component: OrderConfirmationComponent },
  { path: 'user/register', component: RegisterComponent },
  { path: 'user/login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
