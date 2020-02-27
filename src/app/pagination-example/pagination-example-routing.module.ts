import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginationExampleComponent } from './pagination-example.component';

const ROUTES: Routes = [
  { path: '', component: PaginationExampleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class PaginationExampleRoutingModule { }
