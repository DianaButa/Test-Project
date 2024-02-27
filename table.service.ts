import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../../http.service';
import { TestDTO } from '../models/test.model';

@Injectable({ providedIn: "root" })
export class TableService {
	private url = "test"; 

	constructor(private httpService: HttpService) {}

	public getAllNames$(): Observable<Array<TestDTO>> {
		return this.httpService.get<Array<TestDTO>>(`${this.url}`); 
	}
}
