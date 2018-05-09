
import { Component, OnInit, Input } from '@angular/core';
import { ProductoService } from '../../../service/producto/producto.service';
import { Producto } from '../../../models/producto';
import { Subscription } from 'rxjs/Subscription';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {

  @Input() productoId: String;

  //producto: Producto[] = [];

  constructor() {
  console.log('cart', this.productoId);

  }

  ngOnInit() {}



}





