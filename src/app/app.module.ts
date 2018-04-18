import { BrowserModule } from '@angular/platform-browser';

// LOCALE_ID Mes en Español
import { NgModule, LOCALE_ID } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';

// Routes
import { APP_ROUTES } from './app.rutes';


// Modules
import { PagesModule } from './pages/pages.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// Services
import { ServicesModule } from './service/services.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
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
