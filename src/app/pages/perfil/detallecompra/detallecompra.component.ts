import { Component, OnInit } from '@angular/core';
import { Cart } from '../../../models/cart';
import { CartService } from '../../../service/service.index';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../../../models/producto';

@Component({
  selector: 'app-detallecompra',
  templateUrl: './detallecompra.component.html'
})


export class DetallecompraComponent implements OnInit {

  cart: Cart[] = [];

  productos: Producto[] = [];

  constructor(public _cartService: CartService,
              public activatedRoute: ActivatedRoute) {

    activatedRoute.params.subscribe( params => {

      let id = params['id'];

      this._cartService.detalleCompra( id )
      .subscribe( (resp: any) => {
        this.cart = resp.cart,
        this.productos = resp.cart[0].productos;
      });

    });

  }

  ngOnInit() {

  }

  


}
