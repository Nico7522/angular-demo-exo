import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-exo8',
  templateUrl: './exo8.component.html',
  styleUrls: ['./exo8.component.scss'],
})
export class Exo8Component implements OnInit {
  constructor(private _BooksService: BooksService) {}
  ngOnInit(): void {
    // this._BooksService.listBook = this.tabBook;
    this.tabBook = this._BooksService.listBook;
    console.log(this.tabBook);
    
  }
  
  book: string = '';
  id: number = 3;
  tabBook: any = [];
  

  insertBook() {
    this._BooksService.add(this.book);
    // this._BooksService.listBook = this.tabBook
    this.tabBook = this._BooksService.listBook;
  }

  deleteBook(num: number) {
    this._BooksService.delete(num);
    this.tabBook = this._BooksService.listBook;
  }
}
