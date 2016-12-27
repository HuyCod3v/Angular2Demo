import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EagerComponent } from './eager.component';

const routes: Routes = [
  { path: 'eager', component: EagerComponent },
  { path: '', redirectTo: 'eager', pathMatch: 'full' },
  { path: 'lazy', loadChildren: () => require('es6-promise!./lazy/lazy.module')('LazyModule') }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);