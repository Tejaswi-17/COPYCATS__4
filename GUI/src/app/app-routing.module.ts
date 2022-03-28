import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { KidsComponent } from './components/products/kids/kids.component';
import { MensComponent } from './components/products/mens/mens.component';
import { ProductsComponent } from './components/products/products.component';
import { WomensComponent } from './components/products/womens/womens.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: DashboardComponent},
  {path: 'products', component: ProductsComponent, children: [
  {path: 'men', component: MensComponent},
  {path: 'women', component: WomensComponent},
  {path: 'kids', component: KidsComponent},

  ]},
  {path: 'inventory', component: WishlistComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
