import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { RecuperoComponent } from './pages/recupero-login/recupero/recupero.component';
import { ErrorpageComponent } from './pages/404/errorpage.component';



const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'recupero_login', component: RecuperoComponent},
    { path: '**', component: ErrorpageComponent }

];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true } );