import { Component } from '@angular/core';
export type Link = {
  title: string;
  url?: string;
  children?: Link[];
  isVisible?: boolean
}
@Component({
  selector: 'app-barremenu',
  templateUrl: './barremenu.component.html',
  styleUrls: ['./barremenu.component.scss']
})
export class BarremenuComponent {

  links: Link[] = [
    { title: 'Home', url: '/' },
    { title: 'Demos', children: [
      { title: 'Demo 1', url: 'demo1'},
      { title: 'Demo 2', url: 'demo2'},
      { title: 'Demo 3', url: 'demo3'},
      { title: 'Demo 4', url: 'demo4'},
      { title: 'Demo 5', url: 'demo5'},
      { title: 'Demo 6', url: 'demo6'},
    ]},
    { title: 'Exos', children: [
      { title: 'UserInfos/Input', url: 'exo1'},
      { title: 'UserInfos', url: 'info-user'},
      { title: 'Input', url: 'input'},
      { title: 'Chrono', url: 'exo2'},
      { title: 'Timer', url: 'timer'},
      { title: 'Spoil Bambi', url: 'spoilbambi'},
      { title: 'Menu Barre', url: 'menubarre'},
      { title: 'Menu Barre', url: 'menubarre'},
      { title: 'Cours préférés', url: 'courspreferes'},
      { title: 'Books List', url: 'blooklist'},
      { title: 'Books List 2', url: 'exo7'},
      { title: 'Books List 2', url: 'book'},
    ]}

    
  ]

  toggleVisible(index: number){
    this.links[index].isVisible = !this.links[index].isVisible
  }
}
