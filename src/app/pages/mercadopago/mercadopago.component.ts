import { Component, OnInit } from '@angular/core';
import { MercadopagoService, ProductoService, CartService } from '../../service/service.index';
import { Router } from '@angular/router';
import { UsuarioService } from '../../service/usuario/usuario.service';

@Component({
  selector: 'app-mercadopago',
  templateUrl: './mercadopago.component.html'
})
export class MercadopagoComponent implements OnInit {

  url: string;

  loading: Boolean = false;

  idcompra: string;

  constructor(public _mercadopagoService: MercadopagoService,
              public _usuarioService: UsuarioService,
              public _productoService: ProductoService,
              public _cartService: CartService,
              public router: Router) {  }

  ngOnInit() {
  
    let pago = {
      id: `${ new Date().getMilliseconds() }`,
      email: this._usuarioService.usuario.email,
      total: this._productoService.subTotal
    };

    this._mercadopagoService.crearMPago( pago )
                               .subscribe( (resp: any) => {
                                  this.url = resp;
                                  this.loading = true;
                      });


    this.idcompra = this._cartService.compra;

    }



}

