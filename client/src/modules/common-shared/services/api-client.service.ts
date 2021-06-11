import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { RequestOptions } from '../model/request-options.model'

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  defaultOptions = {
    shouldShowSpinner: true
  } as RequestOptions;

  constructor(private http: HttpClient) { }

  get(url, options: RequestOptions = this.defaultOptions): Observable<any> {
    if(this.defaultOptions.shouldShowSpinner){

    }

    let result =  this.http.get(url)
      .pipe(
        catchError(this.handleError)
      );

    return result;
  }
  
  post(url, data, options: RequestOptions = this.defaultOptions): Observable<any> {
    if(this.defaultOptions.shouldShowSpinner){
      
    }

    let result =  this.http.post(url, data)
      .pipe(
        catchError(this.handleError)
      );

    return result;
  }

  delete(url, options: RequestOptions = this.defaultOptions): Observable<any> {
    if(this.defaultOptions.shouldShowSpinner){
      
    }

    let result = this.http.delete(url) 
      .pipe(
        catchError(this.handleError)
      );

    return result;
  }

  put(url, data, options: RequestOptions = this.defaultOptions): Observable<any> {
    if(this.defaultOptions.shouldShowSpinner){
      
    }
    
    let result = this.http.put(url, data)
      .pipe(
        catchError(this.handleError)
      );

    return result;
  }

  private handleError(error: HttpErrorResponse) {

    return throwError(error.message);

  }
}
