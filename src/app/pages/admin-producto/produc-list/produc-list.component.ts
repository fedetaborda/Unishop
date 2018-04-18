import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../../service/service.index';

// Models
import { Producto } from '../../../models/producto';


@Component({
  selector: 'app-produc-list',
  templateUrl: './produc-list.component.html',
  styles: []
})
export class ProducListComponent implements OnInit {

  productos: Producto[] = [];

  constructor(public _productoService: ProductoService) { }

  ngOnInit() {

    this._productoService.cargarProductos()
              .subscribe( (resp: any) => {
                this.productos = resp.productos;
              });
  }

}
