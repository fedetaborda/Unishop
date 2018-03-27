import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Producto } from '../../../../models/producto';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styles: []
})
export class NuevoComponent implements OnInit {

  forma: FormGroup;

  constructor(public router: Router) { }

  ngOnInit() {

    this.forma = new FormGroup({
      nombre: new FormControl( null , Validators.required ),
      precio: new FormControl( null , Validators.required )
    });

  }

  registrarProducto( forma ) {

  }

}
