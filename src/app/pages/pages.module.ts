import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { ProductosComponent } from './productos/productos.component';
import { PagesComponent } from '../pages/pages.component';
import { CompartidaModule } from './compartidas/compartida.module';
import { FormsModule } from '@angular/forms';

// Pipe Module
import { PipesModule } from '../pipes/pipes.module';


import { PAGES_ROUTES } from './pages.routes';
import { PerfilComponent } from './perfil/perfil.component';
import { AdminProductoComponent } from './admin-producto/admin-producto.component';
import { BarraLateralComponent } from './componentes/barra-lateral/barra-lateral.component';

import { ProducListComponent } from './admin-producto/produc-list/produc-list.component';




@NgModule({
    declarations: [
        ProductosComponent,
        PagesComponent,
        PerfilComponent,
        AdminProductoComponent,
        BarraLateralComponent,
        ProducListComponent

    ],
    exports: [
        ProductosComponent
    ],
    imports: [
        CompartidaModule,
        CommonModule,
        PAGES_ROUTES,
        FormsModule,
        PipesModule
    ]
})
  export class PagesModule {}