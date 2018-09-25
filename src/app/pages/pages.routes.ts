import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ProductosComponent } from './productos/productos.component';
import { LoginGuardGuard, VerificaTokenGuard, AdminGuard } from '../service/service.index';
import { PerfilComponent } from './perfil/perfil.component';
import { AdminProductoComponent } from './admin-producto/admin-producto.component';
import { DetalleCategoriaComponent } from './admin-producto/detalle-categoria/detalle-categoria.component';
import { DetalleMarcaComponent } from './admin-producto/detalle-marca/detalle-marca.component';
import { BusquedaProductoComponent } from './admin-producto/busqueda-producto/busqueda-producto.component';
import { CartListComponent } from './cartList/cartList.component';
import { DireccionpagoComponent } from './direccionpago/direccionpago.component';
import { MediopagoComponent } from './mediopago/mediopago.component';
import { ConfirmpagoComponent } from './confirmpago/confirmpago.component';
import { PagocompletoComponent } from './pagocompleto/pagocompleto.component';
import { NuevoComponent } from './admin-producto/nuevo-prod/nuevo/nuevo.component';
import { MercadopagoComponent } from './mercadopago/mercadopago.component';
import { InicioCategoriasComponent } from './inicio-categorias/inicio-categorias.component';
import { ComprasComponent } from './perfil/compras/compras.component';
import { DetallecompraComponent } from './perfil/detallecompra/detallecompra.component';




const PagesRoutes: Routes = [

    { path: '',
    component: PagesComponent,
    canActivate: [ LoginGuardGuard, VerificaTokenGuard ],

    children: [
        { path: 'index/categorias', component: InicioCategoriasComponent },
        { path: 'productos', component: ProductosComponent },
        { path: 'busqueda/:id', component: BusquedaProductoComponent },

        { path: 'cartList', component: CartListComponent },
        { path: 'checkout-address', component: DireccionpagoComponent },
        { path: 'checkout-pago', component: MediopagoComponent },
        { path: 'confirm-pago', component: ConfirmpagoComponent },
        { path: 'pago-finalizado', component: PagocompletoComponent },
        { path: 'perfil', component: PerfilComponent },
        { path: 'compras', component: ComprasComponent },
        { path: 'mercadopago', component: MercadopagoComponent },
        { path: 'detallecompra/:id', component: DetallecompraComponent },

        { path: '', redirectTo: 'index/categorias', pathMatch: 'full' },

        // VerificaTokenGuard - Verifica Login
        { path: 'admin-prod',
        component: AdminProductoComponent, canActivate: [ AdminGuard , LoginGuardGuard, VerificaTokenGuard ],

        children: [
            { path: '', component: NuevoComponent },
            { path: 'categorias', component: DetalleCategoriaComponent },
            { path: 'marcas', component: DetalleMarcaComponent },
            { path: 'nuevo', component: NuevoComponent }

           ]

        }

        ]},

    ];


export const PAGES_ROUTES = RouterModule.forChild( PagesRoutes );