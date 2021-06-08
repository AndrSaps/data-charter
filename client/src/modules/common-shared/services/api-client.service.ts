import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  defaultOptions = {};

  constructor(private http: HttpClient) { }

  get(url, options = this.defaultOptions): Observable<any> {
    return this.http.get(url, options)
      .pipe(
        catchError(this.handleError)
      );
  }
  
  post(url, data, options = this.defaultOptions): Observable<any> {
    return this.http.post(url, data, options)
      .pipe(
        catchError(this.handleError)
      );
  }

  delete(url, options = this.defaultOptions): Observable<any> {
    return this.http.delete(url, options) 
      .pipe(
        catchError(this.handleError)
      );
  }

  put(url, data, options = this.defaultOptions): Observable<any> {
    let result = this.http.put(url, data, options)
      .pipe(
        catchError(this.handleError)
      );
    return result;
  }

  private handleError(error: HttpErrorResponse) {

    return throwError(error.message);

  }
}
