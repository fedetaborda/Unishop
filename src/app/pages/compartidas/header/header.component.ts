import { Component, OnInit, Input } from '@angular/core';
import { UsuarioService, CartService } from '../../../service/service.index';

import { Usuario } from '../../../models/usuario';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {

  usuario: Usuario;
  total_ventas: Number;
  menu: any[] = [];


  constructor(public _usuarioService: UsuarioService,
              public router: Router,
              public _cartService: CartService) { }

  ngOnInit() {


    this.usuario = this._usuarioService.usuario;

    this._cartService.comprasTotales()
    .subscribe( (resp: any) => {
      this.total_ventas = resp.total_ventas;
    });

    this.menu = this._usuarioService.menu;
  }

}
