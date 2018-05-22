import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductoService, UbicacionService } from '../../service/service.index';
import { Ubicacion } from '../../models/ubicacion';

@Component({
  selector: 'app-confirmpago',
  templateUrl: './confirmpago.component.html'
})
export class ConfirmpagoComponent implements OnInit {

  productos: Producto[] = [];

  ubicacion: Ubicacion[] = [];

  constructor(public _productoService: ProductoService,
              public __ubicacionService: UbicacionService) { }

  ngOnInit() {

    this.productos = this._productoService.producinCart();

    let id = this._productoService.location['ubicacion'];

    console.log(id);

    this.__ubicacionService.cargarUbicacion( id )
               .subscribe( (resp: any) => {
                 this.ubicacion = resp.ubicacion;
                });
  }



}
