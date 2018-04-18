import { Injectable } from '@angular/core';
import { Producto } from '../../models/producto';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { URL_SERVICIOS } from '../../config/config';

import { UsuarioService } from '../usuario/usuario.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { NgForm } from '@angular/forms';

import { SubirArchivoService } from '../subir-archivo/subir-archivo.service';
import { Usuario } from '../../models/usuario';


@Injectable()
export class ProductoService {

  producto: Producto;

  archivo: File;

  constructor(
    public http: HttpClient,
    public _usuarioService: UsuarioService,
    public _subirArchivoService: SubirArchivoService
  ) { }


  crearProducto( producto: Producto , imagen: File ) {

    let url = URL_SERVICIOS + '/producto';
    url += '?token=' + this._usuarioService.token;

    this.archivo = imagen;

    return this.http.post( url, producto  )
          .map( (resp: any) => {

           this.cambiarImagen( this.archivo , resp.producto._id );

         swal('Correcto', 'ingreso: ' + resp.producto.nombre , 'success');
      });

  }

  cambiarImagen( archivo: File, id: string ) {

    this._subirArchivoService.subirArchivo( archivo, 'producto' , id )
          .then( (resp: any) => {
            console.log( resp );
          })
          .catch( resp => {
            console.log( resp );
          }) ;

  }


  cargarProductos( desde: number = 0 ) {

    let url = URL_SERVICIOS + '/producto?desde=' + desde;
    return this.http.get( url );

  }

}
