import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CasinoComponent } from './casino/casino.component';
import { UsersComponent } from './users/users.component';
import { BlackjackComponent } from './blackjack/blackjack.component';


@NgModule({
  declarations: [
    AppComponent,
    CasinoComponent,
    UsersComponent,
    BlackjackComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'casino', component: CasinoComponent }
      ,{ path: '', redirectTo: 'casino', pathMatch: 'full' }
      ,{ path: '**', redirectTo: 'casino', pathMatch: 'full' }
      ,{ path: 'blackjack', component: BlackjackComponent }
      // ,{ path: 'gofish', component: GoFishComponent }
      // ,{ path: 'craps', component: CrapsComponent }
    ]),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
