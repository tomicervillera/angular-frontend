import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { WorkComponent } from './modules/details/components/work/work.component';

import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'games',
    pathMatch: 'full',
  },
  // {
  //   path: 'home',
  //   loadChildren: () =>
  //     import('./modules/home/home.module').then((m) => m.HomeModule),
  // },
  {
    path: 'developers',
    loadChildren: () =>
      import('./modules/developers/developers.module').then((m) => m.DevelopersModule),
  },
  {
    path: 'games',
    loadChildren: () =>
      import('./modules/games/games.module').then((m) => m.GamesModule),
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
    redirectTo: 'games',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
