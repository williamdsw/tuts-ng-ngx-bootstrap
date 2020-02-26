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
  { path: '', pathMatch: 'full', redirectTo: 'accordion' }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
