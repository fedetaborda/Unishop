import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Pages
import { ProductosComponent } from './productos/productos.component';
import { PagesComponent } from './pages.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AdminProductoComponent } from './admin-producto/admin-producto.component';
import { DetalleMarcaComponent } from './admin-producto/detalle-marca/detalle-marca.component';
import { DetalleCategoriaComponent } from './admin-producto/detalle-categoria/detalle-categoria.component';
import { RecuperoComponent } from './recupero-login/recupero/recupero.component';


// Pipe Module
import { PipesModule } from '../pipes/pipes.module';


import { PAGES_ROUTES } from './pages.routes';
import { ServicesModule } from '../service/services.module';

import { BusquedaProductoComponent } from './admin-producto/busqueda-producto/busqueda-producto.component';
import { PaginadorComponent } from './componentes/paginador/paginador.component';
import { ProductoscompraComponent } from './componentes/productoscompra/productoscompra.component';
import { BuscardorProdComponent } from '../componentes/buscardor-prod/buscardor-prod.component';
import { CartListComponent } from './cartList/cartList.component';


import { HeaderComponent } from './compartidas/header/header.component';
import { BuscadorComponent } from '../componentes/buscador/buscador.component';
import { FooterComponent } from './compartidas/footer/footer.component';
import { DireccionpagoComponent } from './direccionpago/direccionpago.component';
import { MediopagoComponent } from './mediopago/mediopago.component';
import { ConfirmpagoComponent } from './confirmpago/confirmpago.component';
import { PagocompletoComponent } from './pagocompleto/pagocompleto.component';
import { NuevoComponent } from './admin-producto/nuevo-prod/nuevo/nuevo.component';
import { MercadopagoComponent } from './mercadopago/mercadopago.component';
import { InicioCategoriasComponent } from './inicio-categorias/inicio-categorias.component';

import { BarraLateralComponent } from './componentes/barra-lateral/barra-lateral.component';
import { SidebarComponent } from './siderbar/sidebar.component';
import { ErrorpageComponent } from './404/errorpage.component';
import { ComprasComponent } from './perfil/compras/compras.component';
import { DetallecompraComponent } from './perfil/detallecompra/detallecompra.component';





@NgModule({
    declarations: [
        ProductosComponent,
        PagesComponent,
        PerfilComponent,
        AdminProductoComponent,
        DetalleMarcaComponent,
        DetalleCategoriaComponent,
        NuevoComponent,
        BusquedaProductoComponent,
        RecuperoComponent,
        PaginadorComponent,
        BarraLateralComponent,
        ProductoscompraComponent,
        BuscardorProdComponent,
        CartListComponent,
        HeaderComponent,
        BuscadorComponent,
        FooterComponent,
        DireccionpagoComponent,
        MediopagoComponent,
        ConfirmpagoComponent,
        PagocompletoComponent,
        MercadopagoComponent,
        InicioCategoriasComponent,
        SidebarComponent,
        ErrorpageComponent,
        ComprasComponent,
        DetallecompraComponent

    ],
    exports: [
        ProductosComponent,

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