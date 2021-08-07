import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartGridComponent } from './components/chart-grid/chart-grid.component'
import { ChartComponent } from './components/chart/chart.component'


const ChartModuleComponents = [
  ChartGridComponent, 
  ChartComponent
]


@NgModule({
  declarations: [
    ...ChartModuleComponents
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...ChartModuleComponents
  ]
})
export class ChartModule { }
