import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shated/images.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {
  images: any[];

  constructor(private _imageService : ImageService) { 

  }

  ngOnInit() {
  }

}
