import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CasinoComponent } from './casino/casino.component';


@NgModule({
  declarations: [
    AppComponent,
    CasinoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'casino', component: CasinoComponent },
      { path: '', redirectTo: 'casino', pathMatch: 'full' },
      { path: '**', redirectTo: 'casino', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
