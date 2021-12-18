import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';

import { DetailsComponent } from './components/details/details.component';
import { WorkComponent } from './components/work/work.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [DetailsComponent, WorkComponent, JobsComponent, HomeComponent],
  imports: [CommonModule, DetailsRoutingModule],
})
export class DetailsModule {}
