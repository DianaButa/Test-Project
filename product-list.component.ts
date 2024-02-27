import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { ProductListService } from '../../domain/table/service/product-list.service';
import { ProductLisDTO } from '../../domain/table/models/productlist.model';
import { MatDialog } from "@angular/material/dialog";
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { ToastrService } from 'ngx-toastr';
import { animate, style, transition, trigger, useAnimation } from '@angular/animations';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    animations: [
        trigger('flyInOut', [
          transition(':enter', [
            style({ opacity: 0, transform: 'translateX(-100%)' }),
            animate('0.5s ease-in', style({ opacity: 1, transform: 'translateX(0)' }))
          ]),
          transition(':leave', [
            animate('0.5s ease-out', style({ opacity: 0, transform: 'translateX(100%)' }))
          ])
        ])
      ]
})
export class ProductListComponent implements OnInit {
    displayedCompactTable = new MatTableDataSource<ProductLisDTO>();
    displayColumns = [
        "nrCrt",
        "name",
        "price",
        "description",
        "category",
        "ingredients",
        "companyName",
        "companyAdress",
        "delete"
    ];
    private subscriptions: Subscription[] = new Array<Subscription>();
    public allProducts = new Array< ProductLisDTO>();
    

    constructor(private productListService: ProductListService,
                private dialog : MatDialog,
                private toastrService: ToastrService,
                
        
        ) { }

    ngOnInit() {
        this.getAllProducts();
        //this._subscribeToGetAllProducts();
    }

    ngOnDestroy(): void {
		this.subscriptions.forEach(sub => sub.unsubscribe());
	}

    getAllProducts(): void {
        const subscription = this.productListService.getAllProducts$().subscribe(
            result => {
                this.allProducts = result;
                this.displayedCompactTable.data = this.allProducts;
            },
            error => {
                console.error('Error fetching products:', error);
            }
        );
        this.subscriptions.push(subscription);
    }


    protected DeleteProduct(name: string) {
		const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
			data: { name: name },
		});

		dialogRef.afterClosed().subscribe(result => {
			if (result) {
				const sub = this.productListService.deleteProduct$(name).subscribe({
					next: _ => {this.toastrService.success(
                        "User deleted successfully",
                        "Success!"
                    );
						this._subscribeToGetAllProducts();
					},
					error: _ =>
                    this.toastrService.error("Couldn't delete product", "Error!"),
				});
                
				this.subscriptions.push(sub);
			}
		});
	}

    private _subscribeToGetAllProducts(): void {
		const subscr = this.productListService.getAllProducts$().subscribe(
			result => {
				this.allProducts = result;
				this.displayedCompactTable.data = this.allProducts;
			},
			error => {
				console.log(error);
			}
		);
		this.subscriptions.push(subscr);
		this.allProducts.forEach(x => console.log(x));
	}
}