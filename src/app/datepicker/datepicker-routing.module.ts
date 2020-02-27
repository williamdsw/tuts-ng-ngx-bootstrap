import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatepickerComponent } from './datepicker.component';

const ROUTES: Routes = [
  { path: '', component: DatepickerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class DatepickerRoutingModule { }
