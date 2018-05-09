import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { ProductosComponent } from './productos/productos.component';
import { LoginComponent } from './login/login.component';
import { LoginGuardGuard, VerificaTokenGuard } from '../service/service.index';
import { PerfilComponent } from './perfil/perfil.component';
import { AdminProductoComponent } from './admin-producto/admin-producto.component';
import { NuevoComponent } from './admin-producto/nuevo-prod/nuevo.component';
import { ProducListComponent } from './admin-producto/produc-list/produc-list.component';
import { DetalleCategoriaComponent } from './admin-producto/detalle-categoria/detalle-categoria.component';
import { DetalleMarcaComponent } from './admin-producto/detalle-marca/detalle-marca.component';
import { BusquedaProductoComponent } from './admin-producto/busqueda-producto/busqueda-producto.component';
import { Buscadorview2Component } from './admin-producto/busqueda-producto/buscadorview2.component';
import { ProductosViewComponent } from './productos/productos-view.component';
import { CartListComponent } from './cartList/cartList.component';
import { DireccionpagoComponent } from './direccionpago/direccionpago.component';
import { MediopagoComponent } from './mediopago/mediopago.component';
import { ConfirmpagoComponent } from './confirmpago/confirmpago.component';
import { PagocompletoComponent } from './pagocompleto/pagocompleto.component';





const PagesRoutes: Routes = [

    { path: '',
     component: PagesComponent,
     canActivate: [ LoginGuardGuard ],

     children: [
        { path: 'productos', component: ProductosComponent },
        { path: 'viewproductos', component: ProductosViewComponent },
        { path: 'busqueda/:id', component: BusquedaProductoComponent },
        { path: 'list/:id', component: Buscadorview2Component },
        { path: 'cartList', component: CartListComponent },
        { path: 'checkout-address', component: DireccionpagoComponent },
        { path: 'checkout-pago', component: MediopagoComponent },
        { path: 'confirm-pago', component: ConfirmpagoComponent },
        { path: 'pago-finalizado', component: PagocompletoComponent },

        // VerificaTokenGuard - Verifica Loguin
        { path: 'perfil',
        component: PerfilComponent, canActivate: [ VerificaTokenGuard ] },

        { path: 'admin-prod',
        component: AdminProductoComponent, canActivate: [ VerificaTokenGuard ],

        children: [
            { path: '', component: ProducListComponent },
            { path: 'nuevo', component: NuevoComponent },
            { path: 'categorias', component: DetalleCategoriaComponent },
            { path: 'marcas', component: DetalleMarcaComponent },
            { path: '', redirectTo: '/produc-list', pathMatch: 'full' }
            ]
         },

        { path: '', redirectTo: '/productos', pathMatch: 'full' }
     ],

     }
];
export const PAGES_ROUTES = RouterModule.forChild(PagesRoutes);