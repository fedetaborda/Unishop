import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../../config/config';
import { Producto } from '../../../models/producto';


@Component({
  selector: 'app-buscadorview2',
  templateUrl: './buscadorview2.component.html'
})
export class Buscadorview2Component implements OnInit {

  productos: Producto[] = [];

  termino: string;

  constructor(public activatedRoute: ActivatedRoute,
    public http: HttpClient) {
        
      this.activatedRoute.params
      .subscribe( params => {
        this.termino = params['id'];
        this.buscar( this.termino );
      });

     }

  ngOnInit() { 

  }

  buscar( termino: string ) {

    let url = URL_SERVICIOS + '/busqueda/producto/' + termino;

    this.http.get( url )
        .subscribe( (resp: any) => {

          console.log( resp.producto );

          this.productos = resp.producto;

        });
  }

}
