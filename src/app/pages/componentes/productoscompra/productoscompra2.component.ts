import { Component, OnInit, Input, Output  } from '@angular/core';
import { Producto } from '../../../models/producto';
import { ProductoService } from '../../../service/service.index';

declare function init_plugin();

@Component({
  selector: 'app-productoscompra2',
  templateUrl: './productoscompra2.component.html'
})
export class Productoscompra2Component implements OnInit {

 // producto: Producto[] = [];
 
  @Input() productos: Producto;


  constructor(public _productoService: ProductoService) { }


  ngOnInit() {

    init_plugin();
  }

  obtenerProducto (id: string, precio: number) {

    if ( id.length > 0 ) {

     return this._productoService.cargarProducto( id, precio )
    .subscribe();

    }

  }


}

