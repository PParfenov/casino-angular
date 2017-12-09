import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-casino',
  templateUrl: './casino.component.html',
  styleUrls: ['./casino.component.css']
})
export class CasinoComponent implements OnInit {
  pageTitle: string = "Welcome to Uncle Bob's backyard Casinooooooo!";

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
