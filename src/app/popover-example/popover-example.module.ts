import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopoverRoutingExampleModule } from './popover-routing-example.module';
import { SharedModule } from '../shared/shared.module';

import { PopoverExampleComponent } from './popover-example.component';

@NgModule({
  declarations: [PopoverExampleComponent],
  imports: [
    CommonModule,
    PopoverRoutingExampleModule,
    SharedModule
  ]
})
export class PopoverExampleModule { }
