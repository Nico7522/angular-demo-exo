import { Component } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss']
})
export class Demo1Component {
  firstName: string;
  private _lastName: string;
  isDisabled: boolean = false;

  constructor() {
    this.firstName = "John";
    this._lastName = "Doe";
  }

  /**
   * get lastName
  : string   */
  public get lastName() : string  {
    return this._lastName;
  }
}
