import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { LoginService } from '../servies/login.service';

@Component({
  selector: 'app-demo7',
  templateUrl: './demo7.component.html',
  styleUrls: ['./demo7.component.scss']
})
export class Demo7Component implements OnInit {
  connectedUser?: User;
  login: string = '';
  password: string = '';

  constructor(
    private _loginService: LoginService
  ){}

    ngOnInit(): void {
      this.connectedUser = this._loginService.connectedUser;
    }

    connection(): void {
      if (this.login.trim()) {
        this._loginService.login(this.login, this.password);
        // this.connectedUser = this._loginService.connectedUser
        this.connectedUser = this._loginService.connectedUser;

        if (this.connectedUser) {
          this.login = '';
          this.password = '';
        }
      }
    }

    deconnection(): void {
      this._loginService.logout();
      this.connectedUser = this._loginService.connectedUser;
    }
}
