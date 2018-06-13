import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { URL_SERVICIOS } from '../../config/config';
import { MercadoPago } from '../../models/mercadopago';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable()
export class MercadopagoService {

url: string;

  constructor(public http: HttpClient) { }

  crearMPago( pago: any ) {

    let url = URL_SERVICIOS + '/mercadopago';

    return this.http.post( url,  pago  )
              .map( (resp: any) =>  resp.preference['body']['init_point'] )

              .catch( err => {

                swal( 'Error al generar el pago', err.error.mensaje, 'error' );
                return Observable.throw( err );
              });
  }


}
