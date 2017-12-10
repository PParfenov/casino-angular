import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hand } from '../blackjackCards/hand';
import { Deck } from '../blackjackCards/deck';
import { UserService } from '../users/user.service';

@Component({
  templateUrl: './blackjack.component.html',
  styleUrls: ['./blackjack.component.css']
})

export class BlackJackComponent implements OnInit {
  public deck: Deck;
  public bank: Hand;
  public player: Hand;
  public showResult = false;
  public gameResult: string;
  public betAmount: number;
  public playerWallet: number;
  public canBet: boolean;

  constructor(private route: ActivatedRoute, private _userService: UserService) { }

  ngOnInit() {
    this.restart();
    this.playerWallet = this._userService.getMoney();
  }

  public hitMe(): void {
    this.player.addCard(this.deck.getCard());

    if (this.player.isBust) {
      this.showResult = true;
      this.gameResult = 'Player is bust';
    }

    this.canBet = false;
  }

  public stay(): void {
    let bankTakesCard = true;
    while (bankTakesCard) {
      this.bank.addCard(this.deck.getCard());

      if (this.bank.isBust) {
        bankTakesCard = false;
        this.gameResult = 'House went bust!';
        this.playerWallet += (this.betAmount*2);
      }

      if (this.bank.getValue() > 16) {
        bankTakesCard = false;
      }

      this.canBet = false;
    }

    if (!this.bank.isBust) {
      if (this.bank.getValue() > this.player.getValue()) {
        this.gameResult = 'House wins!';
        //TODO: replace with service
      } else if (this.bank.getValue() < this.player.getValue()){
        this.gameResult = 'Player wins $'+(this.betAmount*2)+'!';
        this.playerWallet += (this.betAmount*2);
       //TODO: replace with service
      } else {
        this.gameResult = 'It\'s a tie!\nGet bet back';
        this.playerWallet += this.betAmount;
        //TODO: replace with service
      }
    }

    this.showResult = true;
  }

  public restart() {
    this.deck = new Deck();
    this.bank = new Hand(true);
    this.player = new Hand();
    this.gameResult = '';
    this.showResult = false;
    this.betAmount = 0;
    if(this.playerWallet >= 100){
    this.canBet = true;
    }
  }

  public addToBet(): void {
    this.betAmount += 100;
    this.playerWallet -= 100;
    if(this.playerWallet < 100){
      this.canBet = false;
    }
    //TODO: replace with service
  }
  public betAll(): void {
    this.betAmount += this.playerWallet;
    this.playerWallet -= this.playerWallet;
    if(this.playerWallet < 100){
      this.canBet = false;
    }
    //TODO: replace with service
  }
}
