import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { ProductoService } from '../../service/service.index';
import { Producto } from '../../models/producto';
import { DOCUMENT } from '@angular/platform-browser';


@Component({
  selector: 'app-cart',
  templateUrl: './cartList.component.html'
})
export class CartListComponent implements OnInit {

  productos: Producto[] = [];

  @ViewChild('cboCant') cboCant: ElementRef;

  constructor(private _productoService: ProductoService,
          @Inject(DOCUMENT) private _document ) { }

  ngOnInit() {

    this.productos = this._productoService.producinCart();
  }

  cambioCantidad() {
    
   this._productoService.calcularCart2(this.productos);

  }
  

  resetCart() {
    this._document.getElementById('cart').innerHTML = 0;
    this._document.getElementById('subtotal').innerHTML = '0.00';
  }


  eleminarCart( i: number ) {
  
    this.productos.splice( i , 1 );

  if ( this.productos.length > 0) {
    this._productoService.calcularCart(this.productos);
    }

    if (!this.productos.length) {
    this.resetCart();
    }


  }

  eliminartodo() {

    this.productos.splice(0, this.productos.length);

    this.resetCart();
  }

}
