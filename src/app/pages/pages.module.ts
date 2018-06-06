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
import { RecuperoComponent } from './recupero-login/recupero/recupero.component';


// Pipe Module
import { PipesModule } from '../pipes/pipes.module';

import { PAGES_ROUTES } from './pages.routes';
import { ServicesModule } from '../service/services.module';

import { Buscadorview2Component } from './admin-producto/busqueda-producto/buscadorview2.component';
import { BusquedaProductoComponent } from './admin-producto/busqueda-producto/busqueda-producto.component';
import { PaginadorComponent } from './componentes/paginador/paginador.component';
import { FiltroComponent } from './componentes/filtro/filtro.component';
import { ProductoscompraComponent } from './componentes/productoscompra/productoscompra.component';
import { BuscardorProdComponent } from '../componentes/buscardor-prod/buscardor-prod.component';
import { LinkVistasComponent } from '../componentes/buscardor-prod/link-vistas.component';
import { ProductosViewComponent } from './productos/productos-view.component';
import { Productoscompra2Component } from './componentes/productoscompra/productoscompra2.component';
import { CartListComponent } from './cartList/cartList.component';


import { HeaderComponent } from './compartidas/header/header.component';
import { BuscadorComponent } from '../componentes/buscador/buscador.component';
import { FooterComponent } from './compartidas/footer/footer.component';
import { DireccionpagoComponent } from './direccionpago/direccionpago.component';
import { MediopagoComponent } from './mediopago/mediopago.component';
import { ConfirmpagoComponent } from './confirmpago/confirmpago.component';
import { PagocompletoComponent } from './pagocompleto/pagocompleto.component';
import { CartComponent } from './compartidas/cart/cart.component';
import { NuevoComponent } from './admin-producto/nuevo-prod/nuevo/nuevo.component';
import { EstadoComponent } from './orden/estado.component';
import { InteresComponent } from '../componentes/interes/interes.component';


// import { BarraLateralComponent } from './componentes/barra-lateral/barra-lateral.component';


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
        RecuperoComponent,
        PaginadorComponent,
        FiltroComponent,
       // BarraLateralComponent,
        ProductoscompraComponent,
        BuscardorProdComponent,
        LinkVistasComponent,
        ProductosViewComponent,
        Productoscompra2Component,
        CartListComponent,
        HeaderComponent,
        BuscadorComponent,
        FooterComponent,
        DireccionpagoComponent,
        MediopagoComponent,
        ConfirmpagoComponent,
        PagocompletoComponent,
        CartComponent,
        EstadoComponent,
        InteresComponent

    ],
    exports: [
        ProductosComponent,
        Productoscompra2Component,
        ProductosViewComponent
    ],
    imports: [
        CommonModule,
        PAGES_ROUTES,
        FormsModule,
        PipesModule,
        FormsModule,
        ReactiveFormsModule,
        ServicesModule
    ]
})

export class PagesModule { }