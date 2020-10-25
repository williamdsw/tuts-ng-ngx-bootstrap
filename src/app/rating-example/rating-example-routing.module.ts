import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RatingExampleComponent } from './rating-example.component';

const ROUTES: Routes = [
  { path: '', component: RatingExampleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class RatingExampleRoutingModule { }
