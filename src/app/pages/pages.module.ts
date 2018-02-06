import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficasComponent } from './graficas/graficas.component';

import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.modules'

import { APP_ROUTES_CHILD } from './pages.routes'


@NgModule({
 declarations: [
 	  PagesComponent,
    DashboardComponent,
    ProgressComponent,
    GraficasComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    GraficasComponent
  ],
  imports:[
    APP_ROUTES_CHILD,
  	SharedModule
  ]
})

export class PagesModule { }