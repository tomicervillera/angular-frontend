import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './components/cards/cards.component';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { GamesRoutingModule } from './games-routing.module';
import { DetailsComponent } from './components/details/details.component';



@NgModule({
  declarations: [
    CardsComponent,
    CardComponent,
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
    RouterModule
  ]
})
export class GamesModule { }
