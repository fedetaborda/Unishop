import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';




// Models
import { Producto } from '../../../../models/producto';
import { Categoria } from '../../../../models/categoria';

// Declaramos las variables para jQuery
declare var jQuery: any;
declare var $: any;

// Servicios
import { CategoriaService, ProductoService } from '../../../../service/service.index';
import { element } from 'protractor';


@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styles: []
})
export class NuevoComponent implements OnInit {

  form: FormGroup;
  nueva_data: any = [];
  categorias: Categoria[] = [];
  producto: Producto;

  imagenSubir: File = null;

  imagenTemp: string;

  mesaje_require: String = 'Este campo es requerido';

  constructor(public router: Router,
              public _categoriaService: CategoriaService,
              public _productoService: ProductoService) {}

  ngOnInit() {

    this.form = new FormGroup({
      categoria: new FormControl({value: 'Seleccione categoria'}, [Validators.required]),
      nombre: new FormControl(null, [ Validators.required, Validators.minLength(3), Validators.maxLength(50) ]),
      precio: new FormControl(null, [ Validators.required]),
      precio_desc: new FormControl(null),
      descripcion: new FormControl(null,[ Validators.required, Validators.minLength(15), , Validators.maxLength(100)]),
      descuento: new FormControl(null),
      costo: new FormControl(null, [ Validators.required]),
      rango: new FormControl(null, [ Validators.required]),
      estado: new FormControl(true)
    });

      this._categoriaService.cargarCategorias()
              .subscribe( (resp: any) => {
                this.categorias = resp.categorias;
               });

  }

  seleccionImage( archivo: File ) {

    if ( !archivo ) {
      this.imagenSubir = null;
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



  registrarProducto( forma: NgForm ) {

    let producto = new Producto(
      this.form.value.nombre,
      this.form.value.costo,
      this.form.value.precio,
      this.form.value.descripcion,
      this.form.value.categoria,
      this.form.value.estado,
      this.form.value.rango,
      this.form.value.marca,
      this.form.value.descuento,
      this.form.value.precio_dsc
    );

    if ( forma.invalid  ) {
      return;
    }

    this._productoService.crearProducto( producto , this.imagenSubir )
            .subscribe();
            
  }

  

}
