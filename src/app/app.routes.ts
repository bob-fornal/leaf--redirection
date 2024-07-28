import { Routes } from '@angular/router';

import { RedirectionComponent } from './pages/redirection/redirection.component';
import { BaseComponent } from './pages/base/base.component';

export const routes: Routes = [
  { path: 'base/:base', component: BaseComponent},
  { path: '', redirectTo: '/base/base-route', pathMatch: 'full' },

  { path: '**', component: RedirectionComponent },
];
