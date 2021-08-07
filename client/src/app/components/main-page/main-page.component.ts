import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadingService } from 'src/modules/common-shared/services/loading.service';

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, OnDestroy{
  showLoader = false;
  title = 'client';
  subscription: Subscription = new Subscription();

  constructor(private loadingService: LoadingService){
  }

  ngOnInit(): void {
    this.subscription.add(this.loadingService.shoulShowLoader.subscribe(($event) => {
      this.showLoader = $event;
    }));
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
