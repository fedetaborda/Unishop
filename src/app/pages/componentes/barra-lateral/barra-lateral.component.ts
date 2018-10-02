import { Component, Output, OnInit, EventEmitter} from '@angular/core';
import { Categoria } from '../../../models/categoria';
import { CategoriaService, ProductoService } from '../../../service/service.index';
import { Producto } from '../../../models/producto';


declare function init_vendor();
declare function init_plugins();



@Component({
  selector: 'app-barra-lateral',
  templateUrl: './barra-lateral.component.html',
  styles: []
})

export class BarraLateralComponent implements OnInit {

 @Output('seleciontProd') seleciontProd: EventEmitter<any> = new EventEmitter();

  productos: Producto[] = [];

  productosbuscardor: Producto[] = [];

  categorias: Categoria[] = [];

  arrayCategoria: any[] = [];

  arrayProducto: any[] = [];

  filtro: any[] = [];


  constructor(public _categoriaService: CategoriaService,
              public _productoService: ProductoService) { 

          init_vendor();
          init_plugins();

    this._productoService.cargarProductos()
      .subscribe( (resp: any) => {
        this.productosbuscardor = resp.productos;

        this._categoriaService.cargarCategorias()
        .subscribe( (resp2: any) => {
          this.categorias = resp2.categorias;
          console.log(this.categorias );


          for (let c = 0; c < this.categorias.length - 1; c++) {
  
            const categoria = this.categorias[c].nombre;

            const id = this.categorias[c]._id;

                for (let index = 0; index < this.productosbuscardor.length; index++) {

              const producto = this.productosbuscardor[index].categoria['nombre'];

              if ( producto === categoria ) {

                this.arrayProducto.push( { 'id': this.productosbuscardor[index]._id, 'producto': this.productosbuscardor[index].nombre });

              }

          }/* fin for productos */

          this.filtro.push(

            { 
            'id' : id,

            'categoria' : categoria,

            'productos' : this.arrayProducto});

              this.arrayProducto = [];

          }/* fin for categorias */


        });

        

      });
              }

  ngOnInit() {

     }

  selectProd (id: string) {

  this._productoService.cargarProducto( id )
      .subscribe( producto => {
        this.productos = [];
        this.productos.push( producto );
        this.seleciontProd.emit( this.productos );
      });

  }

}
