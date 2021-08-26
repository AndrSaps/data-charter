import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartGridComponent } from './components/chart-grid/chart-grid.component';
import { ChartComponent } from './components/chart/chart.component';
import { ImageHandlerService } from './services/image-handler.service';

const ChartModuleComponents = [
  ChartGridComponent, 
  ChartComponent
]

const ChartModuleProviders = [
  ImageHandlerService
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
  ],
  providers:[
    ...ChartModuleProviders
  ]
})
export class ChartModule { 
  public static forRoot(): ModuleWithProviders<ChartModule> {
    return {
      ngModule: ChartModule,
      providers: [
        ...ChartModuleProviders
      ]
    };
  }
}
