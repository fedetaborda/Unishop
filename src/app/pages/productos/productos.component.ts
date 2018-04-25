import { Component, OnInit, Input } from '@angular/core';

import { Producto } from '../../../../Unishop/src/app/models/producto';
import { ProductoService } from '../../service/service.index';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html'
})
export class ProductosComponent implements OnInit {


  constructor(public _productoService: ProductoService)
    {}

  ngOnInit() {  }


}
