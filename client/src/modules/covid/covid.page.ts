import { Component, OnInit } from '@angular/core';
import { CovidService } from './services/covid.service';

@Component({
  selector: 'covid',
  templateUrl: './covid.page.html',
  styleUrls: ['./covid.page.scss']
})
export class CovidComponent implements OnInit {

  constructor(private covidService: CovidService) { }

  async ngOnInit() {
    this.covidService.getChart()
  }

}
