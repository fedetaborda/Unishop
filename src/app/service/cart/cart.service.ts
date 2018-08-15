import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { URL_SERVICIOS } from '../../config/config';
import { UsuarioService } from '../usuario/usuario.service';
import { Cart } from '../../models/cart';

@Injectable()
export class CartService {

  constructor(private _usuarioService: UsuarioService,
              private http: HttpClient) { }


  crearCart( cart: Cart ) {

    console.log('desde cart service', cart);
      
    let url = URL_SERVICIOS + '/cart';
    url += '?token=' + this._usuarioService.token;

    return this.http.post( url, cart )
    .map( (resp: any) => console.log(resp.cart) );

  }

  carUser( idUser: string ) {

    let url = URL_SERVICIOS + '/cart/' + idUser;

    return this.http.get( url )
              .map( (resp: any) => resp.cart[0] );

  }

}
