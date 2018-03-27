import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';

// Routes
import { APP_ROUTES } from './app.rutes';


// Modules
import { PagesModule } from './pages/pages.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




// Services
import { ServicesModule } from './service/services.module';
import { NuevoComponent } from './pages/admin-producto/nuevo-prod/nuevo/nuevo.component';
import { DetalleMarcaComponent } from './pages/admin-producto/detalle-marca/detalle-marca.component';
import { DetalleCategoriaComponent } from './pages/admin-producto/detalle-categoria/detalle-categoria.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NuevoComponent,
    DetalleMarcaComponent,
    DetalleCategoriaComponent

  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    FormsModule,
    ReactiveFormsModule,
    ServicesModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
