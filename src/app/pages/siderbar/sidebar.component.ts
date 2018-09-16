import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../service/service.index';
import { Producto } from '../../models/producto';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  subTotal: string;

  productos: Producto[] = [];

  constructor(public _productoService: ProductoService) {}

  ngOnInit() {

 
    this.subTotal = this._productoService.subTotal;

    this._productoService.cargarDestacados()
              .subscribe( (resp: any) => {
               let arreglo = resp.productos;

                this.productos.push( this.random_item(arreglo) );

              });

  }

  random_item(items) {
      
     return items[Math.floor(Math.random()*items.length)];

 }





}
