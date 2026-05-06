import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomeComponent } from './features/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { Navbar } from './shared/components/navbar/navbar.component';
import { Footer } from './shared/components/footer/footer.component';
import { ProductListComponent } from './features/products/product-list/product-list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [App, HomeComponent, Navbar, Footer, ProductListComponent],
  imports: [BrowserModule, CommonModule, AppRoutingModule, HttpClientModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
