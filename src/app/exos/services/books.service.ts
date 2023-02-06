import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  listBook: any = [];
  id: number = 3;

  constructor() {}

  add(value: string) {
    this.listBook.push({
      id: this.id += 1,
      name: value,
    });
  }

  delete(id: number){
    this.listBook = this.listBook.filter( (b: { id: number; }) => {
      return b.id != id;

    })
    console.log(this.listBook);
    
  }
}
