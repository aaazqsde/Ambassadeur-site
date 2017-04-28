import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from '../../restaurant/restaurant';

@Component({
  selector: 'app-notation',
  templateUrl: './notation.component.html',
  styleUrls: ['./notation.component.css']
})

export class NotationComponent implements OnInit {

  notemoyen = 0;

  @Input () restau: Restaurant;


  constructor() { }

  ngOnInit() {
    /*for(let index in this.restau.commentaires) {
      this.notemoyen += this.restau.commentaires[index].note;
    }

    this.notemoyen /= this.restau.commentaires.length;*/

    this.notemoyen = this.restau.commentaires.map(com => com.note).reduce((a, b) => a + b , 0) / this.restau.commentaires.length;
  }

}
