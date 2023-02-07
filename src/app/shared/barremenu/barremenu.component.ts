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
      { title: 'Demo 1', url: '/demos/demo1'},
      { title: 'Demo 2', url: '/demos/demo2'},
      { title: 'Demo 3', url: '/demos/demo3'},
      { title: 'Demo 4', url: '/demos/demo4'},
      { title: 'Demo 5', url: '/demos/demo5'},
      { title: 'Demo 6', url: '/demos/demo6'},
      { title: 'Demo 7', url: '/demos/demo7'},
      { title: 'Demo 8', url: '/demos/demo8'},
    ]},
    { title: 'Exos', children: [
      { title: 'UserInfos/Input', url: '/exos/exo1'},
      { title: 'UserInfos', url: '/exos/info-user'},
      { title: 'Input', url: '/exos/input'},
      { title: 'Chrono', url: '/exos/exo2'},
      { title: 'Timer', url: '/exos/timer'},
      { title: 'Spoil Bambi', url: '/exos/spoilbambi'},
      { title: 'Menu Barre', url: '/exos/menubarre'},
      { title: 'Menu Barre', url: '/exos/menubarre'},
      { title: 'Cours préférés', url: '/exos/courspreferes'},
      { title: 'Books List', url: '/exos/blooklist'},
      { title: 'Books List 2', url: '/exos/exo7'},
      { title: 'Books List 2', url: '/exos/book'},
      { title: 'Books List Service', url: '/exos/exo8'},
      { title: 'Shoping List', url: '/exos/exo9'},
    ]}

    
  ]

  toggleVisible(index: number){
    this.links[index].isVisible = !this.links[index].isVisible
  }
}
