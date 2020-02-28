import { NgModule } from '@angular/core';

import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AlertModule } from 'ngx-bootstrap/alert';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { RatingModule } from 'ngx-bootstrap/rating';
import { SortableModule } from 'ngx-bootstrap/sortable';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

const BOOTSTRAP_COMPONENTS_ROOT = [
  AccordionModule.forRoot (),
  AlertModule.forRoot (),
  CarouselModule.forRoot(),
  BsDatepickerModule.forRoot(),
  ModalModule.forRoot(),
  PaginationModule.forRoot(),
  PopoverModule.forRoot(),
  ProgressbarModule.forRoot(),
  RatingModule.forRoot(),
  SortableModule.forRoot(),
  TabsModule.forRoot(),
  TooltipModule.forRoot(),
];

const BOOTSTRAP_COMPONENTS = [
  AccordionModule,
  AlertModule,
  CarouselModule,
  BsDatepickerModule,
  ModalModule,
  PaginationModule,
  PopoverModule,
  ProgressbarModule,
  RatingModule,
  SortableModule,
  TabsModule,
  TooltipModule,
];

@NgModule({
 imports: [BOOTSTRAP_COMPONENTS_ROOT],
 exports: [BOOTSTRAP_COMPONENTS]
})
export class SharedModule { }
