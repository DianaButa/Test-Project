import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { AddproductService } from '../../../domain/table/service/addproduct.service';
import { ProductLisDTO } from '../../../domain/table/models/productlist.model';
import { ProductListService } from '../../../domain/table/service/product-list.service';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
  displayedCompactTable = new MatTableDataSource<ProductLisDTO>();
  allProducts: ProductLisDTO[] = [];
  private subscriptions: Subscription[] = [];
  Product : ProductLisDTO= {
    name: '',
    price: '',
    description: '',
    category: '',
    ingredients: '',
    companyName: '',
    companyAdress: '',
    nrCrt:'',
  };

  constructor(private router: Router, private productListService: ProductListService) { }

  addProduct() : void {
    this.productListService.AddProduct(this.Product).subscribe(
      () => {
       
        this.Product = {
          name: '',
          price: '',
          description: '',
          category: '',
          ingredients: '',
          companyName: '',
          companyAdress: '',
          nrCrt:'',
        };
        
        this.router.navigate(['/product-list']);
      },
      error => {
        console.error('Error adding product:', error);
        // Handle error
      }
    );
  }

     AddProduct(product: ProductLisDTO): void {
        const subscription = this.productListService.AddProduct(product).subscribe(
            newProduct => {
                this.allProducts.push(newProduct);
                this.displayedCompactTable.data = this.allProducts;
            },
            error => {
                console.error('Error adding product:', error);
            }
        );
        this.subscriptions.push(subscription);
    }
}
