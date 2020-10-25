import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselRoutingModule } from './carousel-routing.module';

import { SharedModule } from '../shared/shared.module';

import { CarouselComponent } from './carousel.component';

@NgModule({
  declarations: [CarouselComponent],
  imports: [
    CommonModule,
    CarouselRoutingModule,
    SharedModule
  ]
})
export class CarouselModule { }
