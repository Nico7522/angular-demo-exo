import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';


@Component({
  selector: 'app-exo8',
  templateUrl: './exo8.component.html',
  styleUrls: ['./exo8.component.scss'],
})
export class Exo8Component implements OnInit {

  constructor(
    private _BooksService: BooksService
  ){}
  ngOnInit(): void {
    this._BooksService.listBook = this.tabBook 
  }

  book: string = '';
  id: number = 3;
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
    this._BooksService.add(this.book)
    this._BooksService.listBook = this.tabBook 
  }

  deleteBook(num: number){
    this._BooksService.delete(num)
    this.tabBook = this._BooksService.listBook 
    console.log(this.tabBook);
    
   
  }


}