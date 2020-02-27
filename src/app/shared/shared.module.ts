import { NgModule } from '@angular/core';

import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AlertModule } from 'ngx-bootstrap/alert';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

const BOOTSTRAP_COMPONENTS_ROOT = [
  AccordionModule.forRoot (),
  AlertModule.forRoot (),
  CarouselModule.forRoot(),
  BsDatepickerModule.forRoot()
];

const BOOTSTRAP_COMPONENTS = [
  AccordionModule,
  AlertModule,
  CarouselModule,
  BsDatepickerModule
];

@NgModule({
 imports: [BOOTSTRAP_COMPONENTS_ROOT],
 exports: [BOOTSTRAP_COMPONENTS]
})
export class SharedModule { }
