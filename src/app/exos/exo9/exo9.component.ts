import { Component, OnInit } from '@angular/core';
import { Shop } from '../models/shop';
import { ShopingService } from '../services/shoping.service';

@Component({
  selector: 'app-exo9',
  templateUrl: './exo9.component.html',
  styleUrls: ['./exo9.component.scss'],
})
export class Exo9Component implements OnInit {
  constructor(private _Shoplist: ShopingService) {}
  shop: Shop[] = [];

  nameObjet: string = '';
  priceObjet: number = 0;

  ngOnInit() {
    this.shop = this._Shoplist.shopList;
  }

  add() {
    this._Shoplist.addArticle(this.nameObjet, this.priceObjet);
    this.shop = this._Shoplist.shopList;
  }

  delete(id: number){
    this._Shoplist.deleteArticle(id);
    this.shop = this._Shoplist.shopList;
  }
}
