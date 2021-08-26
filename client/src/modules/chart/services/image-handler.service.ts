import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BASE64_PREFIX } from '../constants/img.constants';

@Injectable({
  providedIn: 'root'
})
export class ImageHandlerService {
  constructor(private sanitizer: DomSanitizer) {}

  convertToSafeHtml(imgData) {
    imgData = BASE64_PREFIX + imgData.substring(2, imgData.length - 2);
    imgData = this.sanitizer.bypassSecurityTrustUrl(imgData);
    return imgData;
  }
}
