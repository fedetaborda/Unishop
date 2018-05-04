import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../../../models/producto';
import { ProductoService } from '../../../service/service.index';



@Component({
  selector: 'app-productoscompra',
  templateUrl: './productoscompra.component.html'
})
export class ProductoscompraComponent implements OnInit {

  @Input() productos: Producto;

 // producto: Producto[] = [];

  constructor(public _productoService: ProductoService) { }

  ngOnInit() { }

  obtenerProducto (id: string) {

    if ( id.length <= 0 ) {
      return false;
    } else {

     return this._productoService.cargarProducto(id)
    .subscribe();

    }


  }


}
