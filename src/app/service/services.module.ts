import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  UsuarioService,
  LoginGuardGuard,
  SubirArchivoService,
  ProductoService,
  CategoriaService,
  VerificaTokenGuard,
  AdminGuard
} from './service.index';



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    UsuarioService,
    LoginGuardGuard,
    SubirArchivoService,
    CategoriaService,
    ProductoService,
    VerificaTokenGuard,
    AdminGuard
  ],
  declarations: []
})
export class ServicesModule { }
