import { Component, OnInit, Input, Output  } from '@angular/core';
import { Producto } from '../../../models/producto';
import { ProductoService } from '../../../service/service.index';


@Component({
  selector: 'app-productoscompra2',
  templateUrl: './productoscompra2.component.html'
})
export class Productoscompra2Component implements OnInit {

 producto: Producto[] = [];
 
  @Input() productos: Producto;


  constructor(public _productoService: ProductoService) { }


  ngOnInit() {

  }

  obtenerProducto (id: string) {

    if ( id.length > 0 ) {

    this._productoService.cargarProducto( id )
    .subscribe( producto => {
      this.producto.push( producto );

      this._productoService.calcularCart(this.producto);
    });


    }

  }


}

