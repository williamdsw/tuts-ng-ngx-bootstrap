import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AccordionComponent } from './accordion.component';

const ROUTES: Routes = [
    { path: '', component: AccordionComponent }
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class AccordionRoutingModule {}