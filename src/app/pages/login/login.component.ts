import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../service/service.index';



declare function init_vendor();
declare function init_plugins();

declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
  
  email: String;
  recuerdame: Boolean = false;
  formaregistro: FormGroup;
  password: String;
  auth2: any;
  cargando: Boolean = false;
  
  constructor(
    public _usuarioService: UsuarioService,
    public router: Router
  ) {}

  ngOnInit() {

    this.email = 'user@gmail.com';
    this.password = '123';


    init_vendor();
    init_plugins();

    this.googleInit();

    this.formaregistro = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      apellido: new FormControl(null, Validators.required),
      correo: new FormControl(null, [Validators.required, Validators.email]),
      password1: new FormControl(null, Validators.required),
      password2: new FormControl(null, Validators.required),
    }, { validators: this.sonIguales( 'password1', 'password2' )});

    
   /* this.email = localStorage.getItem('email') || ''; */

    if ( this.email.length > 1 ) {
      this.recuerdame = true;
    }

  }

  Cargando() {

    this.cargando = true;

  }

  googleInit() {

    gapi.load('auth2', () => {

      this.auth2 = gapi.auth2.init({
        client_id: '324226634105-u9sh7irp6atc1vk6sbndbrl9j09kqcgj.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });

      this.attachSignin( document.getElementById('btnGoogle') );

    });

  }

  attachSignin( element ) {

    this.auth2.attachClickHandler( element, {}, (googleUser) => {

      // let profile = googleUser.getBasicProfile();
      let token = googleUser.getAuthResponse().id_token;

      this._usuarioService.loginGoogle( token )
              .subscribe( () => window.location.href = '#/index/categorias'  
              );
              console.log('paso',  token);


    });

  }

  sonIguales( campo1: string, campo2: string ) {

    return ( group: FormGroup ) => {

      let pass1 = group.controls[campo1].value;
      let pass2 = group.controls[campo2].value;

      if ( pass1 === pass2 ) {
        return null;
      }

      return {
        sonIguales: true
      };

    };

  }

  registrarUsuario() {

    if ( this.formaregistro.invalid ) {
      return;
    }

    let usuario = new Usuario(
      this.formaregistro.value.nombre,
      this.formaregistro.value.apellido,
      this.formaregistro.value.correo,
      this.formaregistro.value.password1
    );

    this._usuarioService.crearUsuario( usuario )
              .subscribe( resp => {
                this.formaregistro.reset();
                console.log(resp.usuario);
              });

  }

  ingresar ( forma: NgForm ) {

    if ( forma.invalid ) {
      return;
    }

    this.cargando = true;

    let usuario_login = new Usuario(null, null, forma.value.email, forma.value.password );

    this._usuarioService.login( usuario_login, forma.value.recuerdame )
                  .subscribe( correcto => this.router.navigate(['/index/categorias'])
                );

    }


}
