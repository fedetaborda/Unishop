import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoService } from '../../service/service.index';
import { URL_SERVICIOS } from '../../config/config';
import { Producto } from '../../models/producto';


@Component({
  selector: 'app-buscardor-prod',
  templateUrl: './buscardor-prod.component.html'
})
export class BuscardorProdComponent implements OnInit {

  @Output('buscardorProd') buscardorProd: EventEmitter<any> = new EventEmitter();

  productos: Producto[] = [];

  cargando: boolean = true;

  constructor(public http: HttpClient, public _productoService: ProductoService) {}

  ngOnInit() {

    this.cargarTodos();
  }

  cargarTodos() {

    this._productoService.cargarProductos()
      .subscribe( (resp: any) => {
        this.productos = resp.productos;
        this.buscardorProd.emit( this.productos );
        this.cargando = false;
      });

  }

  

  buscar( termino: string ) {

    if ( termino.length === 0 ) {

      return this.cargarTodos();
    }

    this.cargarProductos ( termino );

  }

  cargarProductos ( termino: string ) {

    let url = URL_SERVICIOS + '/busqueda/producto/' + termino;
    return this.http.get( url )
          .subscribe( (resp: any) => {

          this.productos = resp.producto;

          this.buscardorProd.emit( this.productos );

        });

  }

}
