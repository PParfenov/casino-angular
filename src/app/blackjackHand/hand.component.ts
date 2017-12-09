///<reference path="../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import { Component, OnInit, Input } from '@angular/core';
import { Hand } from '../blackjackCards/hand';

@Component({
  selector: 'app-blackjackhand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.scss']
})
export class HandComponent implements OnInit {
  @Input() hand: Hand;

  constructor() { }

  ngOnInit() {
  }
}
