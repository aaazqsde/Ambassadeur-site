import {Component} from "@angular/core";
import {Router} from "@angular/router";



@Component({
  selector: 'app-header',
  template: `
    <img src="{{imageSrc}}" height="100px" width="1000px"  (click)="redirectToHome()">
    <br>

    <app-button [fullWidth]="fullWidth" [buttonText]="buttonText"></app-button>

  `

})
export class HeaderComponent {

  imageSrc : string = 'https://www.tousvoisins.fr/photos/villages/vitre-35.jpg';
  buttonText : string = "Evenement en cours";
  fullWidth: boolean = true;

  constructor(private router: Router) {}
  redirectToHome () {
    this.router.navigate(['/home']);
  }

}



