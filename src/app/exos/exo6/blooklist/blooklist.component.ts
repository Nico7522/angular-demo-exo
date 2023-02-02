import { Component } from '@angular/core';
import { filter } from 'rxjs';

@Component({
  selector: 'app-blooklist',
  templateUrl: './blooklist.component.html',
  styleUrls: ['./blooklist.component.scss'],
})
export class BlooklistComponent {
  book: string = '';
  tabBook = [
    {
      id: 1,
      name: 'One Piece Vol 101',
    },
    {
      id: 2,
      name: 'Chainsaw Man Vol 1',
    },
    {
      id: 3,
      name: 'One Puch Man Vol 26',
    },
  ];

  insertBook() {
    this.tabBook.push({
      id: this.tabBook.length +1,
      name: this.book,
    });
    console.log(this.tabBook);
    
  }

  deleteBook(id: number){
    this.tabBook = this.tabBook.filter((book) => {
      return book.id != id;

    })
   
  }
}
