import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CovidRoutingModule } from './covid-routing.module';
import { CovidComponent } from './covid.page';
import { CommonSharedModule } from '../common-shared/common-shared.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ChartModule } from '../chart/chart.module';
import { CovidService } from './services/covid.service';


@NgModule({
  declarations: [
    CovidComponent
  ],
  imports: [
    MatToolbarModule,
    CommonModule,
    CovidRoutingModule,
    CommonSharedModule.forRoot(),
    ChartModule
  ], 
  providers: [
    CovidService
  ]
})
export class CovidModule { }
