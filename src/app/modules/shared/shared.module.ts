import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CardComponent } from './components/card/card.component';
import { CardsComponent } from './components/cards/cards.component';
import { SearchfieldComponent } from './components/searchfield/searchfield.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    CardComponent,
    CardsComponent,
    SearchfieldComponent,
    NavbarComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [
    CardComponent,
    CardsComponent,
    SearchfieldComponent,
    NavbarComponent,
  ],
})
export class SharedModule {}
