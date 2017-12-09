import { HandComponent } from './hand.component';
import { Card } from '../blackjackCards/card';
import { Hand } from '../blackjackCards/hand';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

describe('HandComponent', () => {
  let component: HandComponent;
  let fixture: ComponentFixture<HandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandComponent);
    component = fixture.componentInstance;

    const hand: Hand = new Hand();
    component.hand = hand;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
