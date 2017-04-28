import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Restaurant} from "../restaurant/restaurant";
import {RESTAURANTS} from "../restaurant/mock-restaurant";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'

})

export class HomeComponent implements OnInit {
  buttonText: string = "Trouver son restaurant";

  restaus: Restaurant[] = [];

  premiereLigne: Restaurant[] = [];
  secondeLigne: Restaurant[] = [];


  constructor(private router: Router) {
  }

  redirectToSearch() {
    this.router.navigate(['/search']);
  }

  ngOnInit() {
    this.restaus = RESTAURANTS;

    for (let i = 0; i < 6; i++) {
      if (i < 3) {
        this.premiereLigne.push(this.restaus[i]);
      }
      else {
        this.secondeLigne.push(this.restaus[i]);
      }

    }
  }


}
