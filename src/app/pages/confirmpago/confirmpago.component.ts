import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductoService, UbicacionService, CartService, MercadopagoService } from '../../service/service.index';
import { Ubicacion } from '../../models/ubicacion';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario';
import { Cart } from '../../models/cart';

@Component({
  selector: 'app-confirmpago',
  templateUrl: './confirmpago.component.html'
})
export class ConfirmpagoComponent implements OnInit {

  productos: Producto[] = [];

  ubicacion: Ubicacion[] = [];

  fPago: string;

  user: any[] = [];

  cart: Cart;

  constructor(public _productoService: ProductoService,
              public _ubicacionService: UbicacionService,
              public _cartService: CartService,
              public _mercadopagoService: MercadopagoService,
              public router: Router) { }

  ngOnInit() {

    // Productos
    this.productos = this._productoService.producinCart();

    
     // Ubicacion de Entrega
     let id = this._productoService.location['ubicacion'];

     this._ubicacionService.cargarUbicacion( id )
                .subscribe( ubicacion => {
                  this.ubicacion = ubicacion;
                  this.user = ubicacion.usuario;
                 });
 
     // Forma de Pago
     this.fPago = this._productoService.pagoCart();
  }

  reset(){

    
  }

  finalizarPago() {


    if ( this.fPago === 'Mercado Pago') {

 
       this._mercadopagoService.crearpago( )
                   .subscribe( (resp: any) => {
                    console.log(resp);
                    });

    } else if (this.fPago === 'Pago en Efectivo') {

      // Nombre de archivo personalizado
      // 12312312312-123.png
      let idCompra = `${ new Date().getFullYear()}${ new Date().getMonth() }-${ new Date().getMilliseconds()}`;

      this.cart = new Cart( this.productos, this.ubicacion['_id'], this.fPago, idCompra );

      this._cartService.crearCart( this.cart )
                  .subscribe( () => {
                  this.router.navigate(['/pago-finalizado']);
              });

      }

    }

}
