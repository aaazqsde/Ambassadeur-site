import {Component} from "@angular/core";
import {Router} from "@angular/router";


@Component({
  selector: 'app-footer',
  template: `
    <div style="background-color: green; width: 1000px">
      <p>
        Téléphone : 02 99 75 05 21 <br>
        Adresse : 5 Place du Château, 35500 Vitré <br>
        Autre Infos à compléter <br>

        <strong (click)="redirectToContact()">Lien vers page contact</strong><br>
        <strong (click)="redirectToAmbassadeurDetails()">Lien vers page ambassadeur</strong><br>
      </p>
    </div>

  `
})
export class FooterComponent {

  constructor(private router: Router) {
  }

  redirectToContact() {
    this.router.navigate(['/contact']);
  }


  redirectToAmbassadeurDetails() {
    this.router.navigate(['/ambassadeur-details']);
  }
}
