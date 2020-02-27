import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalsRoutingModule } from './modals-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ModalsComponent } from './modals.component';

@NgModule({
  declarations: [ModalsComponent],
  imports: [
    CommonModule,
    ModalsRoutingModule,
    SharedModule,
  ]
})
export class ModalsModule { }
