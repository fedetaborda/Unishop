import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../../../models/producto';
import { ProductoService, VerificaTokenGuard } from '../../../service/service.index';



@Component({
  selector: 'app-productoscompra',
  templateUrl: './productoscompra.component.html'
})
export class ProductoscompraComponent implements OnInit {

  @Input() productos: Producto;



  producto: Producto[] = [];

    constructor(public _productoService: ProductoService,
              public _verificaTokenGuard: VerificaTokenGuard) { }

  ngOnInit() {}

  obtenerProducto (id: string) {

    this._productoService.cargarProducto( id )
    .subscribe( producto => {

      //this.producto.push( producto );

      this._productoService.calcularCart(producto);
    });

  }

  cargarProductos() {

    this._productoService.cargarProductos()
      .subscribe( (resp: any) => {
        this.productos = resp.productos;
      });

  }


}