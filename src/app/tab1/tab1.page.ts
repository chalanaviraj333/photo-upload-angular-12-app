import { Component } from '@angular/core';
import { PhotoUploadService } from '../all-services/photo-upload.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public photoUploadService: PhotoUploadService) {}

}
