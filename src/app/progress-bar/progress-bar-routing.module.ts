import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgressBarComponent } from './progress-bar.component';

const ROUTES: Routes = [
  { path: '', component: ProgressBarComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class ProgressBarRoutingModule { }
