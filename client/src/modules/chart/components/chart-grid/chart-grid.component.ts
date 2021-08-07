import { Component, OnInit } from '@angular/core';
import { ChartOptions } from '../../models/chart-options.model'

@Component({
  selector: 'chart-grid',
  templateUrl: './chart-grid.component.html',
  styleUrls: ['./chart-grid.component.scss']
})
export class ChartGridComponent implements OnInit {

  chartList: ChartOptions[];
  temporaryChart: ChartOptions; 

  constructor() { }

  ngOnInit(): void {
  }

}
