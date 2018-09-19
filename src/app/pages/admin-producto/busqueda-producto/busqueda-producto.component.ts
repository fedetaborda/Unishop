import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../../config/config';
import { Producto } from '../../../models/producto';
import { ProductoService } from '../../../service/service.index';



@Component({
  selector: 'app-busqueda-producto',
  templateUrl: './busqueda-producto.component.html'
})
export class BusquedaProductoComponent implements OnInit {

  productos: Producto[] = [];

  producto: Producto[] = [];

  termino: string;

  url: string;

  constructor(
    public activatedRoute: ActivatedRoute,
    public _productoService: ProductoService,
    public http: HttpClient)
    {

      this.activatedRoute.params
      .subscribe( params => {

        this.termino = params['id'];

        this.buscar(this.termino);
      
      });

    }

  ngOnInit() {}

  buscar( termino: string ) {
    
    this.termino = termino;

    /* si params de busqueda inicia con (*) esta buscando por categoria de productos*/

    if ( this.termino.indexOf('*') === 0) {

      /* retiro el * para que pueda realizar la busqueda */

      this.termino = this.termino.slice(1);

    this.url = URL_SERVICIOS + '/busqueda/categoria/' + this.termino;

    } else {

    this.url = URL_SERVICIOS + '/busqueda/producto/' + this.termino;

    }

    this.http.get( this.url )
        .subscribe( (resp: any) => {

          this.productos = resp.producto;

        });

      }


  buscarCategoria( termino: string ) {

    let url = URL_SERVICIOS + '/busqueda/categoria/' + termino;

    this.http.get( url )
        .subscribe( (resp: any) => {

          this.productos = resp.producto;

        });

  }

  obtenerProducto (id: string) {

    this._productoService.cargarProducto( id )
    .subscribe( producto => {
      this.producto.push( producto );

      this._productoService.calcularCart(this.producto);
    });

  }


}
