import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopoverExampleComponent } from './popover-example.component';

const ROUTES: Routes = [
  { path: '', component: PopoverExampleComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class PopoverRoutingExampleModule { }
