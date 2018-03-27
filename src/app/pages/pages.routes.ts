import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { ProductosComponent } from './productos/productos.component';
import { LoginComponent } from './login/login.component';
import { LoginGuardGuard } from '../service/service.index';
import { PerfilComponent } from './perfil/perfil.component';
import { AdminProductoComponent } from './admin-producto/admin-producto.component';
import { NuevoComponent } from './admin-producto/nuevo-prod/nuevo/nuevo.component';
import { ProducListComponent } from './admin-producto/produc-list/produc-list.component';
import { DetalleCategoriaComponent } from './admin-producto/detalle-categoria/detalle-categoria.component';
import { DetalleMarcaComponent } from './admin-producto/detalle-marca/detalle-marca.component';


const PagesRoutes: Routes = [

    { path: '',
     component: PagesComponent,
     canActivate: [ LoginGuardGuard ],
     children: [
        { path: 'productos', component: ProductosComponent },
        { path: 'perfil', component: PerfilComponent },
        { path: 'admin-prod',
        component: AdminProductoComponent,
        children: [
            { path: '', component: ProducListComponent },
            { path: 'nuevo', component: NuevoComponent },
            { path: 'categorias', component: DetalleCategoriaComponent },
            { path: 'marcas', component: DetalleMarcaComponent},
            { path: '', redirectTo: '/produc-list', pathMatch: 'full' }
            ]
         },
        { path: '', redirectTo: '/productos', pathMatch: 'full' }
     ]
     }
];
export const PAGES_ROUTES = RouterModule.forChild(PagesRoutes);