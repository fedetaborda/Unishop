import { Injectable } from '@angular/core';

import { URL_SERVICIOS } from '../../config/config';
import { Ubicacion } from '../../models/ubicacion';
import { UsuarioService } from '../service.index';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class UbicacionService {

  constructor(public _usuarioService: UsuarioService,
              public http: HttpClient) { }


  crearUbicacion( ubicacion: Ubicacion ) {

    let url = URL_SERVICIOS + '/ubicacion';
    url += '?token=' + this._usuarioService.token;

    return this.http.post( url, ubicacion  )
          .map( (resp: any) => {

         swal('Correcto', 'ingreso: ' + resp.ubicacion.direccion + resp.ubicacion.altura , 'success');
      });

  }

  cargarUbicaciones( desde: number = 0 ) {

    let url = URL_SERVICIOS + '/ubicacion?desde=' + desde;
    return this.http.get( url );

  }

  eliminarUbicacion( id: String ) {

 /*  let url = URL_SERVICIOS + '/hospital/' + ubicacion._id;
    url += '?token=' + this._usuarioService.token;

    return this.http.put( url, ubicacion )
              .map( (resp: any) => {
                return resp.ubicacion;
              });*/

              console.log(id);

  }





}
