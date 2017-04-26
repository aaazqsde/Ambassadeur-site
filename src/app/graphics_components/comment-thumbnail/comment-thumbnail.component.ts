import {Component, OnInit, Input} from '@angular/core';
import {Restaurant} from '../../restaurant/restaurant';

@Component ({
  selector: 'app-comment-thumbnail',
  templateUrl: 'comment-thumbnail.component.html'
})

export class CommentThumbnailComponent implements OnInit{

  @Input () restau: Restaurant;

  ngOnInit(): void {
  }




}
