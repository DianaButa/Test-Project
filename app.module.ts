import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { TableComponent } from './table/table.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './table/product-list/product-list.component';
import { AddproductComponent } from './table/product-list/addproduct/addproduct.component';
import { HttpService } from './http.service';
// import { AddproductService } from './domain/table/service/addproduct.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ToastrModule} from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { ConfirmationDialogComponent } from './table/product-list/confirmation-dialog/confirmation-dialog.component';
import {  MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [				
    AppComponent,
    NavbarComponent,
    TableComponent,
    HomeComponent,
    ProductListComponent,
    AddproductComponent,
    ConfirmationDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    MatIconModule,
    HttpClientModule,
    MatTableModule, 
    MatDialogModule,
    CommonModule,
    FormsModule, 
    ToastrModule.forRoot(),
    ReactiveFormsModule, 
    BrowserAnimationsModule
    
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
