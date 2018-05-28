import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../service/service.index';

@Component({
  selector: 'app-mediopago',
  templateUrl: './mediopago.component.html'
})
export class MediopagoComponent implements OnInit {

  chekPago: Boolean;

  constructor(public _productoService: ProductoService) { }

  ngOnInit() {

    console.log(this.chekPago);
  }


  formaPago( pago: string ) {

    let fpago = {
      formaPago: pago
    };

    this._productoService.addfPago( fpago );

    this.chekPago = true;


    console.log(this.chekPago);
}

}
