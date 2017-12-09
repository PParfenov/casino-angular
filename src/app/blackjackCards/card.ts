export class Card{

  public value: number;
  public suit: number;

  constructor(value: number, suit: number) {
    this.value = value;
    this.suit = suit;
  }

  public toString(): string {
    return this.getStringValue() + ' of ' + this.getStringSuit();
  }

  public getStringValue(): string {
    let stringValue: string = '';

    switch (this.value) {
      case 1:
        stringValue += 'Ace';
        break;
      case 2:
        stringValue += 'Two';
        break;
      case 3:
        stringValue += 'Three';
        break;
      case 4:
        stringValue += 'Four';
        break;
      case 5:
        stringValue += 'Five';
        break;
      case 6:
        stringValue += 'Six';
        break;
      case 7:
        stringValue += 'Seven';
        break;
      case 8:
        stringValue += 'Eight';
        break;
      case 9:
        stringValue += 'Nine';
        break;
      case 10:
        stringValue += 'Ten';
        break;
      case 11:
        stringValue += 'Jack';
        break;
      case 12:
        stringValue += 'Queen';
        break;
      case 13:
        stringValue += 'King';
        break;
    }

    return stringValue;
  }

  public getStringSuit(): string {
    let stringSuit: string = '';
    switch (this.suit) {
      case 0:
        stringSuit += 'Hearts';
        break;
      case 1:
        stringSuit += 'Diamonds';
        break;
      case 2:
        stringSuit += 'Clubs';
        break;
      case 3:
        stringSuit += 'Spades';
        break;
    }

    return stringSuit;
  }

  public getValue(): number {
    return this.value;
  }

  public getSuit(): number {
    return this.suit;
  }

  public isAce(): boolean {
    return this.value === 1;
  }

  public getHighValue(): number {
    if (this.value > 9) {
      return 10;
    } else if (this.isAce()) {
      return 11;
    } else {
      return this.value;
    }
  }

  public getLowValue(): number {
    if (this.value > 9) {
      return 10;
    } else if (this.isAce()) {
      return 1;
    } else {
      return this.value;
    }
  }

}
