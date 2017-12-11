import { Card } from './card';
import * as _ from 'lodash';

export class Deck {
  private cards: Card[];

  constructor() {
    this.cards = this.generateDeck();
    this.cards = this.shuffle(this.cards);
  }

  public generateDeck(): Card[] {
    const cards: Card[] = [];

    for (let suit = 0; suit < 4; suit++) {
      for (let value = 1; value < 14; value++) {
        cards.push(new Card(value, suit));
      }
    }

    return cards;
  }

  public shuffle(cards: Card[]): Card[] {
    return _.shuffle(cards);
  }

  public getCard(): Card {
    return this.cards.shift();
  }

  public getDeck(): Card[] {
    return this.cards;
  }
}
