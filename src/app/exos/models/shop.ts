import { identifierName } from '@angular/compiler';

export class Shop {
  id: number;
  name: string;
  price: number;
  constructor(id: number, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}
