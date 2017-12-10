export class Card {
  public value: number;
  public suit: number;

  constructor(value: number, suit: number) {
    this.value = value;
    this.suit = suit;
  }

  public toString(): string {
    return this.getStringValue() + this.getStringSuit();
  }

  public getStringValue(): string {
    let stringValue: string = '';

    switch (this.value) {
      case 1:
        stringValue += 'A';
        break;
      case 2:
        stringValue += '2';
        break;
      case 3:
        stringValue += '3';
        break;
      case 4:
        stringValue += '4';
        break;
      case 5:
        stringValue += '5';
        break;
      case 6:
        stringValue += '6';
        break;
      case 7:
        stringValue += '7';
        break;
      case 8:
        stringValue += '8';
        break;
      case 9:
        stringValue += '9';
        break;
      case 10:
        stringValue += '10';
        break;
      case 11:
        stringValue += 'J';
        break;
      case 12:
        stringValue += 'Q';
        break;
      case 13:
        stringValue += 'K';
        break;
    }

    return stringValue;
  }

  public getStringSuit(): string {
    let stringSuit: string = '';
    switch (this.suit) {
      case 0:
        stringSuit += '♡';
        break;
      case 1:
        stringSuit += '♢';
        break;
      case 2:
        stringSuit += '♧';
        break;
      case 3:
        stringSuit += '♤';
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
