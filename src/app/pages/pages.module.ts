import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { ProductosComponent } from './productos/productos.component';
import { PagesComponent } from '../pages/pages.component';
import { CompartidaModule } from './compartidas/compartida.module';


import { PAGES_ROUTES } from './pages.routes';


@NgModule({
    declarations: [
        ProductosComponent,
        PagesComponent
    ],
    exports: [
        ProductosComponent
    ],
    imports: [
        CompartidaModule,
        PAGES_ROUTES
    ]

  })
  export class PagesModule {}