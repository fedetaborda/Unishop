import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../../config/config';
import { Producto } from '../../../models/producto';

declare function init_plugin();


@Component({
  selector: 'app-busqueda-producto',
  templateUrl: './busqueda-producto.component.html'
})
export class BusquedaProductoComponent implements OnInit {

  productos: Producto[] = [];

  termino: string;

  constructor(
    public activatedRoute: ActivatedRoute,
    public http: HttpClient)
    {

      this.activatedRoute.params
      .subscribe( params => {
        this.termino = params['id'];
        this.buscar( this.termino );
      });

    }

  ngOnInit() {

    init_plugin();

  }


  buscar( termino: string ) {

    let url = URL_SERVICIOS + '/busqueda/producto/' + termino;

    this.http.get( url )
        .subscribe( (resp: any) => {

          this.productos = resp.producto;

          console.log( this.productos );

        });

        this.productos = [];
  }


}
