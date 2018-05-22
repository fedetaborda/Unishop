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

  cargarUbicacion( id: String ) {

    let url = URL_SERVICIOS + '/ubicacion/location/' + id;

    return this.http.get( url );


  }

  cargarUbicaciones( id: String ) {

    let url = URL_SERVICIOS + '/ubicacion/' + id;
    return this.http.get( url );

  }

  eliminarUbicacion( id: String ) {

 let url = URL_SERVICIOS + '/ubicacion/' + id;
    url += '?token=' + this._usuarioService.token;

    return this.http.put( url, id )
              .map( (resp: any) => {
                return resp.ubicacion;
              });

  }





}
