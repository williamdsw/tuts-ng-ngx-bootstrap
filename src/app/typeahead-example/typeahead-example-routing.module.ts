import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TypeaheadExampleComponent } from './typeahead-example.component';

const ROUTES: Routes = [
  { path: '', component: TypeaheadExampleComponent },
]

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class TypeaheadExampleRoutingModule { }
