import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../../../models/producto';

@Component({
  selector: 'app-productoscompra2',
  templateUrl: './productoscompra2.component.html'
})
export class Productoscompra2Component implements OnInit {

  @Input() productos: Producto;

  @Output('productoId') public productoId: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  prodId ( id: string) {

   this.productoId.emit( id );


  }

}
