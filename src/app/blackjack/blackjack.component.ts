import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hand } from '../blackjackCards/hand';
import { Deck } from '../blackjackCards/deck';

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

  constructor(private route: ActivatedRoute) { }

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

  public stay(): void {
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
    this.player.addCard(this.deck.getCard());
    this.player.addCard(this.deck.getCard());
    this.gameResult = '';
    this.showResult = false;
  }
}
