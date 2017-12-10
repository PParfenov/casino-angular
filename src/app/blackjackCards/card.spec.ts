import { Card } from './card';

describe('Card', () => {
  let card: Card;

  it('Should create a ace of spades', () => {
    card = new Card(1, 3);
    expect(card.toString()).toEqual('A♤');
  })

  it('Should have low value 1', () => {
    card = new Card(1, 3);
    expect(card.getLowValue()).toEqual(1);
  });

  it('Should have high value 11', () => {
    card = new Card(1, 3);
    expect(card.getHighValue()).toEqual(11);
  });
});
