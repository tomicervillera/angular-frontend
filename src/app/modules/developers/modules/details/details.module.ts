import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';


@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule
  ]
})
export class DetailsModule { }
