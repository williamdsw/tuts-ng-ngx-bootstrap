import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsExampleRoutingModule } from './tabs-example-routing.module';

import { SharedModule } from '../shared/shared.module';

import { TabsExampleComponent } from './tabs-example.component';

@NgModule({
  declarations: [TabsExampleComponent],
  imports: [
    CommonModule,
    TabsExampleRoutingModule,
    SharedModule
  ]
})
export class TabsExampleModule { }
