import { Injectable } from '@angular/core';
import { Producto } from '../../models/producto';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { URL_SERVICIOS } from '../../config/config';

import { UsuarioService } from '../usuario/usuario.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { NgForm } from '@angular/forms';

import swal from 'sweetalert';


@Injectable()
export class ProductoService {

  producto: Producto;

  constructor(
    public http: HttpClient,
    public _usuarioService: UsuarioService
  ) { }


  crearProducto( producto: Producto ) {

    let url = URL_SERVICIOS + '/producto';
    url += '?token=' + this._usuarioService.token;

    return this.http.post( url, { producto } )
              .map( (resp: any) => resp.producto );
  }

}
