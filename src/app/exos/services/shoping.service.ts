import { Injectable, OnInit } from '@angular/core';
import { Shop } from '../models/shop';

@Injectable({
  providedIn: 'root'
})
export class ShopingService  {

  shopList: Shop[] = [];
  id: number = 0;
  addArticle(name: string, price: number){
    const article = new Shop((this.id+=1), name, price)
    this.shopList.push(article);
  }

  deleteArticle(id: number){
    this.shopList = this.shopList.filter((art) => {
      return art.id != id;
    })
  }



  constructor() { }
}
