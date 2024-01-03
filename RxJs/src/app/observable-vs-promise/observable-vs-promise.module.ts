import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservableVsPromiseComponent } from './observable-vs-promise.component';

const routes: Routes = [
  {
    path: '',
    component: ObservableVsPromiseComponent,
  },
];

@NgModule({
  declarations: [ObservableVsPromiseComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObservableVsPromiseModule {}
