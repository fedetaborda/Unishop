import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { URL_SERVICIOS } from '../../config/config';
import { MercadoPago } from '../../models/mercadopago';



@Injectable()
export class MercadopagoService {

url: string;

  constructor(public http: HttpClient) { }

  crearMPago( pago: any) {

    let url = URL_SERVICIOS + '/mercadopago';

    return this.http.post( url,  pago  )
              .map( (resp: any) => resp.preference['body']['init_point'] );
  }

  linkUrl( url: string) {
  
    this.url = url;

    console.log( ' service ', this.url );
  
  }

  fucreturn() {

    return this.url;
  }

}
