import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { WorkComponent } from './modules/details/components/work/work.component';

import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  // {
  //   path: 'work',
  //   component: WorkComponent,
  // },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'details',
    loadChildren: () =>
      import('./modules/details/details.module').then((m) => m.DetailsModule),
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
