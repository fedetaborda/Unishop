import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { URL_SERVICIOS } from '../../config/config';
import { UsuarioService } from '../usuario/usuario.service';
import { Categoria } from '../../models/categoria';


@Injectable()
export class CategoriaService {


  totalCategorias: Number = 0;

  constructor(
    public http: HttpClient,
    public _usuarioService: UsuarioService
  ) { }



  cargarCategoria( id: string ) {

    let url = URL_SERVICIOS + '/categoria/' + id;

    return this.http.get( url )
              .map( (resp: any) => resp.categoria );

  }


  crearCategoria( nombre: String) {

    let url = URL_SERVICIOS + '/categoria';
    url += '?token=' + this._usuarioService.token;

    return this.http.post( url, { nombre } )
              .map( (resp: any) => {
              swal('Correcto', 'ingreso: ' + resp.categoria.nombre , 'success');
              });
  }

  activarCategoria( categoria ) {

    let url = URL_SERVICIOS + '/categoria';
    url += '/' + categoria._id;
    url += '?token=' + this._usuarioService.token;

    return this.http.put( url, categoria )
              .map( (resp: any) => {
                swal('Categoria Actualizada', categoria.nombre, 'success');
                return resp.categoria;
              });

  }


  guardarCategoria( categoria: Categoria ) {

    let url = URL_SERVICIOS + '/categoria';

    if ( categoria._id ) {
      // actualizando
      url += '/' + categoria._id;
      url += '?token=' + this._usuarioService.token;

      return this.http.put( url, categoria )
                .map( (resp: any) => {
                  swal('Categoria Actualizada', categoria.nombre, 'success');
                  return resp.categoria;
                });

    }else {

      // creando
      url += '?token=' + this._usuarioService.token;
      return this.http.post( url, categoria )
              .map( (resp: any) => {
                swal('Categoria creada', categoria.nombre, 'success');
                return resp.medico;
              });
    }


  }



  cargarCategorias( desde: number = 0 ) {
  
    let url = URL_SERVICIOS + '/categoria?desde=' + desde;
    return this.http.get( url );

  }


}
