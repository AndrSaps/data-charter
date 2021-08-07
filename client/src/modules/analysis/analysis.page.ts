import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
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
    private sanitizer: DomSanitizer) { }

  async ngOnInit() {
    this.data = await this.apiClientService.get(this.baseUrl);
    debugger
    this.imagePath = 'data:image/svg+xml;base64,' + this.data.data.substring(2, this.data.data.length-2);
    this.imagePath = this.sanitizer.bypassSecurityTrustUrl(this.imagePath);
    
  }
}
