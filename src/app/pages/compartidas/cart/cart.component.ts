
import { Component, OnInit, Input } from '@angular/core';
import { ProductoService } from '../../../service/producto/producto.service';
import { Producto } from '../../../models/producto';
import { Subscription } from 'rxjs/Subscription';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {

  subscription: Subscription;

  // producto: Producto[] = [];

  constructor( public _producto: ProductoService) {

    this.subscription = this._producto.productoObservable()
      .subscribe( producto => console.log( 'Subs', producto ));

  }

  ngOnInit() {}



}





