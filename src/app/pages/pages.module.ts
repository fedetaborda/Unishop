import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Pages
import { ProductosComponent } from './productos/productos.component';
import { PagesComponent } from '../pages/pages.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AdminProductoComponent } from './admin-producto/admin-producto.component';
import { ProducListComponent } from './admin-producto/produc-list/produc-list.component';
import { DetalleMarcaComponent } from './admin-producto/detalle-marca/detalle-marca.component';
import { DetalleCategoriaComponent } from './admin-producto/detalle-categoria/detalle-categoria.component';
import { NuevoComponent } from './admin-producto/nuevo-prod/nuevo.component';
import { RecuperoComponent } from './recupero-login/recupero/recupero.component';



// Module
import { CompartidaModule } from './compartidas/compartida.module';


// Pipe Module
import { PipesModule } from '../pipes/pipes.module';

import { PAGES_ROUTES } from './pages.routes';
import { ServicesModule } from '../service/services.module';

import { Buscadorview2Component } from './admin-producto/busqueda-producto/buscadorview2.component';
import { BusquedaProductoComponent } from './admin-producto/busqueda-producto/busqueda-producto.component';
import { BarraLateralComponent } from '../componentes/barra-lateral/barra-lateral.component';



@NgModule({
    declarations: [
        ProductosComponent,
        PagesComponent,
        PerfilComponent,
        AdminProductoComponent,
        ProducListComponent,
        DetalleMarcaComponent,
        DetalleCategoriaComponent,
        NuevoComponent,
        Buscadorview2Component,
        BusquedaProductoComponent,
        BarraLateralComponent,
        RecuperoComponent
    ],
    exports: [
        ProductosComponent
    ],
    imports: [
        CompartidaModule,
        CommonModule,
        PAGES_ROUTES,
        FormsModule,
        PipesModule,
        FormsModule,
        ReactiveFormsModule,
        ServicesModule
    ]
})
  export class PagesModule {}