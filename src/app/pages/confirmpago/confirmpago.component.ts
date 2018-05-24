import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductoService, UbicacionService } from '../../service/service.index';
import { Ubicacion } from '../../models/ubicacion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmpago',
  templateUrl: './confirmpago.component.html'
})
export class ConfirmpagoComponent implements OnInit {

  productos: Producto[] = [];

  ubicacion: Ubicacion[] = [];

  fPago: any[] = [];

  constructor(public _productoService: ProductoService,
              public __ubicacionService: UbicacionService,
              public router: Router) { }

  ngOnInit() {

    // Productos
    this.productos = this._productoService.producinCart();

    
     // Ubicacion de Entrega
     let id = this._productoService.location['ubicacion'];

     this.__ubicacionService.cargarUbicacion( id )
                .subscribe( (resp: any) => {
                  this.ubicacion = resp.ubicacion;
                 });
 
     // Forma de Pago
     this.fPago = this._productoService.pagoCart();
     console.log(this.fPago);

    
  }



}
