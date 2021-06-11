import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCommonModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http'
import { ApiClientService } from './services/api-client.service';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [],
  imports: [
    MatProgressSpinnerModule,
    HttpClientModule,
    CommonModule,
    MatCommonModule
  ],
  exports: [
    ApiClientService
  ]
})
export class CommonSharedModule { }
