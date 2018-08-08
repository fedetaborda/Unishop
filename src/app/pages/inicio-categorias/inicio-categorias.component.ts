import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../service/service.index';

declare function init_plugin_vendor();

declare function init_plugin_vendor();
declare function init_plugin();


@Component({
  selector: 'app-inicio-categorias',
  templateUrl: './inicio-categorias.component.html'
})


export class InicioCategoriasComponent implements OnInit {

  productos: Producto[] = [];

  constructor(public _productoService: ProductoService) { }

  ngOnInit() {

    this._productoService.promocionProductos()
              .subscribe( (resp: any) => {
                this.productos = resp.productos;
                console.log(this.productos);
              });


  }

}
