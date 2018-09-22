import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { URL_SERVICIOS } from '../../config/config';
import { UsuarioService } from '../usuario/usuario.service';
import { Cart } from '../../models/cart';

@Injectable()
export class CartService {

  compra: string;

  constructor(private _usuarioService: UsuarioService,
              private http: HttpClient) { }


detalleCompras( id: string) {

  let url = URL_SERVICIOS + '/cart/num-compra/' + id;
  return this.http.get( url )

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
    .map( (resp: any) => resp.cart );

  }

  idcompra (idcompra: string): void {

    this.compra = idcompra;

 }

}
