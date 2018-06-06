import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/config';
import { Ubicacion } from '../../models/ubicacion';
import { UsuarioService } from '../service.index';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class MercadopagoService {

  constructor(public _usuarioService: UsuarioService,
              public http: HttpClient) { }

  crearpago() {

    let url = URL_SERVICIOS + '/mercadopago';

    return this.http.get( url )
                .map( (resp: any) =>  resp.preference.response.init_point );
  }

}
