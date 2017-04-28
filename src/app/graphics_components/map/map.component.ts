import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from '../../restaurant/restaurant';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Input () restau: Restaurant;

 /* lat: number = this.restau.coordinates[0].lat;
  long: number = this.restau.coordinates[0].long;*/

  constructor() { }

  ngOnInit() {

  }

}
