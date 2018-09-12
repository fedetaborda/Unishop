
import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductoService, UbicacionService, CartService, MercadopagoService } from '../../service/service.index';
import { Ubicacion } from '../../models/ubicacion';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario';
import { Cart } from '../../models/cart';
import { MercadoPago } from '../../models/mercadopago';
import { UsuarioService } from '../../service/usuario/usuario.service';
@Component({
  selector: 'app-confirmpago',
  templateUrl: './confirmpago.component.html'
})
export class ConfirmpagoComponent implements OnInit {

  pago: MercadoPago[] = [];

  usuario: Usuario;

  productos: Producto[] = [];

  ubicacion: string;

  fPago: string;

  user: any[] = [];

  url: string;

  cart: Cart;

  constructor(public _productoService: ProductoService,
    public _ubicacionService: UbicacionService,
    public _mercadopagoService: MercadopagoService,
    public _cartService: CartService,
    public _usuarioService: UsuarioService,
    public router: Router) { }

  ngOnInit() {

    // Productos
    this.productos = this._productoService.producinCart();

     /*
     let id = this._productoService.location['ubicacion'];

     this._ubicacionService.cargarUbicacion( id )
                .subscribe( ubicacion => {
                  this.ubicacion = ubicacion;
                  this.user = ubicacion.usuario;
                 }); */
 
     // Usuario
     this.usuario = this._usuarioService.usuario;
 
     // Forma de Pago
     this.fPago = this._productoService.pagoCart();

     this.ubicacion = 'Local';

     console.log(this.fPago);

     if (!this.fPago) {
      
      this.router.navigate(['/productos']);

    }

  }


  finalizarPago() {

if ( this.fPago === 'Mercado Pago') {

      this.router.navigate(['/mercadopago']);

    } else if (this.fPago === 'Pago en Efectivo') {

      // Nombre de archivo personalizado
      // 12312312312-123.png
      let idCompra = `${ new Date().getFullYear()} - ${ new Date().getDate()}${ new Date().getHours()}${ new Date().getMinutes()}${ new Date().getMilliseconds()}`;

      this._cartService.idcompra(idCompra);
      
      this.cart = new Cart( this.productos, this.ubicacion, this.fPago, idCompra );

      this._cartService.crearCart( this.cart )
                  .subscribe( (resp: any) => {
                  this.router.navigate(['/pago-finalizado']);
              });

      }

    }


}