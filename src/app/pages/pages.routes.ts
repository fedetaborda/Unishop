import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { ProductosComponent } from './productos/productos.component';
import { LoginComponent } from './login/login.component';
import { LoginGuardGuard } from '../service/service.index';


const PagesRoutes: Routes = [

    { path: '',
     component: PagesComponent,
     canActivate: [ LoginGuardGuard ],
     children: [
        { path: 'productos', component: ProductosComponent },
        { path: '', redirectTo: '/productos', pathMatch: 'full' }
     ]
     }
];
export const PAGES_ROUTES = RouterModule.forChild(PagesRoutes);