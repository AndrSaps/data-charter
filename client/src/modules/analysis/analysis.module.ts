import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonSharedModule } from '../common-shared/common-shared.module'
import { TrendRoutingModule } from './analysis-routing.module';
import { AnalysisComponent } from './components/analysis/analysis.component';


@NgModule({
  declarations: [AnalysisComponent],
  imports: [
    CommonModule,
    CommonSharedModule.forRoot(),
    TrendRoutingModule
  ]
})
export class AnalysisModule { }
