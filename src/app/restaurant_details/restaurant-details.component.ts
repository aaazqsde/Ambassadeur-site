import {Component, Input, OnInit} from '@angular/core';
import {Restaurant} from '../restaurant/restaurant';
import {ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {AppService} from '../app.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-restau-details',
  templateUrl: './restaurant-details.component.html'

})
export class RestaurantDetailsComponent implements OnInit {
  @Input() restau: Restaurant;

  constructor(private appService: AppService,
              private route: ActivatedRoute,
              ) {
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.appService.getRestau(+params['id']))
      .subscribe(restau => this.restau = restau);
  }



}
