import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { ptBrLocale } from 'ngx-bootstrap/locale';

import { DatepickerRoutingModule } from './datepicker-routing.module';
import { SharedModule } from '../shared/shared.module';

import { DatepickerComponent } from './datepicker.component';

defineLocale ('pt-br', ptBrLocale);

@NgModule({
  declarations: [DatepickerComponent],
  imports: [
    CommonModule,
    FormsModule,
    DatepickerRoutingModule,
    SharedModule
  ]
})
export class DatepickerModule { }
