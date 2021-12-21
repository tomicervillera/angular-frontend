import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SearchfieldComponent } from './components/searchfield/searchfield.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [SearchfieldComponent, NavbarComponent, FooterComponent],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [SearchfieldComponent, NavbarComponent, FooterComponent],
})
export class SharedModule {}
