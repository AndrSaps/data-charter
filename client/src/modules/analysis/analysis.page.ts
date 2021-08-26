import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ImageHandlerService } from '../chart/services/image-handler.service';
import { ApiClientService } from '../common-shared/services/api-client.service'

@Component({
  selector: 'analysis',
  templateUrl: './analysis.page.html',
  styleUrls: ['./analysis.page.scss']
})
export class AnalysisComponent implements OnInit {

  baseUrl = `${environment.serverApiUrl}/covid`;
  data: any;
  imagePath: any = "";

  constructor(private apiClientService: ApiClientService,
    private imageHandlerService: ImageHandlerService) { }

  async ngOnInit() {
    this.data = await this.apiClientService.get(this.baseUrl);
    this.imagePath = this.imageHandlerService.convertToSafeHtml(this.data.data);
  }
}
