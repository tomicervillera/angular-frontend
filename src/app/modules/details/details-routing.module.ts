import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailsComponent } from './components/details/details.component';
// import { AuthGuard } from 'src/app/shared/guards/auth.guard';
// import { AuthGuard } from '../../shared/guards/auth.guard';
import { AuthGuard } from '@app/guards/auth.guard';
import { WorkComponent } from './components/work/work.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        // path: 'details/:id',
        // component: DetailsComponent,
        // canActivate: [AuthGuard],
        // 'details/:id'
        // '/:id
        path: 'hero/:id',
        // details/work
        component: DetailsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'work',
        component: WorkComponent,
      },
      {
        path: 'jobs',
        component: JobsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsRoutingModule {}
