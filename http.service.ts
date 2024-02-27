import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, pipe, throwError } from 'rxjs';
import { environment } from '../environments/environment';
import { ProductLisDTO } from './domain/table/models/productlist.model';


@Injectable({ providedIn: 'root' })
export class HttpService {

  // private url =  environment.apiUrl; 
  private url = 'https://localhost:7286/api';

  constructor(private http: HttpClient) {}

   public get<T>(endpoint: string): Observable<T> {
    const headers = this._setHeaders();
    return this.http 
      .get<T>(`${this.url}/${endpoint}`, { headers })
      .pipe(
        catchError(error => throwError(() => error.error))
      );
  }

  public post<T>(url: string, data: any): Observable<T> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<T>(`${this.url}/${url}`, data, { headers }).pipe(
      catchError(error => {
        console.error('Error:', error);
        return throwError(error);
      })
    );
  }

  public delete<T>(endpoint: string, name: string): Observable<T> {
		const headers = this._setHeaders();
		return this.http
			.delete<T>(`${this.url}/${endpoint}/${name}`, {
				withCredentials: false,
				headers,
			})
			.pipe(catchError(error => throwError(() => error.error)));
	}



  private _setHeaders() {
		const headers = new HttpHeaders({
			Accept: "application/json",
			"Content-Type": "application/json",
		});
		return headers;
	}
  
}
