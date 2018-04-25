import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../../../models/producto';

@Component({
  selector: 'app-productoscompra2',
  templateUrl: './productoscompra2.component.html',
  styleUrls: []
})
export class Productoscompra2Component implements OnInit {

  @Input() productos: Producto;

  totalProductos: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
