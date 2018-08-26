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
