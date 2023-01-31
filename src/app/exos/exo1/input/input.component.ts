import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  placeholder: string;
  type: string;

  constructor() {
    this.placeholder = "texte à afficher";
    this.type = "texte";
  }
}
