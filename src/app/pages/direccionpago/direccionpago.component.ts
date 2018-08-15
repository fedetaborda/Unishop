import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm, Validators } from '@angular/forms';

import { Usuario } from '../../models/usuario';
import { Ubicacion } from '../../models/ubicacion';
import { Cart } from '../../models/cart';

import { UsuarioService, ProductoService, UbicacionService } from '../../service/service.index';
import { Router } from '@angular/router';
import { Producto } from '../../models/producto';


@Component({
  selector: 'app-direccionpago',
  templateUrl: './direccionpago.component.html'
})
export class DireccionpagoComponent implements OnInit {


  cheked: Boolean;

  productos: Producto[]

  direccionCheked: Boolean = false;

  usuario: Usuario;

  location: any;

  subTotal: string;

  form: FormGroup;

  ubicaciones: Ubicacion[] = [];


  constructor(public _usuarioService: UsuarioService,
              public _productoService: ProductoService,
              public _ubicacion: UbicacionService,
              public router: Router ) { }

  ngOnInit() {

    
    this.usuario = this._usuarioService.usuario;
    this.subTotal = this._productoService.subTotal;
    this.productos = this._productoService.producinCart();

    if (this.productos.length === 0) {
      console.log(this.productos);
      this.router.navigate(['/productos']);

    }
 

    this.form = new FormGroup({

      direccion: new FormControl(null, Validators.required),
      altura: new FormControl(null, Validators.required),
      ubicacion_tipo: new FormControl('Seleccione Ubicación', Validators.required),
      entre_calles: new FormControl(null),
      telefono: new FormControl(null, Validators.required),
      piso: new FormControl(null),

    });

   // this.cargarUbicaciones();

   this.location = {
    ubicacion: 'Retiro por el Local'
  };

  }

  eliminarUbicacion( id: String) {


     this._ubicacion.eliminarUbicacion( id)
              .subscribe( () => this.cargarUbicaciones() );
  }



  addCart() {
    this._productoService.addLocation(this.location);
    this.router.navigate(['/checkout-pago']);
  }


  cargarUbicaciones() {
   this._ubicacion.cargarUbicaciones( this.usuario._id )
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
