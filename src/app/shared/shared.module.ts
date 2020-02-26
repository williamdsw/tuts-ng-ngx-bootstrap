import { NgModule } from '@angular/core';

import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AlertModule } from 'ngx-bootstrap/alert';

const BOOTSTRAP_COMPONENTS_ROOT = [
  AccordionModule.forRoot (),
  AlertModule.forRoot (),
];

const BOOTSTRAP_COMPONENTS = [
  AccordionModule,
  AlertModule
];

@NgModule({
 imports: [BOOTSTRAP_COMPONENTS_ROOT],
 exports: [BOOTSTRAP_COMPONENTS]
})
export class SharedModule { }
