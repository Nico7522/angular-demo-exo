import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
private users: User[] = [
  new User(1, "Nicolas", "D'addabbo", "nico", "123"),
  new User(2, "Nicola", "D'addabb", "niconico", "456"),
  new User(2, "Nicol", "D'adda", "niconiconico", "789"),
];

connectedUser?: User;
  constructor() { }

  login(userLogin: string, userPassword: string){
    this.connectedUser = this.users.find((user) => user.login === userLogin);

    if (this.connectedUser) {
      if(this.connectedUser.password != userPassword) {
        this.connectedUser = undefined;
      }
    }
  }

  logout(){
    this.connectedUser = undefined;
  }
}
