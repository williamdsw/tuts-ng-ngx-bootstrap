import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TooltipExampleComponent } from './tooltip-example.component';

const ROUTES: Routes = [
  { path: '', component: TooltipExampleComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class TooltipRoutingExampleModule { }
