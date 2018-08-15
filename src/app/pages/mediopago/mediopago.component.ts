import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService, MercadopagoService } from '../../service/service.index';
import { Producto } from '../../models/producto';


@Component({
  selector: 'app-mediopago',
  templateUrl: './mediopago.component.html'
})
export class MediopagoComponent implements OnInit {

  url: string;

  productos: Producto[];

  pago: string;

  constructor(public _productoService: ProductoService,
              public router: Router) { }

  ngOnInit() {

    this.productos = this._productoService.producinCart();

    if (this.productos.length === 0) {

      this.router.navigate(['/productos']);

    }

  }

  formaPago( pago: string ) {

    this.pago = pago;

   this._productoService.addfPago( this.pago  );

  }

}
