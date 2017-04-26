import {Component, Input} from "@angular/core";
@Component({
  selector: 'app-button',
  styleUrls: ['./button.component.css'],
  template: `    
    
    <button class="button" [ngClass]="{'full-width': fullWidth}">{{buttonText}}</button>
  `
})
export class ButtonComponent {
  @Input() buttonText : string;
  @Input() fullWidth: boolean;
}
