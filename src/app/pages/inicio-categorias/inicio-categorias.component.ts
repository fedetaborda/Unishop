import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../service/service.index';

declare function init_vendor();
declare function init_plugins();


@Component({
  selector: 'app-inicio-categorias',
  templateUrl: './inicio-categorias.component.html'
})


export class InicioCategoriasComponent implements OnInit {

  productos: Producto[] = [];

  constructor(public _productoService: ProductoService) { }

  ngOnInit() {

    init_vendor();
    init_plugins();
    
    this._productoService.promocionProductos()
              .subscribe( (resp: any) => {
                this.productos = resp.productos;
              });

  }

}
