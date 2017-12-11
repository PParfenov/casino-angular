import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from './user.service';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnChanges {

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this._userService.setName("");
  }

  ngOnChanges(){

  }

  onSetName(name: string): void{
    this._userService.setName(name);
  }

  onAddToWallet(money: number): void{
    this._userService.changeMoney(+money);
  }

}
