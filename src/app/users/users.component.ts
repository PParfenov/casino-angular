import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user: User = {
    name: 'Zan',
    money: 0,
    isComputer: false
  };

  constructor() { }

  ngOnInit() {
  }

  onAddToWallet(money: number): void{
    this.user.money += +money;
  }

}
