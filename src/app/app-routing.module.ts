import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes = [
  { 
    path: 'accordion',
    loadChildren: () => import ('./accordion/accordion.module').then (mod => mod.AccordionModule)
  },
  {
    path: 'alerts',
    loadChildren: () => import('./alerts/alerts.module').then(mod => mod.AlertsModule)
  },
  {
    path: 'carousel',
    loadChildren: () => import('./carousel/carousel.module').then(mod => mod.CarouselModule)
  },
  {
    path: 'datepicker',
    loadChildren: () => import('./datepicker/datepicker.module').then(mod => mod.DatepickerModule)
  },
  { path: '', pathMatch: 'full', redirectTo: 'accordion' }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
