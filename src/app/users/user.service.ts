import { Injectable } from '@angular/core';
import { User } from '../user';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Injectable()
export class UserService implements OnInit {
  
  private user: User = new User;
  
  ngOnInit(): void {
    this.user.name = "No name";
    this.user.money = 0;
  }

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
