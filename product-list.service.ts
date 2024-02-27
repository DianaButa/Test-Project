import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../../http.service';
import { ProductLisDTO } from '../models/productlist.model';

@Injectable({ providedIn: "root" })
export class ProductListService {
	private url = "ProductList"; 

	constructor(private httpService: HttpService) {}

	public getAllProducts$(): Observable<Array<ProductLisDTO>> {
		return this.httpService.get<Array<ProductLisDTO>>(`${this.url}`); 
	}

	public AddProduct(product: ProductLisDTO): Observable<ProductLisDTO> {
		return this.httpService.post<ProductLisDTO>(`${this.url}/add`, product);
	  }


	  public deleteProduct$(name: string) {
		return this.httpService.delete(`${this.url}`, name);
	  }
}

