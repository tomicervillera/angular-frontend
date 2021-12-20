import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './components/cards/cards.component';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { PublishersRoutingModule } from './publishers-routing.module';

@NgModule({
  declarations: [CardsComponent, CardComponent, HomeComponent],
  imports: [CommonModule, PublishersRoutingModule, RouterModule],
})
export class PublishersModule {}
