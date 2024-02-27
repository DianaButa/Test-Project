import { Component, OnInit } from '@angular/core';
import { TestDTO } from '../domain/table/models/test.model';
import { MatTableDataSource, MatHeaderRowDef } from "@angular/material/table";
import { TableService } from '../domain/table/service/table.service';
import { Subscription } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { MatIconButton } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public displayedCompactTable = new MatTableDataSource<TestDTO>();
  columndefs : any[] = ['name','code'];
  public displayColumns =[
    "id",
    "firstName",
    "lastName",
    "adress",
    "productList"
  ]
  private _subscriptions: Subscription[] = new Array<Subscription>();
  public allTestUser = new Array<TestDTO>()

  
  constructor(private tableService: TableService,) { }

  ngOnInit() {
    this._subscribeToGetTestUser();
  }
  private _subscribeToGetTestUser(): void {
		const subscr = this.tableService.getAllNames$().subscribe(
			result => {
				this.allTestUser = result;
				this.displayedCompactTable.data = this.allTestUser;
			},
			error => {
				console.log(error);
			}
		);
		this._subscriptions.push(subscr);
		this.allTestUser.forEach(x => console.log(x));
	}


}
