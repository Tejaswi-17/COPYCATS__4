import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsComponent } from './components/products/products.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { MensComponent } from './components/products/mens/mens.component';
import { WomensComponent } from './components/products/womens/womens.component';
import { KidsComponent } from './components/products/kids/kids.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    ProductsComponent,
    SideNavComponent,
    WishlistComponent,
    MensComponent,
    WomensComponent,
    KidsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
