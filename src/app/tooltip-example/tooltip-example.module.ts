import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TooltipRoutingExampleModule } from './tooltip-routing-example.module';

import { SharedModule } from '../shared/shared.module';

import { TooltipExampleComponent } from './tooltip-example.component';

@NgModule({
  declarations: [TooltipExampleComponent],
  imports: [
    CommonModule,
    TooltipRoutingExampleModule,
    SharedModule
  ]
})
export class TooltipExampleModule { }
