import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() placeholder: string;
  type: string;

  constructor() {
    this.placeholder = "texte à afficher";
    this.type = "texte";
  }
}
