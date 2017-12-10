import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CasinoComponent } from './casino/casino.component';
import { UsersComponent } from './users/users.component';
import { BlackJackComponent } from './blackjack/blackjack.component';
import { HandComponent } from './blackjackHand/hand.component';


@NgModule({
  declarations: [
    AppComponent,
    CasinoComponent,
    UsersComponent,
    BlackJackComponent,
    HandComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'casino', component: CasinoComponent }
      ,{ path: 'blackjack', component: BlackJackComponent }
      //lal, make sure the redirects are below the actual links, it's first come first serve

      // ,{ path: 'gofish', component: GoFishComponent }
      // ,{ path: 'craps', component: CrapsComponent }
      ,{ path: '', redirectTo: 'blackjack', pathMatch: 'full' }
      ,{ path: '**', redirectTo: 'casino', pathMatch: 'full' }
    ]),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
