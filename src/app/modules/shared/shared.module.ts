import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SearchfieldComponent } from './components/searchfield/searchfield.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [SearchfieldComponent, NavbarComponent],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [SearchfieldComponent, NavbarComponent],
})
export class SharedModule {}
