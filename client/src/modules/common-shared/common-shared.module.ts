import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCommonModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http'
import { ApiClientService } from './services/api-client.service';
import { LoadingService } from './services/loading.service'

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const CommonSharedModuleProviders = [
  ApiClientService,
  LoadingService
]

@NgModule({
  declarations: [],
  imports: [
    MatProgressSpinnerModule,
    HttpClientModule,
    CommonModule,
    MatCommonModule
  ],
  providers: [
    ...CommonSharedModuleProviders
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
