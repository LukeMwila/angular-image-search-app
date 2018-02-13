import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/image.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {
  images: any[];
  imagesFound: boolean = false

  constructor(private _imageService : ImageService) {}

  handleSuccess(data){
    this.images = data.hits
    this.imagesFound = true
    console.log(data.hits)
  }

  handleError(error){
    console.log(error)
  }

  searchImages(query: string){
    return this._imageService.getImage(query).subscribe(
      data => this.handleSuccess(data),
      error => this.handleError(error),
      () => console.log('Request complete')
    )
  }

  ngOnInit() {
  }

}
