import { Component, OnInit } from '@angular/core';
import { MercadopagoService } from '../../service/service.index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mercadopago',
  templateUrl: './mercadopago.component.html'
})
export class MercadopagoComponent implements OnInit {

  url: string;

  loading: Boolean = false;

  constructor(public _mercadopagoService: MercadopagoService,
              public router: Router) {

                this.url = this._mercadopagoService.fucreturn();
                this.loading = true;

              }

  ngOnInit() {}

}

