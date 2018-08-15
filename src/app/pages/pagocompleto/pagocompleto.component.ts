import { Component, OnInit } from '@angular/core';
import { CartService, UsuarioService } from '../../service/service.index';

@Component({
  selector: 'app-pagocompleto',
  templateUrl: './pagocompleto.component.html'
})
export class PagocompletoComponent implements OnInit {

  idCompra: string;

  constructor(public _cartService: CartService,
              public _usuarioService: UsuarioService) { }

  ngOnInit() {

    let user = this._usuarioService.usuario._id;

    this._cartService.carUser(user)
                     .subscribe( (resp) => this.idCompra = resp.idCompra );
  }

}
