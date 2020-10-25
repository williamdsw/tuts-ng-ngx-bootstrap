import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TypeaheadExampleRoutingModule } from './typeahead-example-routing.module';

import { SharedModule } from '../shared/shared.module';

import { TypeaheadExampleComponent } from './typeahead-example.component';

@NgModule({
  declarations: [TypeaheadExampleComponent],
  imports: [
    CommonModule,
    FormsModule,
    TypeaheadExampleRoutingModule,
    SharedModule
  ]
})
export class TypeaheadExampleModule { }
