import { RouterModule, Routes } from '@angular/router';


import { ProductosComponent } from './pages/productos/productos.component';
import { LoginComponent } from './pages/login/login.component';
import { RecuperoComponent } from './pages/recupero-login/recupero/recupero.component';



const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'recupero_login', component: RecuperoComponent}

];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });