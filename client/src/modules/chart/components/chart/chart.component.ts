import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions } from '../../model/chart-options.model';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  @Input()
  chartModel: ChartOptions;
  
  constructor() { }

  ngOnInit(): void {
  }

}
