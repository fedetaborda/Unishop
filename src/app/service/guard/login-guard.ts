import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { UsuarioService } from '../service.index';


@Injectable()
export class LoginGuardGuard implements CanActivate {

  constructor(
    public _usuarioService: UsuarioService,
    public router: Router
  ) {}
  
  canActivate() {

    if ( this._usuarioService.estaLogueado() ) {
      return true;
    } else {

      this.router.navigate(['/login']);
      return false;
    }

  }

}
