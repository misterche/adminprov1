import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//referencia a las rutas de las paginas
import { APP_ROUTES} from './app.routes'

//referencia a los modulos
import {PagesModule} from './pages/pages.module'

//componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
