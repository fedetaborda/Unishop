import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';


// Models
import { Producto } from '../../../../models/producto';
import { Categoria } from '../../../../models/categoria';

// Servicios
import { CategoriaService, ProductoService } from '../../../../service/service.index';


@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styles: []
})
export class NuevoComponent implements OnInit {

  categorias: Categoria[] = [];
  producto: Producto = new Producto('', 0 , 0 , '', '', 0 , '' , true , '' );

  constructor(public router: Router,
              public _categoriaService: CategoriaService,
              public _productoService: ProductoService) {}

  ngOnInit() {

      this._categoriaService.cargarCategorias()
              .subscribe( (resp: any) => {
                this.categorias = resp.categorias;
              });

              console.log(this.categorias);

  }

  registrarProducto( forma: NgForm ) {


    if ( forma.invalid  ) {
      return;
    }

    this._productoService.crearProducto( this.producto )
            .subscribe();
            
            forma.reset();

  }


}
