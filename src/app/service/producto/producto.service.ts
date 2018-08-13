import { Injectable, Inject } from '@angular/core';
import { Producto } from '../../models/producto';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { URL_SERVICIOS } from '../../config/config';
import { DOCUMENT } from '@angular/platform-browser';

import { UsuarioService } from '../usuario/usuario.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { NgForm } from '@angular/forms';

import { SubirArchivoService } from '../subir-archivo/subir-archivo.service';
import { Usuario } from '../../models/usuario';
import { element } from 'protractor';



@Injectable()
export class ProductoService {

productos: Producto[] = [];

location: any;

archivo: File;

cantidad = 0;

subTotal: string;

fPago: string;

precio = 0;

  constructor(
    public http: HttpClient,
    public _usuarioService: UsuarioService,
    public _subirArchivoService: SubirArchivoService,
    @Inject(DOCUMENT) private _document
  ) {}

  cargarProducto( id: string ) {

    let url = URL_SERVICIOS + '/producto/id/' + id;
    return this.http.get( url )
    .map( (resp: any) => resp.producto );
  }

  calcularCart(producto) {

    this.productos = producto;

    console.log(this.productos);

    let precio = 0;
    let cantidad = 0;

    for (let i = 0; i < this.productos.length; i++) {

      const element = this.productos[i];

      // Precio con descuento
      if (element['precio_desc']) {

        precio += element['precio_desc'];
        cantidad = (cantidad + element['cantidad']);
   
      } else if (element['precio']) {

      // Precio sin descuento
      precio += element['precio'];
      cantidad = (cantidad + element['cantidad']);

      }

    }

    this._document.getElementById('cart').innerHTML = cantidad;
    this.subTotal = this._document.getElementById('subtotal').innerHTML = precio.toFixed(2);
  }

  calcularCart2(producto) {

    this.productos = producto;

    let precio = 0;
    let cantidad = 0;

    for (let i = 0; i < this.productos.length; i++) {

      const element = this.productos[i];

      // Precio con descuento
      if (element['precio_desc']) {

        cantidad += parseFloat( element['cantidad'].toString() );

      precio += element['precio_desc'] * element['cantidad'];

      } else if (element['precio']) {

      // Precio sin descuento

      cantidad += parseFloat( element['cantidad'].toString() );

      precio += element['precio'] * element['cantidad'];
      }


    }


    this._document.getElementById('cart').innerHTML = cantidad;
    this.subTotal = this._document.getElementById('subtotal').innerHTML = precio.toFixed(2);
  }


  producinCart () {
    return this.productos;
  }

  pagoCart () {
    return this.fPago;
  }

  addLocation ( location: any) {

    this.location = location;

  }

  addfPago ( pago: string) {
 
    this.fPago = pago;
    
  }
 
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


  promocionProductos() {

    let url = URL_SERVICIOS + '/producto/promociones';
    return this.http.get( url );

  }


  vaciarProductos() {
    
    let total = 0.00;

    this._document.getElementById('cart').innerHTML = 0;

    this._document.getElementById('subtotal').innerHTML = total.toFixed(2);

    this.productos = [];

    this.fPago = '';
  }

}
