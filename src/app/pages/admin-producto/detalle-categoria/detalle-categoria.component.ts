import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../../models/categoria';
import { CategoriaService } from '../../../service/service.index';
import { NgForm, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-detalle-categoria',
  templateUrl: './detalle-categoria.component.html',
  styles: []
})
export class DetalleCategoriaComponent implements OnInit {

  categorias: Categoria[] = [];
  categoria: Categoria;
  totalRegistros: number = 0;
  desde: number = 0;
  btn_editar: boolean = false;

  constructor(public _categoriaService: CategoriaService) { }

  ngOnInit() {

    this.cargarCategorias();

  }

  activarCategoria ( categoria: Categoria ) {


    this.categoria = new Categoria( true ,  categoria.nombre , categoria._id );

    this._categoriaService.activarCategoria(  this.categoria )
              .subscribe( () => this.cargarCategorias());

  }

  desactivarCategoria ( categoria: Categoria ) {


    this.categoria = new Categoria( false ,  categoria.nombre , categoria._id );

    this._categoriaService.activarCategoria(  this.categoria )
              .subscribe( () => this.cargarCategorias());

  }


  editar( id: string ) {

  this.btn_editar = true;

  this._categoriaService.cargarCategoria( id )
          .subscribe( categoria => {
            this.categoria = categoria;
          });
  }


  cambiarDesde( valor: number ) {

    const desde = this.desde + valor;

    if (valor === 0 ) {
      this.desde = 0;
      this.cargarCategorias();
      return;
    }

    if ( desde >= this.totalRegistros ) {
      return;
    }

    if ( desde < 0 ) {
      return;
    }

    this.desde += valor;
    this.cargarCategorias();

  }


  cargarCategorias() {
    this._categoriaService.cargarCategorias( this.desde )
              .subscribe( (resp: any) => {

                this.totalRegistros = resp.total;
                this.categorias = resp.categorias;

                console.log(this.totalRegistros);
              });

  }



  guardarCategoria(  forma: NgForm ) {

    if ( forma.invalid ) {
      return;
    }

    if (this.btn_editar === true) {

     this._categoriaService.guardarCategoria( this.categoria )
              .subscribe( () => this.cargarCategorias());

      this.btn_editar = false;

    } else {

    this._categoriaService.crearCategoria( forma.value.nombre )
              .subscribe( () => this.cargarCategorias());
              forma.reset();
    }

  }

}
