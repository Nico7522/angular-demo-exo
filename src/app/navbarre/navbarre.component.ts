import { Component } from '@angular/core';

@Component({
  selector: 'app-navbarre',
  templateUrl: './navbarre.component.html',
  styleUrls: ['./navbarre.component.scss'],
})
export class NavbarreComponent {
  showExos: boolean = false;
  showDemos: boolean = false;

  tabLinksExos = [
    {
      link: 'exo1',
      name: 'Exo1',
      type: 'exo'
    },
    {
      link: 'info-user',
      name: 'Info User',
      type: 'exo'
    },
    {
      link: 'exo2',
      name: 'Exo 2',
      type: 'exo'
    },
    {
      link: 'timer',
      name: 'Timer',
      type: 'exo'
    },
    {
      link: 'spoilbambi',
      name: 'Exo spoil Bambi',
      type: 'exo'
    },
    {
      link: 'menubarre',
      name: 'Exo barre menu',
      type: 'exo'
    },
    {
      link: 'courspreferes',
      name: 'Exo cours préférés',
      type: 'exo'
    },
    {
      link: 'blooklist',
      name: 'Exo liste de livres',
      type: 'exo'
    },
    {
      link: 'demo1',
      name: 'Démo 1',
      type: 'demo'
    },
    {
      link: 'demo2',
      name: 'Démo 2',
      type: 'demo'
    },
    {
      link: 'demo3',
      name: 'Démo 3',
      type: 'demo'
    },
    {
      link: 'demo4',
      name: 'Démo 4',
      type: 'demo'
    },
    {
      link: 'demo5',
      name: 'Démo 5',
      type: 'demo'
    },
  ];
}
