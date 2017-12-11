import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackjackComponent } from './blackjack.component';
import { HandComponent } from './blackjackHand/hand.component';

describe('BlackjackComponent', () => {
  let component: BlackjackComponent;
  let fixture: ComponentFixture<BlackjackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlackjackComponent, HandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackjackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should give card to player', () => {
    component.hitMe();
    expect(component.player.cards.length).toEqual(1);
  });

  it('should have a full deck', () => {
    expect(component.deck.getDeck().length).toEqual(52);
  });
});
