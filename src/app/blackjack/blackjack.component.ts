///<reference path="../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import { Component, OnInit } from '@angular/core';
import { Hand } from '../blackjackCards/hand';
import { Deck } from '../blackjackCards/deck';


@Component({
  selector: 'app-blackjack',
  templateUrl: './blackjack.component.html',
  styleUrls: ['./blackjack.component.css']
})

export class BlackjackComponent implements OnInit {
  public deck: Deck;
  public bank: Hand;
  public player: Hand;
  public showResult = false;
  public gameResult: string;

  constructor() { }

  ngOnInit() {
    this.restart();
  }

  public hitMe(): void {
    this.player.addCard(this.deck.getCard());

    if (this.player.isBust) {
      this.showResult = true;
      this.gameResult = 'Player is bust';
    }
  }

  public stop(): void {
    let bankTakesCard = true;
    while (bankTakesCard) {
      this.bank.addCard(this.deck.getCard());

      if (this.bank.isBust) {
        bankTakesCard = false;
        this.gameResult = 'House went bust!';
      }

      if (this.bank.getValue() > 16) {
        bankTakesCard = false;
      }
    }

    if (!this.bank.isBust) {
      if (this.bank.getValue() > this.player.getValue()) {
        this.gameResult = 'House wins!';
      } else if (this.bank.getValue() < this.player.getValue()){
        this.gameResult = 'Player wins!';
      } else {
        this.gameResult = 'It\'s a tie!';
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
  }
}
