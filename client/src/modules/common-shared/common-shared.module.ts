import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCommonModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http'
import { ApiClientService } from './services/api-client.service';


@NgModule({
  declarations: [
    ApiClientService
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    MatCommonModule
  ],
  exports: [
    ApiClientService
  ]
})
export class CommonSharedModule { }
