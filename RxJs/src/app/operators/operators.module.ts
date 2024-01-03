import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperatorsComponent } from './operators.component';

const routes: Routes = [
  {
    path: '',
    component: OperatorsComponent,
  },
];

@NgModule({
  declarations: [OperatorsComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperatorsModule {}
