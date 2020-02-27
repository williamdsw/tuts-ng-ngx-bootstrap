import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressBarRoutingModule } from './progress-bar-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ProgressBarComponent } from './progress-bar.component';

@NgModule({
  declarations: [ProgressBarComponent],
  imports: [
    CommonModule,
    ProgressBarRoutingModule,
    SharedModule
  ]
})
export class ProgressBarModule { }
