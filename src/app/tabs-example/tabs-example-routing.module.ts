import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsExampleComponent } from './tabs-example.component';

const ROUTES: Routes = [
  { path: '', component: TabsExampleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class TabsExampleRoutingModule { }
