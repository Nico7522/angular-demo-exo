import { Component } from '@angular/core';

@Component({
  selector: 'app-courspreferes',
  templateUrl: './courspreferes.component.html',
  styleUrls: ['./courspreferes.component.scss']
})
export class CourspreferesComponent {
  hideHTML: boolean = true;
  hideCSS: boolean = true;
  hideJS: boolean = true;
  hideC: boolean = true;

  choice: number = 0;

  cours: any = [{
    id: 1,
    name: 'HTML',
    description: 'Mettre en page',
    isActive: false,
  },
  {
    id: 2,
    name: 'CSS',
    description: 'Styliser la page',
    isActive: false,
  },
  {
    id: 3,
    name: 'Javascript',
    description: 'Permettre des interactions',
    isActive: false,
  },
  {
    id: 4,
    name: 'C#',
    description: 'Un super language orienté objet',
    isActive: false,
  }]

  aff(num: number){
    if (num === 1) {
      this.hideHTML = !this.hideHTML;
      
    }
    if (num === 2) {
      this.hideCSS = !this.hideCSS;
    }
    if (num === 3) {
      this.hideJS = !this.hideJS;
    }
    if (num === 4) {
      this.hideC = !this.hideC;
    }

  }

  showDesc(id: number){
    this.cours.forEach((cour: { id: number; isActive: boolean; }): any => {
      
      if (cour.id === id) {
        cour.isActive = !cour.isActive;
      }
      else {
        cour.isActive = false;
      }
     
      
    });
    
     
   
  }
}
