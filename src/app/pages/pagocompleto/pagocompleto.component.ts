import { Component, OnInit } from '@angular/core';
import { CartService, UsuarioService } from '../../service/service.index';
import { Cart } from '../../models/cart';

@Component({
  selector: 'app-pagocompleto',
  templateUrl: './pagocompleto.component.html'
})
export class PagocompletoComponent implements OnInit {

   idcompra: string;

  constructor(public _cartService: CartService) { }

  ngOnInit() {

    this.idcompra = this._cartService.compra;

      }

}
