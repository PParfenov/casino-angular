import { Card } from './card';

export class Hand {
  public cards: Card[];
  public value: number;
  public isBust: boolean;
  public isHouse: boolean;

  constructor(isHouse?: boolean) {
    if (isHouse) {
      this.isHouse = isHouse;
    }
    this.cards = [];
  }

  private calculateHand(): number {
    let highValue: number = 0;
    let lowValue: number = 0;
    let value: number = 0;

    for (let card of this.cards) {
      highValue = card.getHighValue();
      lowValue = card.getLowValue();

      if (highValue > 21) {
        if (lowValue > 21) {
          this.isBust = true;
        }
        value = lowValue;
      } else {
        value = highValue;
      }
    }
    return value;
  }

  public getValue(): number {
    return this.calculateHand();
  }

  public addCard(card: Card): void {
    this.cards.push(card);
    this.calculateHand();
  }
}
