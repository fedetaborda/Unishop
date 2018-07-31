import { Component, OnInit, Input } from '@angular/core';

import { ProductoService } from '../../service/service.index';
import { Productoscompra2Component } from '../componentes/productoscompra/productoscompra2.component';
import { Producto } from '../../models/producto';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html'
})
export class ProductosComponent implements OnInit {

  
  constructor(){}

  ngOnInit() {  }


}
