import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { RequestOptions } from '../model/request-options.model'
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  defaultOptions = {
    shouldShowSpinner: true
  } as RequestOptions;

  constructor(private http: HttpClient,
    private loadingService: LoadingService) { }

  get(url, options: RequestOptions = this.defaultOptions) {
      if(options.shouldShowSpinner){
        this.loadingService.setLoadingStatus(true);
      }
  
      let result =  this.http.get(url)
        .pipe(
          catchError(this.handleError)
        ).toPromise();

      if(options.shouldShowSpinner){
        this.loadingService.setLoadingStatus(false);
      }

      return result;
  }
  
  post(url, data, options: RequestOptions = this.defaultOptions) {
    if(options.shouldShowSpinner){
      this.loadingService.setLoadingStatus(true);
    }

    let result =  this.http.post(url, data)
      .pipe(
        catchError(this.handleError)
      ).toPromise();
    
    if(options.shouldShowSpinner){
      this.loadingService.setLoadingStatus(false);
    }

    return result;
  }

  delete(url, options: RequestOptions = this.defaultOptions) {
    if(options.shouldShowSpinner){
      this.loadingService.setLoadingStatus(true);
    }

    let result = this.http.delete(url) 
      .pipe(
        catchError(this.handleError)
      ).toPromise();
    
      if(options.shouldShowSpinner){
      this.loadingService.setLoadingStatus(false);
    }

    return result;
  }

  put(url, data, options: RequestOptions = this.defaultOptions) {
    if(options.shouldShowSpinner){
      this.loadingService.setLoadingStatus(true);
    }
    
    let result = this.http.put(url, data)
      .pipe(
        catchError(this.handleError)
      ).toPromise();

    if(options.shouldShowSpinner){
      this.loadingService.setLoadingStatus(false);
    }
    
    return result;
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(error.message);
  }
}
