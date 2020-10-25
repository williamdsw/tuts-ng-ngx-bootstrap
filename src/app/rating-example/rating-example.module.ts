import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RatingExampleRoutingModule } from './rating-example-routing.module';

import { SharedModule } from '../shared/shared.module';

import { RatingExampleComponent } from './rating-example.component';

@NgModule({
  declarations: [RatingExampleComponent],
  imports: [
    CommonModule,
    FormsModule,
    RatingExampleRoutingModule,
    SharedModule
  ]
})
export class RatingExampleModule { }
