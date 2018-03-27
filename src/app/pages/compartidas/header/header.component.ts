import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../service/service.index';

import { Usuario } from '../../../models/usuario';
import { Router } from '@angular/router';


declare function init_plugins();

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  usuario: Usuario;

  constructor(public _usuarioService: UsuarioService,
              public router: Router) { }

  ngOnInit() {
    this.usuario = this._usuarioService.usuario;
  }

}
