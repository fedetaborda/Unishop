import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../service/service.index';
import { Usuario } from '../../../models/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html'
})
export class ComprasComponent implements OnInit {

  usuario: Usuario;
  imagenTemp: string;
  imagenSubir: File;

  constructor(
    public _usuarioService: UsuarioService,
    public router: Router
  ) { }

  ngOnInit() {
    this.usuario = this._usuarioService.usuario;
  }

  guardar( usuario: Usuario ){

    this.usuario.nombre = usuario.nombre;
    this.usuario.apellido = usuario.apellido;
    this.usuario.telefono = usuario.telefono;
    this.usuario.email = usuario.email;
    
    if ( !this.usuario.google ) {
      this.usuario.email = usuario.email;
    }

    this._usuarioService.actualizarUsuario( this.usuario )
                .subscribe();
  
  }

  seleccionImage( archivo: File ) {

    if ( !archivo ) {
      this.imagenSubir = null;
      console.log(this.imagenSubir);
      return;
    }

    if ( archivo.type.indexOf('image') < 0 ) {
      swal('Sólo imágenes', 'El archivo seleccionado no es una imagen', 'error');
      this.imagenSubir = null;
      return;
    }

    this.imagenSubir = archivo;

    let reader = new FileReader();
    let urlImagenTemp = reader.readAsDataURL( archivo );

    reader.onloadend = () => this.imagenTemp = reader.result;

  }

  cambiarImagen() {

    this._usuarioService.cambiarImagen( this.imagenSubir, this.usuario._id );

  }


}
