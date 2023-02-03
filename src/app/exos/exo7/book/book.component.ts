import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent {
  @Input() idB!: number;
  @Input() nameB!: string;
  @Input() nameAdd!: string;
  @Input() Books!: [];
  @Output() addbooks: EventEmitter<string> = new EventEmitter<string>();
  addBooks(nameAdd: string) {
    // Message envoyer au composant parent
    this.addbooks.emit(nameAdd);
  }

}
