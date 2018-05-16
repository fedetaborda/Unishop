import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm, Validators } from '@angular/forms';

import { Usuario } from '../../models/usuario';
import { Ubicacion } from '../../models/ubicacion';

import { UsuarioService, ProductoService, UbicacionService } from '../../service/service.index';


@Component({
  selector: 'app-direccionpago',
  templateUrl: './direccionpago.component.html'
})
export class DireccionpagoComponent implements OnInit {

  usuario: Usuario;

  subTotal: string;

  form: FormGroup;

  Ubicacion: Ubicacion;

  ubicaciones: Ubicacion[] = [];

  constructor(public _usuarioService: UsuarioService,
              public _productoService: ProductoService,
              public _ubicacion: UbicacionService ) { }

  ngOnInit() {

    this.usuario = this._usuarioService.usuario;
    this.subTotal = this._productoService.subTotal;

    this.form = new FormGroup({

      direccion: new FormControl(null, Validators.required),
      altura: new FormControl(null, Validators.required),
      ubicacion_tipo: new FormControl('Seleccione Ubicación', Validators.required),
      entre_calles: new FormControl(null),
      telefono: new FormControl(null, Validators.required),
      piso: new FormControl(null),

    });

    this.cargarUbicaciones();
  }

  cargarUbicaciones() {

   this._ubicacion.cargarUbicaciones()
              .subscribe( (resp: any) => {
                this.ubicaciones = resp.ubicacion;
               });
  }


  registrarDireccion( forma: NgForm ) {

    let ubicacion = new Ubicacion (

      this.form.value.direccion,
      this.form.value.altura,
      this.form.value.ubicacion_tipo,
      this.form.value.entre_calles,
      this.form.value.telefono,
      this.form.value.piso

    );

    if ( forma.invalid  ) {
      return;
    }

  this._ubicacion.crearUbicacion( ubicacion )
          .subscribe( () => this.cargarUbicaciones() );

          

          this.form.reset();

  }


}
