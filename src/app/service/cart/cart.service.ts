import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { URL_SERVICIOS } from '../../config/config';
import { UsuarioService } from '../usuario/usuario.service';
import { Cart } from '../../models/cart';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Router } from '@angular/router';

//import swal from 'sweetalert';

@Injectable()
export class CartService {

  compra: string;

  constructor(private _usuarioService: UsuarioService,
              public router: Router,
              private http: HttpClient) { }


detalleCompras( id: string) {

  let url = URL_SERVICIOS + '/cart/num-compra/' + id;
  return this.http.get( url );

}

detalleCompra( id: string) {

  let url = URL_SERVICIOS + '/cart/num-compra/';
  url += '?token=' + this._usuarioService.token;
  
  return this.http.post( url, {id: id} )
        .map( (resp: any) => resp );

}

comprasTotales() {

  let url = URL_SERVICIOS + '/cart/cant-compras';
  url += '?token=' + this._usuarioService.token;

  return this.http.get( url )
  .map( (resp: any) => resp );

  }


comprasPorUsuario( user: string) {

  let url = URL_SERVICIOS + '/cart/' + user;
  return this.http.get( url );

  }


crearCart( cart: Cart ) {
 
    let url = URL_SERVICIOS + '/cart';
    url += '?token=' + this._usuarioService.token;

    return this.http.post( url, cart )
    .map( (resp: any) => resp)

    .catch( err => {

      swal( 'Error Inesperado', err.error.mensaje, 'error' );
      this.router.navigate(['/productos']);
      return Observable.throw( err );
    });

  }

  idcompra (idcompra: string): void {

    this.compra = idcompra;

 }

}
