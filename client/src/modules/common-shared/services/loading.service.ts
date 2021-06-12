import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  shoulShowLoader: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  private stopLoadingAfterTime = 500;
  private stopLoading = new Subject();
  private _counter: number = 0;

  get counter(): number {
    return this._counter;
  }

  set counter(value: number) {
    this._counter = value;
    if(this._counter === 1){
      this.updateLoaderStatus(true);
    } else {
      this.stopLoading.next();
    }
  }

  constructor() {
    this.stopLoading.pipe(debounceTime(this.stopLoadingAfterTime)).subscribe(() => {
      if(this.counter === 0){
        this.updateLoaderStatus(false);
      }
    });
  }

  setLoadingStatus(value: boolean){
    if (value === true) {
      this.counter = this.counter + 1;
    } else if (value === false && this.counter > 0) {
      this.counter = this.counter - 1;
    }
  }

  updateLoaderStatus(shoulShowLoader: boolean) {
    this.shoulShowLoader.next(shoulShowLoader);
  }
}
