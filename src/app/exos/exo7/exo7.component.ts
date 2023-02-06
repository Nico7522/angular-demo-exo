import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-exo7',
  templateUrl: './exo7.component.html',
  styleUrls: ['./exo7.component.scss'],
})

export class Exo7Component {
 
  id: number = 3;
  Books: any = [
    {
      id: 1,
      name: 'One Piece Vol 101',
    },
    {
      id: 2,
      name: 'Chainsaw Man Vol 5',
    },
    {
      id: 3,
      name: 'One Puch Man Vol 1',
    },
  ];
  incrementId(id: number) {
    return (this.id += 1);
  }

  ajouterBooks(event: string) {
    this.Books.push({
      id: this.incrementId(this.id),
      name: event,
    });
    
    
  }
  deleteBookParent(id: number) {
    this.Books = this.Books.filter((b: { id: number }) => {
      return b.id != id;
    });
  }
}
