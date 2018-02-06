import { Routes, RouterModule } from '@angular/router'

import { PagesComponent } from './pages.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { ProgressComponent } from './progress/progress.component'
import { GraficasComponent } from './graficas/graficas.component'


const pagesRoutes: Routes = [
	{ path: '', component: PagesComponent,
		children:[
			{ path: 'dashboard', component: DashboardComponent},
			{ path: 'progress', component:ProgressComponent},
			{ path: 'graficas1', component:GraficasComponent},
			{ path:'', redirectTo: '/dashboard', pathMatch: 'full'}
		]
	}
];

export const APP_ROUTES_CHILD = RouterModule.forChild(pagesRoutes);