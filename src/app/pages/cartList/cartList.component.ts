import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { ProductoService } from '../../service/service.index';
import { Producto } from '../../models/producto';
import { DOCUMENT } from '@angular/platform-browser';
import { forEach } from '@angular/router/src/utils/collection';


@Component({
  selector: 'app-cart',
  templateUrl: './cartList.component.html'
})
export class CartListComponent implements OnInit {

  productos: Producto[] = [];

  prodInteres: Producto[] = [];

  subTotal: string;

  ids: any [] = [];

  array: any [] = [];

  @ViewChild('cboCant') cboCant: ElementRef;

  constructor(public _productoService: ProductoService,
          @Inject(DOCUMENT) private _document ) {}

  ngOnInit() {

   // this.array = this._productoService.producinCart();

    this.productos = this._productoService.producinCart();

  }

  cambioCantidad() {

   this._productoService.cartCalculo( this.productos );

  }

  resetCart() {
    this._document.getElementById('cart').innerHTML = 0;
    this.subTotal = this._document.getElementById('subtotal').innerHTML = '$0.00';
  }


  eleminarCart( i: number ) {
  
    this.productos.splice( i , 1 );

  if ( this.productos.length > 0) {
    this._productoService.cartCalculo( this.productos );
    }

    if (!this.productos.length) {

    this.eliminartodo();

    }

  }

  eliminartodo() {

    this.productos.splice(0, this.productos.length);

    this.resetCart();

    this._productoService.resetProductos();

  }

}
