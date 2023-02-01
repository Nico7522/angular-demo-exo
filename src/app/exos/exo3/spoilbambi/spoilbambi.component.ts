import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-spoilbambi',
  templateUrl: './spoilbambi.component.html',
  styleUrls: ['./spoilbambi.component.scss']
})
export class SpoilbambiComponent {
  isOnSpoiler: boolean = true;

  spoil(){
   return this.isOnSpoiler = !this.isOnSpoiler
  }
}
