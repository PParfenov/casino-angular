import { Injectable } from '@angular/core';
import { User } from '../user';

@Injectable()
export class UserService {

  private user: User = new User;

  constructor() { }

  setName(name: string) {
    this.user.name = name;
  }

  getName() {
    return this.user.name;
  }

  getMoney(){
    return this.user.money;
  }

  changeMoney(diff: number){
    this.user.money += diff;
  }

}
