import { Injectable, Inject, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';

import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { DOCUMENT } from '@angular/platform-browser';

import { UsuarioService } from '../usuario/usuario.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { SubirArchivoService } from '../subir-archivo/subir-archivo.service';



@Injectable()
export class ProductoService {

productos: Producto[] = [];

location: any;

archivo: File;

cantidad = 0;

subTotal: string;

fPago: string;

ids: any[] = [];

total_desc: number = 0;

total_unit: number = 0;


  constructor(
    public http: HttpClient,
    public _usuarioService: UsuarioService,
    public _subirArchivoService: SubirArchivoService,
    @Inject(DOCUMENT) private _document
  ) {}

  OnInit() {}

  cargarProducto( id: string ) {

    let url = URL_SERVICIOS + '/producto/id/' + id;
    return this.http.get( url )
    .map( (resp: any) => resp.producto );

  }

  cargarDestacados() {

    let url = URL_SERVICIOS + '/producto/interes';
    return this.http.get( url );

  }

  calcularCart( producto ) {

    let idx: number;

     this.productos.forEach( () => {

      idx = this.ids.indexOf( producto._id );


    });

    //si producto no existe 
    if ( idx === -1 ) {

      this.ids.push(producto._id);

      this.productos.push( producto );

    // si no es -1 o indefinido (existe)

    } else if ( idx !== undefined ) {

     this.productos[idx].cantidad  = this.productos[idx].cantidad  + 1;

    }

      if ( !this.productos.length ) {


      this.ids.push(producto._id);

      this.productos.push( producto );

    }


    this.cartCalculo( this.productos );
  
  }

    cartCalculo( productos ) {

      this.cantidad ++;

      let total = 0;

      productos.forEach( ( element ) => {

      //console.log(this.productos);

      if ( element.precio_desc) {

   
        total = total + ( element.precio_desc * element.cantidad );

   
     } else if ( element.precio ) {

   
      total = total + ( element.precio * element.cantidad );
   
     }

     console.log( total, 'total' );


     this._document.getElementById('cart').innerHTML = this.cantidad;
     this.subTotal = this._document.getElementById('subtotal').innerHTML = '$' + total.toFixed(2);

    });

 }


  producinCart () {
    return this.productos;
  }

  pagoCart () {
    return this.fPago;
  }

  addLocation ( location: any ) {

    this.location = location;

  }

  addfPago ( pago: string) {

    this.fPago = pago;

  }

  resetProductos() {

    this.ids = [];

    this.productos = [];

    this.cantidad = 0;

    this.total_desc = 0;

    this.total_unit = 0;

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


  productosInteres() {

    let url = URL_SERVICIOS + '/producto/interes';
    return this.http.get( url );

  }


  promocionProductos() {

    let url = URL_SERVICIOS + '/producto/promociones';
    return this.http.get( url );

  }


  limpiarCart () {

    let total = 0.00;

    this.productos = [];

    this.fPago = "";

    this._document.getElementById('cart').innerHTML = 0;

    this._document.getElementById('subtotal').innerHTML = total.toFixed(2);
  }


}
