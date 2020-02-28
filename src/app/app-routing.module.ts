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
  {
    path: 'modals',
    loadChildren: () => import('./modals/modals.module').then(mod => mod.ModalsModule)
  },
  {
    path: 'pagination',
    loadChildren: () => import('./pagination-example/pagination-example.module').then(mod => mod.PaginationExampleModule)
  },
  {
    path: 'popover',
    loadChildren: () => import('./popover-example/popover-example.module').then(mod => mod.PopoverExampleModule)
  },
  {
    path: 'progress-bar',
    loadChildren: () => import('./progress-bar/progress-bar.module').then(mod => mod.ProgressBarModule)
  },
  {
    path: 'rating',
    loadChildren: () => import('./rating-example/rating-example.module').then(mod => mod.RatingExampleModule)
  },
  {
    path: 'sortable',
    loadChildren: () => import('./sortable-example/sortable-example.module').then(mod => mod.SortableExampleModule)
  },
  { path: '', pathMatch: 'full', redirectTo: 'accordion' }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
