import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../service/service.index';

@Component({
  selector: 'app-confirmpago',
  templateUrl: './confirmpago.component.html'
})
export class ConfirmpagoComponent implements OnInit {

  productos: Producto[] = [];

  constructor(public _productoService: ProductoService) { }

  ngOnInit() {

    this.productos = this._productoService.producinCart();
  }

}
