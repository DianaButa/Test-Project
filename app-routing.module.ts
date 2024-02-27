import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { NavbarComponent } from './navbar/navbar.component';
import { ActivatedRoute } from '@angular/router';
import { TableComponent } from './table/table.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './table/product-list/product-list.component';
import { AddproductComponent } from './table/product-list/addproduct/addproduct.component';


const routes: Routes = [
  { path: 'table', component: TableComponent},
  { path:'navbar/navbar', component: NavbarComponent},
  { path: 'home', component:HomeComponent},
  { path: 'product-list', component: ProductListComponent},
  {path : 'addproduct', component : AddproductComponent}
 

 ]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule]
})
export class AppRoutingModule {
  
 }
