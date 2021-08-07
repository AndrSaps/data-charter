import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ScreenStateService } from 'src/modules/common-shared/services/screen-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{

  subscription: Subscription = new Subscription();
  screenWidth: number;
  
  @HostListener('window:resize', ['$event'])
  onResize($event) {
    this.screenStateService.setScreenWidth(window.innerWidth);
  }

  constructor(private screenStateService: ScreenStateService){}

  ngOnInit(): void {
    this.subscription.add(this.screenStateService.screenWidth.subscribe((screenWidth) => {
      this.screenWidth = screenWidth;
    }));
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
