import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScreenStateService {

  private screenWidth$: BehaviorSubject<number> = new BehaviorSubject(window.innerWidth);

  screenWidth = this.screenWidth$.asObservable();

  constructor() {}

  setScreenWidth(screenWidth: number){
    this.screenWidth$.next(screenWidth);
  }
}
