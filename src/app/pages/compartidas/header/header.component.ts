import { Component, OnInit, Input } from '@angular/core';
import { UsuarioService } from '../../../service/service.index';

import { Usuario } from '../../../models/usuario';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {

  usuario: Usuario;


  constructor(public _usuarioService: UsuarioService,
              public router: Router) { }

  ngOnInit() {


    this.usuario = this._usuarioService.usuario;
  }

}
