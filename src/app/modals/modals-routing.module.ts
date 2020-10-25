import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalsComponent } from './modals.component';

const ROUTES: Routes = [
  { path: '', component: ModalsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class ModalsRoutingModule { }
