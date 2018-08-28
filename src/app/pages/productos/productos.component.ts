import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../../models/producto';



@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html'
})
export class ProductosComponent implements OnInit {

  productos: Producto[] = [];

  constructor() {}

  ngOnInit() {  }


}
