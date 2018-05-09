import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../service/service.index';

@Component({
  selector: 'app-direccionpago',
  templateUrl: './direccionpago.component.html'
})
export class DireccionpagoComponent implements OnInit {

  usuario: Usuario;

  constructor(public _usuarioService: UsuarioService) { }

  ngOnInit() {

    this.usuario = this._usuarioService.usuario;

  }

}
