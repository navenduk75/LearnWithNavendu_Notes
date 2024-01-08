import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectsComponent } from './subjects.component';

const routes: Routes = [
  {
    path: '',
    component: SubjectsComponent,
  },
];

@NgModule({
  declarations: [SubjectsComponent],
  imports: [RouterModule.forChild(routes)],
})
export class SubjectsModule {}
