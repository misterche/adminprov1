import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { ChartsModule } from 'ng2-charts';


import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficasComponent } from './graficas/graficas.component';

import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.modules'

import { APP_ROUTES_CHILD } from './pages.routes'


//nuevo componente temporal
import { IncrementComponent } from '../components/increment/increment.component'
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component'

@NgModule({
 declarations: [
 	  PagesComponent,
    DashboardComponent,
    ProgressComponent,
    GraficasComponent,
    IncrementComponent,
    GraficoDonaComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    GraficasComponent
  ],
  imports:[
    APP_ROUTES_CHILD,
  	SharedModule,
    FormsModule,
    ChartsModule
  ]
})

export class PagesModule { }