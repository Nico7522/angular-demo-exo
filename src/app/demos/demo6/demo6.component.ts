import { Component } from '@angular/core';

@Component({
  selector: 'app-demo6',
  templateUrl: './demo6.component.html',
  styleUrls: ['./demo6.component.scss']
})
export class Demo6Component {
  prenomParent: string = "Roger";
  messageFiston: string = "En attente d'un bonjour du fiston";

  recevoirBonjour(event: string){
    this.messageFiston = event;


  }

  prenomsEnfant: string[] = ['Pierre', 'Paul', 'Jacques'];

}
