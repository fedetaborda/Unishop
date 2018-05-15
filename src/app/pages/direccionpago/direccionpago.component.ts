import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm, Validators } from '@angular/forms';

import { Usuario } from '../../models/usuario';
import { Ubicacion } from '../../models/ubicacion';

import { UsuarioService, ProductoService } from '../../service/service.index';


@Component({
  selector: 'app-direccionpago',
  templateUrl: './direccionpago.component.html'
})
export class DireccionpagoComponent implements OnInit {

  usuario: Usuario;

  subTotal: string;

  constructor(public _usuarioService: UsuarioService,
    public _productoService: ProductoService) { }

  ngOnInit() {

    this.usuario = this._usuarioService.usuario;
    this.subTotal = this._productoService.subTotal;

  }


  registrarDireccion() {
    
  }


}
