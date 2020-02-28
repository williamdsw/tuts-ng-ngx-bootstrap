import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SortableExampleRoutingModule } from './sortable-example-routing.module';
import { SharedModule } from "../shared/shared.module";

import { SortableExampleComponent } from './sortable-example.component';

@NgModule({
  declarations: [SortableExampleComponent],
  imports: [
    CommonModule,
    FormsModule,
    SortableExampleRoutingModule,
    SharedModule
  ]
})
export class SortableExampleModule { }
