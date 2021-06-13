import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCommonModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http'
import { ApiClientService } from './services/api-client.service';
import { LoadingService } from './services/loading.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ChartGridComponent } from './components/chart-grid/chart-grid.component';
import { ChartComponent } from './components/chart/chart.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';


const CommonSharedModuleProviders = [
  ApiClientService,
  LoadingService
]

const CommonSharedModuleComponents = [
  ChartGridComponent, 
  ChartComponent
]

@NgModule({
  declarations: [
    ...CommonSharedModuleComponents
  ],
  imports: [
    MatButtonModule,
    MatProgressSpinnerModule,
    MatButtonToggleModule,
    HttpClientModule,
    CommonModule,
    MatCommonModule
  ],
  providers: [
    ...CommonSharedModuleProviders
  ],
  exports: [
    ...CommonSharedModuleComponents
  ]
})
export class CommonSharedModule {
  public static forRoot(): ModuleWithProviders<CommonSharedModule> {
    return {
      ngModule: CommonSharedModule,
      providers: [
        ...CommonSharedModuleProviders
      ]
    };
  }
 }
