import { Component } from '@angular/core';

@Component({
  selector: 'app-infouser',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.scss']
})
export class InfoUserComponent {
  private _age: number;
  private _hobby: string;
  private _pseudo: string;

  constructor(){
    this._age = 23;
    this._hobby = "programmation";
    this._pseudo = "Nico7522";
  }

  public getInfos(){
    return `Mon pseudo est ${this._pseudo}, j'ai ${this._age} ans et j'aime la ${this._hobby}`
  }
}
