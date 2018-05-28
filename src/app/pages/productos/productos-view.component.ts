import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';


@Component({
  selector: 'app-productos-view',
  templateUrl: './productos-view.component.html'
})
export class ProductosViewComponent implements OnInit {

  productos: Producto[];

  constructor() {}

  ngOnInit() {}

}
