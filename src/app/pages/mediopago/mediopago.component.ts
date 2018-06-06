import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../service/service.index';


@Component({
  selector: 'app-mediopago',
  templateUrl: './mediopago.component.html'
})
export class MediopagoComponent implements OnInit {


  constructor(public _productoService: ProductoService) { }

  ngOnInit() {

  }


  formaPago( pago: string ) {

   this._productoService.addfPago( pago );

}

}
