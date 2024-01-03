import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'observable-vs-promise',
    loadChildren: () =>
      import('./observable-vs-promise/observable-vs-promise.module').then(
        (m) => m.ObservableVsPromiseModule
      ),
  },
  {
    path: 'operators',
    loadChildren: () =>
      import('./operators/operators.module').then((m) => m.OperatorsModule),
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
