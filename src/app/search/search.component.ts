import {Component, OnInit} from "@angular/core";
import {Restaurant} from "../restaurant/restaurant";
import {RESTAURANTS} from "../restaurant/mock-restaurant";
@Component ({
  selector: 'app-search',
  templateUrl : './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  search: string;
  restaurants : Restaurant [] = [];
  results : Restaurant [] = [];


  ngOnInit() {
  this.restaurants = RESTAURANTS;
  this.compareName();

  }

  compareName (){
    for (let resto of this.restaurants ){
      if (resto.nom.includes(this.search)){
        this.results.push(resto);
      }
    }
  }
}
