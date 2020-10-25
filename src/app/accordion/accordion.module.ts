import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionRoutingModule } from './accordion-routing.module';

import { AccordionComponent } from './accordion.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AccordionComponent],
  imports: [
    CommonModule,
    AccordionRoutingModule,
    SharedModule
  ]
})
export class AccordionModule { }
