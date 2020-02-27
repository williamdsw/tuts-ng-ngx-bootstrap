import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PaginationExampleRoutingModule } from './pagination-example-routing.module';
import { SharedModule } from '../shared/shared.module';

import { PaginationExampleComponent } from './pagination-example.component';

@NgModule({
  declarations: [PaginationExampleComponent],
  imports: [
    CommonModule,
    PaginationExampleRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class PaginationExampleModule { }
