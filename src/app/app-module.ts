import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomeComponent } from './features/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { Navbar } from './shared/components/navbar/navbar.component';
import { Footer } from './shared/components/footer/footer.component';
import { ProductListComponent } from './features/admin/products/product-list/product-list.component';
import { CommonModule } from '@angular/common';
import { HeaderAdmin } from './shared/components/header-admin/header-admin.component';
import { ProductAddComponent } from './features/admin/products/product-add/product-add.component';
import { FormsModule } from '@angular/forms';
import { ProductEditComponent } from './features/admin/products/product-edit/product-edit.component';
import { ToastrModule } from 'ngx-toastr';
import { CategoryListComponent } from './features/admin/categories/category-list/category-list.component';
import { CategoryAddComponent } from './features/admin/categories/category-add/category-add.component/category-add.component';
import { CategoryEditComponent } from './features/admin/categories/category-edit/category-edit.component/category-edit.component';
import { DetailProductComponent } from './features/products/detail-product/detail-product.component';
import { SummaryOrderComponent } from './features/cart/summary-order/summary-order.component';
import { OrderConfirmationComponent } from './features/orders/order-confirmation/order-confirmation.component';
import { RegisterComponent } from './features/auth/pages/register/register.component';
import { LoginComponent } from './features/auth/pages/login/login.component';

@NgModule({
  declarations: [
    App,
    HomeComponent,
    Navbar,
    Footer,
    ProductListComponent,
    HeaderAdmin,
    ProductAddComponent,
    ProductEditComponent,
    CategoryListComponent,
    CategoryAddComponent,
    CategoryEditComponent,
    DetailProductComponent,
    SummaryOrderComponent,
    OrderConfirmationComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
