import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertsComponent } from './alerts.component';
import { AlertsRoutingModule } from './alerts-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AlertsComponent],
  imports: [
    CommonModule,
    AlertsRoutingModule,
    SharedModule
  ]
})
export class AlertsModule { }
