import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../../../models/producto';
import { ProductoService } from '../../../service/service.index';


@Component({
  selector: 'app-productoscompra',
  templateUrl: './productoscompra.component.html'
})
export class ProductoscompraComponent implements OnInit {

  @Input() productos: Producto;

  totalProductos: number = 0;

  constructor(public _productoService: ProductoService) { }

  ngOnInit() { }


 


}
