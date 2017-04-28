import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-gallery',
  templateUrl: 'gallery.component.html'

})
export class GalleryComponent implements OnInit {

  images: any[];

  ngOnInit() {
    this.images = [];
    this.images.push({source: './src/assets/images/1.jpg'});
    this.images.push({source: './src/assets/images/2.jpg'});
    this.images.push({source: './src/assets/images/3.jpg'});
    this.images.push({source: './src/assets/images/4.jpg'});


  }



}
