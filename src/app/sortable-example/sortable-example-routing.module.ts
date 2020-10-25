import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SortableExampleComponent } from './sortable-example.component';

const ROUTES: Routes = [
  { path: '', component: SortableExampleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class SortableExampleRoutingModule { }
