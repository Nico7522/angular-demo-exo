import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent {
  @Input() Books!: any[];

  valueInput: string = '';
  @Output() addbooks: EventEmitter<string> = new EventEmitter<string>();
  addBooks(valueInput: string) {
    this.addbooks.emit(valueInput);
    this.valueInput = "";
  }

  @Output() deletebooks: EventEmitter<number> = new EventEmitter<number>();

  deleteBooksEnfant(id: number) {
    this.deletebooks.emit(id);
  }
}
