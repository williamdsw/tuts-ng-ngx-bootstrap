import { NgModule } from '@angular/core';

import { AccordionModule } from 'ngx-bootstrap/accordion';

const BOOSTRAP_COMPONENTS_ROOT = [
  AccordionModule.forRoot (),
];

const BOOSTRAP_COMPONENTS = [
  AccordionModule
];

@NgModule({
 imports: [BOOSTRAP_COMPONENTS_ROOT],
 exports: [BOOSTRAP_COMPONENTS]
})
export class SharedModule { }
