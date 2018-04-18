import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../../config/config';
import { Producto } from '../../../models/producto';

declare function init_plugins();


@Component({
  selector: 'app-busqueda-producto',
  templateUrl: './busqueda-producto.component.html'
})
export class BusquedaProductoComponent implements OnInit {

  producto: Producto[] = [];

  constructor(
    public activatedRoute: ActivatedRoute,
    public http: HttpClient)
    {
      
      this.activatedRoute.params
      .subscribe( params => {
        let termino = params['id'];
        this.buscar( termino );
      });

      this.producto = [];

    }

  ngOnInit() {
    init_plugins();
  }


  buscar( termino: string ) {

    

    let url = URL_SERVICIOS + '/busqueda/producto/' + termino;

    this.http.get( url )
        .subscribe( (resp: any) => {

          console.log( resp.producto );

          this.producto = resp.producto;

        });
  }


}
