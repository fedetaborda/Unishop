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

  editar( id: string) {

  this.btn_editar = true;

  this._categoriaService.cargarCategoria( id )
          .subscribe( categoria => {
            console.log(categoria.nombre)
            this.categoria = categoria;
            
          }) 
          
  }


  cambiarDesde( valor: number ) {

    let desde = this.desde + valor;

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
              });

  }



  guardarCategoria(  forma: NgForm ) {

    if ( forma.invalid ) {
      return;
    }

    if (this.btn_editar == true) {

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
